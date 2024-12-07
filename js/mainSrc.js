import { spawnMenu } from "./menu.js";
import { spawnCreateID } from "./createID.js";
// import {} from "./chat.js";
/*------------------------*/

function moveToMenu() {
    console.log("moveToMenu");
    spawnMenu(moveToCreateID, moveToConnect);
}

function moveToCreateID() {
    console.log("moveToCreateID");
    spawnCreateID(moveToMenu);

}

function moveToConnect() {
    console.log("moveToConnect");
}

function moveToChat() {

}
/*------------------------*/
//default
console.log("start");
spawnMenu(moveToCreateID, moveToConnect);