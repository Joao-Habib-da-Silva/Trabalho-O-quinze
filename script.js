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
