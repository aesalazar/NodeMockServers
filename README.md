# Mocking Web Servers with Node.js
Source code for blog posts "How to mock web servers using Node.js" parts 1 and 2 which can be found here:

* <a href="http://www.eikospartners.com/blog/how-to-mock-web-servers-using-node.js-part-1-http" target="_blank">How to mock web servers using Node.js - Part 1: HTTP</a>
* <a href="http://www.eikospartners.com/blog/how-to-mock-web-servers-using-node.js-part-2-websockets" target="_blank">How to mock web servers using Node.js - Part 2: Websockets server</a>

This was built in Visual Studios 2015 using the Node.js extension but it can be ran like any other node project.
Remember to run 

`npm install` 

to get needed dependencies and then 

`npm start`

to start the servers.

Once started, it will make available two separate servers - one for HTTP and the other for websockets.
They will be listening on the following ports:

```javascript
//Ports
var httpPort = 8888;
var wsPort = 8889;
```

They can be tested using the included `ClientWebSocket.html` file in a browser.