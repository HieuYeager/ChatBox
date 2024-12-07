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
// const data = { myPeer, connectPeer, myIdSpan, myId, myNameSpan, myName, copyIdBtn, connectIdSpan, connectId, connectNameSpan, connectName, connectIdInput, connectBtn, chatBox, messageInput, sendBtn, getIDBtn };
const data = { myPeer, connectPeer, myId, myName, connectId, connectName, validIdLength, validIdRegex, validIdFirstCharRegex, validID };
export default data;