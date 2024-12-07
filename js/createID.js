import data from "./data.js";
import * as utils from "./utils.js";
/*------------------------*/

function spawnCreateID(moveToMenu = () => {}) {
    utils.reSpawnInRoot(HTMLCreateID());
    addButtonListenerOfCreateID(moveToMenu);
}

function HTMLCreateID() {
    return `
            <div class = "createID-container center-box">
                <input type="text" id="name-input" placeholder="Enter your name" required>
                <input type="text" id="id-input" placeholder="Enter your ID" required>
                <div class="buttons">
                    <button id="get-id">Get ID</button>
                    <button id="copy-id">Copy ID</button>
                </div>
                <div id="requirements">
                Requirements:
                <ul>
                    <li id="length">ID must have exactly 6 characters.</li>
                    <li id="characters">Allowed characters: a-z, A-Z, 0-9.</li>
                    <li id="firstChar">The first character must not be a number.</li>
                </ul>
                </div>
                <p id="errorMessage" class="hidden">Invalid ID format!</p>
                <button id="create-id">Create</button>
            </div>
    `;
}

function addButtonListenerOfCreateID(moveToMenu = () => {}) {
    var nameInput = document.getElementById("name-input");
    var getIdBtn = document.getElementById("get-id");
    var copyIdBtn = document.getElementById("copy-id");
    var createIdBtn = document.getElementById("create-id");
    /*------------------------*/
    var idInput = document.getElementById("id-input");
    /*------------------------*/
    idInput.addEventListener("input", () => {
        var value = idInput.value;
        validateId(value);
    });

    idInput.addEventListener("focus", () => {
        idInput.style.removeProperty("border");
    })

    nameInput.addEventListener("focus", () => {
        nameInput.style.removeProperty("border");
    })

    copyIdBtn.addEventListener("click", () => {
        if(validateId(idInput.value)){
            navigator.clipboard.writeText(idInput.value).then(() => {
                utils.Notification_Box("Copied to clipboard!");
            });
        }
    });

    getIdBtn.addEventListener("click", () => {
        idInput.value = randomId();
        validateId(idInput.value);
    });

    createIdBtn.addEventListener("click", () => {
        /*------------------------*/
        if(String(nameInput.value || "").trim() === ""){
            utils.Notification_Box("name cannot be empty!");
            nameInput.style.border = "1px solid red";
        }
        else if(data.validID.test(idInput.value) === false){
            utils.Notification_Box("Invalid ID!");
            idInput.style.border = "1px solid red";
        }
        else{
            data.myPeer = new Peer(String(idInput.value || "").trim());    
            data.myPeer.on("error", (err) => {
                //check for unavailable-id
                if(err.type === "unavailable-id"){
                    utils.Notification_Box("This ID is using by another user, please try a different ID!");
                }
            });
            data.myPeer.on("open", () => {
                // console.log("myPeer ID: " + data.myPeer.id);
                // console.log(data.myPeer);
                data.myId = idInput.value;
                data.myName = nameInput.value;
                //setMyPeer(data.myPeer);
                moveToMenu();
            })
        }
    });
}

/*------------------------*/

function validateId(id = "") {
    var lengthCheck = document.getElementById("length");
    var charactersCheck = document.getElementById("characters");
    var firstCharCheck = document.getElementById("firstChar");
    var valid = true;
    /*------------------------*/
    if(id.length != data.validIdLength){
        lengthCheck.style.color = "red";
        valid = false;
    }
    else{
        lengthCheck.style.color = "green";
    }
    if(!data.validIdRegex.test(id)){
        charactersCheck.style.color = "red";
        valid = false;
    }
    else{
        charactersCheck.style.color = "green";
    }
    if(!data.validIdFirstCharRegex.test(id)){
        firstCharCheck.style.color = "red";
        valid = false;
    }
    else{
        firstCharCheck.style.color = "green";
    }
    return valid;
}

function randomId() {
    var id = "";
    var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789";
    var nonNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    id += nonNumeric.charAt(Math.floor(Math.random() * nonNumeric.length));
    for (var i = 1; i < data.validIdLength; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}

export { spawnCreateID };