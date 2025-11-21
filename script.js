const fora = window.document.getElementById("fora");
const centro = window.document.getElementById("centro");

centro.addEventListener("click", function() {
    fora.classList.toggle("ativado");
    const header = window.document.getElementById("header");
    header.classList.toggle("ativado");
});

fora.addEventListener("click", function() {
    fora.classList.toggle("ativado");
    const header = window.document.getElementById("header");
    header.classList.toggle("ativado");  
});
const button_first = window.document.getElementById("button-2025")
const button_second = window.document.getElementById("button-1980")