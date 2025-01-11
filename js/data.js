/*-----------------------------*/
class Queue {
    constructor(maxSize = 30) {
        this.items = [];
        this.maxSize = maxSize;
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }
    enqueue(element) {
        if (this.items.length >= this.maxSize) {
            this.dequeue();
        }
            this.items.push(element);
    }
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }
    back() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    printQueue() {
        let message = "";
        let type = "";
        let index = 0;
        this.items.forEach((element) => {
            message = element.content;
            type = element.type;
            // console.log(`${index} :${type}: ${message}`);
            index++;
        });
        // console.log(this.items.toString());
    }
}
//peer information
let myPeer;
let connectPeer;
// user information
let myId = "";
let myName = "";
//conn information
let connectId = "";
let connectName = "";
const chatHistory = new Queue();
//validation ID
const validIdLength = 6;
const validIdRegex = /^[a-zA-Z0-9]*$/;
const validIdFirstCharRegex = /^[a-zA-Z]/;
const validID = /^[a-zA-Z][a-zA-Z0-9]{5}$/;
//geter setter
function getMyPeer() {
    return myPeer;
}
function setMyPeer(peer) {
    myPeer = peer;
}
function getConnectPeer() {
    return connectPeer;
}
function setConnectPeer(peer) {
    connectPeer = peer;
}
function getMyInfo() {
    return { myId, myName };
}   
function setMyInfo(id, name) {
    myId = id;
    myName = name;
}
function getConnectInfo() {
    return { connectId, connectName };
}
function setConnectInfo(id, name) {
    connectId = id;
    connectName = name;
}
function addMessageToHistory(message = {content: "", type: ""}) {
    if(message.content !== "" && message.type !== "") {
        chatHistory.enqueue(message);
    }
    else {
        console.log("message is empty");
    }
    // console.log(chatHistory);
    chatHistory.printQueue();
}
//export
// const data = { myPeer, connectPeer, myId, myName, connectId, connectName, validIdLength, validIdRegex, validIdFirstCharRegex, validID };
const data = { getMyPeer, setMyPeer, getConnectPeer, setConnectPeer, getMyInfo, setMyInfo, getConnectInfo, setConnectInfo, addMessageToHistory, validIdLength, validIdRegex, validIdFirstCharRegex, validID };
export default data;