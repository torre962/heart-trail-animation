const bodyE1 = document.querySelector("body")

bodyE1.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX
    const yPos = event.offsetY
    const spanE1 = document.createElement("span");
    bodyE1.appendChild(spanE1);
    spanE1.style.left = xPos + "px";
    spanE1.style.left = yPos + "py";
    spanE1.appendChild(spanE1);
});