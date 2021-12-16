var socket;
window.addEventListener("DOMContentLoaded", function() {
    socket = new WebSocket(`ws://${location.host}`);
});

window.addEventListener("keydown", function(e) {
    document.querySelector("#text").innerHTML = "!";
    socket.send("keydown");
});

window.addEventListener("mousedown", function(e) {
    document.querySelector("#text").innerHTML = "!";
    socket.send("mousedown");
});

window.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    return false;
})