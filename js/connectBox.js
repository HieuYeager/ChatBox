import * as utils from './utils.js';
import data from './data.js';
import { setupConnection, sendRequest } from './peer.js';
/*------------------------*/
export function spawnConnectBox(moveToChat = () => {}) {
    utils.reSpawnInRoot(HTMLConnectBox());
    addButtonListenerOfConnectBox(moveToChat);
}

function HTMLConnectBox() {
    return `
    <div class = "connect-container center-box">
        <input type="text" id="connect-id" placeholder="Enter your friend's ID" required>
        <button id="connect-btn">Connect</button>
    </div>
    `;
}

export function addButtonListenerOfConnectBox(moveToChat = () => {}) {
    var connectBtn = document.getElementById("connect-btn");
    var connectIdInput = document.getElementById("connect-id");
    /*------------------------*/
    connectBtn.addEventListener("click", () => {
        if (checkIdFormat(connectIdInput.value) && data.getMyInfo().myId !== connectIdInput.value.trim()) {
            data.setConnectPeer(data.getMyPeer().connect(connectIdInput.value.trim()));
            // console.log("connectPeer: " + data.connectPeer);
            setupConnection();
            moveToChat();
        }
        else {
            utils.Notification_Box("Invalid ID!");
        }
    });
}

/*------------------------*/
function checkIdFormat(id) {
    return data.validID.test(id);
}