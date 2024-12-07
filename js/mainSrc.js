import { spawnMenu } from "./menu.js";
import { spawnCreateID } from "./createID.js";
import { spawnConnectBox } from "./connectBox.js";
import data from "./data.js";
// import {} from "./chat.js";
/*------------------------*/

function moveToMenu() {
    console.log("moveToMenu");
    spawnMenu(moveToCreateID, moveToConnect);
    // console.log(data.myId);
    // console.log(data.myName);
    // console.log(data.myPeer);
}

function moveToCreateID() {
    console.log("moveToCreateID");
    spawnCreateID(moveToMenu);

}

function moveToConnect() {
    console.log("moveToConnect");
    spawnConnectBox(moveToChat);
}

function moveToChat() {
    console.log("moveToChat");
}
/*------------------------*/
//default
console.log("start");
spawnMenu(moveToCreateID, moveToConnect);