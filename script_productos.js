function mostrar_mas(id_texto) {
    var texto_visible = document.getElementById(id_texto);
    var boton = texto_visible.nextElementSibling;
    
    if (texto_visible.style.maxHeight === "none") {
        texto_visible.style.maxHeight = "30px";
        boton.innerText = "Mostrar mas";
    } else {
        texto_visible.style.maxHeight = "none";
        boton.innerText = "Mostrar menos";
    }
}

