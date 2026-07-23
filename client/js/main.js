console.log("Main JS Loaded!");

// NAVBAR SCROLL EFFECT
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(47, 61, 85, 0.95)";
        header.style.backdropFilter = "blur(10px)";
        header.style.position = "fixed";
        header.style.padding = "15px 0";
    } else {
        header.style.background = "transparent";
        header.style.backdropFilter = "none";
        header.style.position = "absolute";
        header.style.padding = "20px 0";
    }
});




// AI ASSISTANT
const aiButton = document.querySelector(".ai-assistant");
const chatPopup = document.querySelector(".chat-popup");
const closeChat = document.querySelector(".close-chat");

if (aiButton && chatPopup) {
    aiButton.addEventListener("click", () => {
        chatPopup.classList.toggle("active");
    });
}

if (closeChat && chatPopup) {
    closeChat.addEventListener("click", () => {
        chatPopup.classList.remove("active");
    });
}