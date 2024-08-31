const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    // neues element erschaffen
    const spanE1 = document.createElement("span");
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";
    // grosse verändern
    const size = Math.random() *100;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";
    bodyE1.appendChild(spanE1);
    // nach 3secunden löschen
    setTimeout(() => {
        spanE1.remove();
    }, 3000);
});