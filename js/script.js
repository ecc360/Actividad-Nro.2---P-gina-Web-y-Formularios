document.addEventListener("DOMContentLoaded", function() {
    const cuentoForm = document.getElementById("cuento-form");

    cuentoForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario

        const nombre = document.getElementById("nombre").value;
        const apodo = document.getElementById("apodo").value;
        const colorCabello = document.getElementById("color-cabello").value;
        const colorOjos = document.getElementById("color-ojos").value;
        const edad = document.getElementById("edad").value;
        const hobby = document.getElementById("hobby").value;

        // Generar el cuento
        const cuento = `Había una vez una persona llamada ${nombre}, pero todos la conocían como ${apodo}. 
        Tenía el cabello de color ${colorCabello} y unos ojos tan brillantes como el ${colorOjos}. 
        A sus ${edad} años, su hobby favorito era ${hobby}. Un día, mientras practicaba su hobby, 
        sucedió algo inesperado...`;

        // Mostrar el cuento en la página
        const cuentoContainer = document.createElement("div");
        cuentoContainer.innerHTML = `<h3>Tu cuento:</h3><p>${cuento}</p>`;
        document.getElementById("diseña-tu-cuento").appendChild(cuentoContainer);
    });
});
