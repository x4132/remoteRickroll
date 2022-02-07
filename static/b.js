var socket = new WebSocket(`ws://${location.host}`);
socket.addEventListener("message", (event) => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
})