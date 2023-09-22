const socket = io();

input = document.getElementById("input");
message = document.getElementById("message");



console.log("hello world")


let username = "anonymous";
if (localStorage.getItem("username") != null) {
    username = localStorage.getItem("username");
}

function changeUsername() {
    username = document.getElementById("username").value;
    socket.emit("user joined", username);
}
 


function sendChat() {

    if (input.value) {
        socket.emit("chat message", input.value);
        input.value = "";
    }

}

socket.on("chat message", (msg) => {

    const item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);

});


socket.on("user joined", (username) => {
    console.log(username + " joined the chat");
    io.emit("chat message", username + " joined the chat");
}
);


