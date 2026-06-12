let mivariable
var miotravariable // esto es obsoleto
const miValorInalterable = "cualquiercosa"

mivariable = 'igor'
miotravariable = "Aranaz"

let num1 = 20
let num2 = 8
let resultado = num1 + num2


console.log(mivariable + "" + miotravariable)
console.log(resultado)

//const elementoHtmlBoton = document.getElementById("boton")
const elementoHtmlBoton = document.querySelector("#boton")

elementoHtmlBoton.style.backgroundcolor="pink"

// console.log(elementoHtmlBoton)


elementoHtmlBoton.addEventListener("click", function(){
    elementoHtmlBoton.style.backgroundcolor="pink"
    elementoHtmlBoton.style.color="green"
})



