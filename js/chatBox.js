import * as utils from "./utils.js";
import data from "./data.js";
import { disconnectPeer, sendMessage } from "./peer.js";
/*------------------------*/

function spawnChatBox(moveToMenu = () => {}) {
    utils.reSpawnInRoot(HTMLChatBox());
    addButtonListenerOfChatBox(moveToMenu);
}

function HTMLChatBox() {
    let connectInfo = data.getConnectInfo();
    return `
    <div class="container center-box">
            <div class="taskBar">    
                <p class="information">
                    <span id="connectName">name: ${connectInfo.connectName}</span>
                    <br>
                    <span id="connectID">ID: ${connectInfo.connectId}</span>
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
    // set receive message
    // data.getConnectPeer().on('data', (data) => {
    //     addMessageToChat(data, "from-them");
    //     console.log(data);
    // });
    /*------------------------*/
    sendBtn.addEventListener("click", () => {
        if(messageInput.value !== "" && data.getConnectPeer() && data.getConnectPeer().open) {
            // console.log("send");
            sendMessage(messageInput.value.trim());
            utils.addMessageToChat(messageInput.value.trim(), "from-me");
            messageInput.value = "";
        }
    });

    addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            if(messageInput.value !== "" && data.getConnectPeer() && data.getConnectPeer().open) {
                // console.log("send");
                sendMessage(messageInput.value.trim());
                utils.addMessageToChat(messageInput.value.trim(), "from-me");
                messageInput.value = "";
            }
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
export { spawnChatBox };