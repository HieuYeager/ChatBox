/*-----------------------------*/
//peer information
let myPeer;
let connectPeer;
// user information
// let myIdSpan;
let myId = "";
// let myNameSpan;
let myName = "";
//conn information
// let connectIdSpan;
let connectId = "";
// let connectNameSpan;
let connectName = "";
//menu connect button
/*let copyIdBtn;
let connectIdInput;
let connectBtn ;
let getIDBtn;*/
//chat box button
/*let chatBox;
let messageInput ;
let sendBtn;*/
const validIdLength = 6;
const validIdRegex = /^[a-zA-Z0-9]*$/;
const validIdFirstCharRegex = /^[a-zA-Z]/;
// const data = { myPeer, connectPeer, myIdSpan, myId, myNameSpan, myName, copyIdBtn, connectIdSpan, connectId, connectNameSpan, connectName, connectIdInput, connectBtn, chatBox, messageInput, sendBtn, getIDBtn };
const data = { myPeer, connectPeer, myId, myName, connectId, connectName, validIdLength, validIdRegex, validIdFirstCharRegex };
export default data;