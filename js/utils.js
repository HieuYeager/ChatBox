export { spawnInRoot, removeInRoot, reSpawnInRoot, Notification_Box, Question_Box, addMessageToChat };

function spawnInRoot(inner = ``) {
    // removeInRoot();
    var root = document.getElementById('root');
    root.innerHTML += inner;
}

function removeInRoot() {
    var root = document.getElementById('root');
    root.innerHTML = ``;
}

function reSpawnInRoot(inner = ``) {
    removeInRoot();
    spawnInRoot(inner);
}

function Notification_Box(Notification = "") {
    let notificationBox = document.querySelector('.notification-box');
    notificationBox.innerHTML = `
    <p>${Notification}</p>
    <button class="close-button">OK</button>
    `;
    notificationBox.style.display = "flex";
    let closeBtn = document.querySelector('.close-button');
    closeBtn.addEventListener('click', () => {
        // root.removeChild(document.querySelector('.notification-box')); 
        closeBtn.parentElement.style.display = "none";  
    });
}

function Question_Box(Question = "", yes = () => { }, no = () => { }) {
    let notificationBox = document.querySelector('.notification-box');
    notificationBox.innerHTML = `
    <p>${Question}</p>
    <div class="buttons">
        <button id="yes">Yes</button>
        <button id="no">No</button>
    </div>
    `;
    notificationBox.style.display = "flex";
    let buttons = document.querySelector('.buttons');
    /*********************************/
    let yesBtn = document.querySelector('#yes');
    let noBtn = document.querySelector('#no');
    yesBtn.addEventListener('click', () => {
        buttons.parentElement.style.display = "none";  
        yes();
    });
    noBtn.addEventListener('click', () => {
        buttons.parentElement.style.display = "none";  
        no();
    });
}

/*********************************/
//chat 
function addMessageToChat(message, type) {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="message ${type}">${message}</div>`;
}