/* Boton para cargar referentes */
const botonCargar = document.getElementById("cargar");

function cargarDisenadores() {
    fetch("mensaje.json")
        .then(res => res.json())
        .then(datos => {
            let contenedor = document.getElementById("contenedor");
            let htmlAcumulado = "";

            datos.forEach(disenador => {
                htmlAcumulado += `<div class="tarjeta">`;
                htmlAcumulado += `<h3>${disenador.titulo}</h3>`;
                htmlAcumulado += `<p class="descripcion">${disenador.descripcion}</p>`;
                htmlAcumulado += `<p class="detalles">${disenador.detalles}</p>`;
                htmlAcumulado += `</div>`;
            });

            
            
            contenedor.innerHTML = htmlAcumulado;
        });
}

botonCargar.addEventListener("click", cargarDisenadores);


/* Boton para cambiar aspecto */
const botonTema = document.getElementById("aspecto");

botonTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-oscuro");
});