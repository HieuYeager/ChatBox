/*-----------------------------*/
//peer information
let myPeer;
let connectPeer;
// user information
let myId = "";
let myName = "";
//conn information
let connectId = "";
let connectName = "";
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
//export
// const data = { myPeer, connectPeer, myId, myName, connectId, connectName, validIdLength, validIdRegex, validIdFirstCharRegex, validID };
const data = { getMyPeer, setMyPeer, getConnectPeer, setConnectPeer, getMyInfo, setMyInfo, getConnectInfo, setConnectInfo, validIdLength, validIdRegex, validIdFirstCharRegex, validID };
export default data;