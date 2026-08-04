function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = "¡Bienvenido a AulaConecta! Tu información está lista para consultar.";
}
function cambiarBoton() {
    const boton = document.getElementById("boton");

    boton.textContent = "¡Listo!";
    boton.style.backgroundColor = "#198754";
}
document.getElementById("boton").addEventListener("click", function() {
    cambiarMensaje();
    cambiarBoton();
});
// Se agrega es codigo pendiente para revision