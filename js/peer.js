import data from './data.js';
import * as utils from './utils.js';
import {Question_Box} from './utils.js';
import {moveToChat, moveToMenu} from './mainSrc.js';
/*------------------------*/



/*------------------------*/
function setupConnection() {
    data.connectId = data.connectPeer.peer;
    /*------------------------*/
    data.connectPeer.on('open', () => {
        console.log('Connected to ' + data.connectPeer.peer);
    });

    data.connectPeer.on('close', () => {
        console.log('Connection closed');
        utils.Notification_Box("Connection closed!");
        moveToMenu();
    });
}

function setMyPeer() {
    data.myPeer.on('connection', (connection) => {
        data.connectPeer = connection;
        setupConnection();
        Question_Box("someone want to connect with you", moveToChat, () => { });
    });
}

function createPeer(id = "") {
    return new Promise((resolve, reject) => {
        const peer = new Peer(id);
        peer.on('open', () => {
            resolve(peer);
        });
        peer.on('error', () => {
            reject({ message: "This ID is using by another user, please try a different ID!" });
        });
    })
}

function disconnectPeer() {
    data.connectPeer.close();
    console.log("disconnectPeer");
}
export { setupConnection, setMyPeer, createPeer, disconnectPeer };