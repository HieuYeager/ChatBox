import data from "./data.js";
import { setMyPeer } from "./peer.js";
import * as utils from "./utils.js";
/*------------------------*/

function spawnMenu(moveToCreateID = () => { }, moveToConnect = () => { }) {
    utils.reSpawnInRoot(HTMLMenu());
    addButtonListenerOfMenu(moveToCreateID, moveToConnect);
}

function HTMLMenu() {
    let myInfo = data.getMyInfo();
    return `<div class = "menu-container">
            <div class="user-info">
                <p>name: <span id="myName-span">${myInfo.myName}</span></p>
                <p>id: <span id="myId-span">${myInfo.myId}</span></p>
                <button id="custom-info">create ID</button>
            </div>
            <button id="connect-btn">Connect</button>
        </div>`;
}

function addButtonListenerOfMenu(moveToCreateID = () => { }, moveToConnect = () => { }) {
    var connectBtn = document.getElementById("connect-btn");
    var customInfo = document.getElementById("custom-info");
    var nameSpan = document.getElementById("myName-span");
    var idSpan = document.getElementById("myId-span");
    /*------------------------*/
    if (nameSpan.textContent == "" || idSpan.textContent == "") {
        connectBtn.style.backgroundColor = "gray";
        connectBtn.style.color = "red";
        connectBtn.style.borderColor = "red";
        // connectBtn.disabled = true;
        connectBtn.style.cursor = "not-allowed";
        connectBtn.addEventListener("click", () => {
            // alert("Please create ID first");
            utils.Notification_Box("Please create ID first");
        });
    }
    else {
        connectBtn.addEventListener("click", moveToConnect);
    }
    
    customInfo.addEventListener("click", moveToCreateID);
}

export { spawnMenu };
