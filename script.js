const heading = document.querySelector("#heading");
const changeFontColor = () => {
    heading.classList.toggle("blue-text");
}
heading.addEventListener("click", changeFontColor);



const subheading = document.querySelector("#subheading");
const changeFontColors = () => {
    subheading.classList.toggle("blue-text");
}
subheading.addEventListener("click", changeFontColors);



const replyButton = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");
const openReplyMessage = () =>{
    replyMessage.classList.remove("hidden")
}
replyButton.addEventListener("click", openReplyMessage);



const sendButton = document.querySelector("#send-button");
const cancelButton = document.querySelector("#cancel-button");
const closeReplyMessage = () => {
    replyMessage.classList.add("hidden")
}
sendButton.addEventListener("click", closeReplyMessage);
cancelButton.addEventListener("click", closeReplyMessage);



const openButton = document.querySelector("#open-button");
const openMessage = () => {
    openButton.classList.remove("hidden")
}
openButton.addEventListener("click", );
