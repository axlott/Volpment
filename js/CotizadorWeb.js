let vermasTexto = document.getElementById("textoVer");
let btn=document.getElementById("verMas");

// creación de funciones
function verMas(){
    vermasTexto.classList.toggle("d-none");
}
btn.addEventListener("click",verMas);