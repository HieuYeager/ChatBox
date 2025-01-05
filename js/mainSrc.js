import { spawnMenu } from "./menu.js";
import { spawnCreateID } from "./createID.js";
import { spawnConnectBox } from "./connectBox.js";
import { spawnChatBox } from "./chatBox.js";
import data from "./data.js";
// import {} from "./chat.js";
/*------------------------*/

function moveToMenu() {
    // console.log("moveToMenu");
    spawnMenu(moveToCreateID, moveToConnect, moveToChat);
    // console.log(data.myId);
    // console.log(data.myName);
    // console.log(data.myPeer);
}

function moveToCreateID() {
    // console.log("moveToCreateID");
    spawnCreateID(moveToMenu, moveToChat);

}

function moveToConnect() {
    // console.log("moveToConnect");
    spawnConnectBox(moveToChat);
}

function moveToChat() {
    // console.log("moveToChat");
    spawnChatBox(moveToMenu);

}
/*------------------------*/
//default
moveToMenu();

/*------------------------*/
export { moveToChat, moveToMenu };