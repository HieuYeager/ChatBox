import * as utils from './utils.js';
import data from './data.js';
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
    connectBtn.addEventListener("click", () => {
        if (checkIdFormat(connectIdInput.value)) {
            data.connectId = connectIdInput.value;
            // console.log("connectId: " + data.connectId);
            data.connectPeer = data.myPeer.connect(data.connectId);
            // setConnectPeer(data.connectPeer);
            console.log("connectPeer: " + data.connectPeer);
            moveToChat();
        }
        else {
            utils.Notification_Box("Invalid ID!");
        }
    });
}

function checkIdFormat(id) {
    return data.validID.test(id);
}