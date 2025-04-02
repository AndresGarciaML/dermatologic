document.querySelectorAll(".accordion").forEach(button => {
    button.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        const isOpen = panel.style.maxHeight;
        if (!isOpen) {
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.classList.add("active");
        } else {
            panel.style.maxHeight = null;
            this.classList.remove('active');
        }
    });
});

document.querySelectorAll(".accordion").forEach(div => {
let rotado = false;

console.log(div.querySelector(".accordion__icon"));
const icon = div.querySelector(".accordion__icon") 
div.addEventListener("click", function() {
    if (rotado) {
        icon.classList.remove("rotate");
        icon.classList.add("back");
    } else {
        icon.classList.remove("back");
        icon.classList.add("rotate");
    }
    rotado = !rotado;
    });
});