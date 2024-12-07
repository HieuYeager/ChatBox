export { spawnInRoot, removeInRoot, reSpawnInRoot, Notification_Box };

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