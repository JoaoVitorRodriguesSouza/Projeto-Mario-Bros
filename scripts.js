const form = document.querySelector(".formulario")
const masc = document.querySelector("mascara-formulario")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    masc.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}


