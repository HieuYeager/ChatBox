import * as utils from "./utils.js";
import data from "./data.js";
import { disconnectPeer } from "./peer.js";
/*------------------------*/

function spawnChatBox(moveToMenu = () => {}) {
    utils.reSpawnInRoot(HTMLChatBox());
    addButtonListenerOfChatBox(moveToMenu);
}

function HTMLChatBox() {
    return `
    <div class="container center-box">
            <div class="taskBar">    
                <p class="information">
                    <span>name: ${data.connectName}</span>
                    <br>
                    <span id="my-id">ID: ${data.connectId}</span>
                </p>
                <button id = "closeChat-btn">X</button>
            </div>
            <div id="chat-box"></div>
            <div id="input-container">
                <input type="text" id="message" placeholder="Type your message...">
                <button id="send-btn">Send</button>
            </div>
    </div>
    `;
}

function addButtonListenerOfChatBox(moveToMenu = () => {}) {
    var sendBtn = document.getElementById("send-btn");
    var messageInput = document.getElementById("message");
    var closeChatBtn = document.getElementById("closeChat-btn");
    /*------------------------*/
    //set receive message
    data.connectPeer.on('data', (data) => {
        addMessageToChat(data, "from-them");
        console.log(data);
    });
    /*------------------------*/
    sendBtn.addEventListener("click", () => {
        if(messageInput.value !== "" && data.connectPeer && data.connectPeer.open) {
            // console.log("send");
            data.connectPeer.send(messageInput.value.trim());
            addMessageToChat(messageInput.value.trim(), "from-me");
            messageInput.value = "";
        }
    });

    closeChatBtn.addEventListener("click", () => {
        utils.Question_Box("Are you sure?",disconnect,);
    });
}

/*------------------------*/
function disconnect(){
    disconnectPeer();
    moveToMenu();
}

function addMessageToChat(message, type) {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="message ${type}">${message}</div>`;
}
export { spawnChatBox };