//npm modules
var http = require("http");
var url = require("url");
var websocket = require('ws');

//Ports
var httpPort = 8888;
var wsPort = 8889;

//Create the HTTP server
function onHttpRequest(request, response) {
    
    //Parse the request and see
    var requestUrl = url.parse(request.url);

    console.log("Request for '" + requestUrl.pathname + "' received.");
    console.log("Query for '" + requestUrl.query + "' received.");

    //Provide a proper response:
    var responseText = "<html><head><body><ul>" 
        + "<li>Request for '" + requestUrl.pathname + "' received.</li>" 
        + "<li>Query for '" + requestUrl.query + "' received.</li>"
        + "</ul></head><body></html>";

    response.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": responseText.length
    });
    
    response.write(responseText);
    response.end();
}

http.createServer(onHttpRequest).listen(httpPort);


// Create web socket server
var WebSocketServer = websocket.Server;
var wss = new WebSocketServer({ port: wsPort });

//Wire its handlers
wss.on('connection', function (ws) {
    //Show the connection has been established in the console
    console.log("\nWS Connection established:");
    console.log(ws.upgradeReq.headers);
    
    //Wire the event handlers
    ws.on('message', function (data) {
        //Show the message object in the console
        var message = JSON.parse(data);
        console.log("\nWS Message received from client:");
        console.log(message);

        //Let the client know something was received
        var messageback = {
            source: "WebAppsNodeJs Application (server)",
            port: wsPort,
            message:"Client Message Received!"
        }
        ws.send(JSON.stringify(messageback));
    });
});


