import data from './data.js';
import * as utils from './utils.js';
import {moveToChat, moveToMenu} from './mainSrc.js';
/*------------------------*/



/*------------------------*/
function setupConnection() {
    data.setConnectInfo(data.getConnectPeer().peer, "");
    /*------------------------*/
    data.getConnectPeer().on('open', () => {
        console.log('Connected to ' + data.getConnectPeer().peer);
        // data.connectPeer.send(data.myName);
        dataHandler();
        sendRequest("name");
    });

    data.getConnectPeer().on('close', () => {
        console.log('Connection closed');
        utils.Notification_Box("Connection closed!");
        moveToMenu();
    });

    data.getConnectPeer().on('error', (err) => {
        console.log(err);
    });
}

function setMyPeer() {
    data.getMyPeer().on('connection', (connection) => {
        data.setConnectPeer(connection);
        setupConnection();
        utils.Question_Box(`${data.getConnectInfo().connectName} want to connect with you`, moveToChat, () => { });
    });
}

function createPeer(id = "") {
    return new Promise((resolve, reject) => {
        const peer = new Peer(id);
        console.log("peer: " + peer);
        peer.on('open', () => {
            resolve(peer);
        });
        peer.on('error', () => {
            reject({ message: "This ID is using by another user, please try a different ID!" });
        });
    })
}

function disconnectPeer() {
    data.getConnectPeer().close();
    console.log("disconnectPeer");
}
/*------------------------*/
//data receive handler
function dataHandler() {
    data.getConnectPeer().on('data', (data) => {
        let dataReceive = data;
        if (dataReceive.type === "request") {
            requestHandler(dataReceive);
        }
        else if (dataReceive.type === "respond") {
           respondHandler(dataReceive);
        }
        else if (dataReceive.type === "message") {
            messageHandler(dataReceive);
        }
    });
    
}

function requestHandler(dataReceive) {
    if(dataReceive.requestType === "name") {
        sendRespond("name", data.myName);
    }
}

function respondHandler(dataReceive) {
    if(dataReceive.respondType === "name") {
        data.connectName = dataReceive.content;
        console.log(data.connectName);
        console.log(dataReceive);
    }
}

function messageHandler(dataReceive) {
    console.log(dataReceive.content);
}
/*------------------------*/

function sendRequest(requestType) {
    data.getConnectPeer().send({
        type: "request",
        requestType: requestType,
    });
}

function sendRespond(respondType, content) {
    data.getConnectPeer().send({
        type: "respond",
        respondType: respondType,
        content: content
    });
}

function sendMessage(content) {
    data.getConnectPeer().send({
        type: "message",
        content: content
    });
}
export { setupConnection, setMyPeer, createPeer, disconnectPeer, sendRequest, sendRespond, sendMessage, dataHandler };