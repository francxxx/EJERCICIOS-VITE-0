let mivariable
var miotravariable // esto es obsoleto
const miValorInalterable = "cualquiercosa"

mivariable = 'igor'
miotravariable = "Aranaz"

let num1 = 20
let num2 = 8
let resultado = num1 * num2


console.log(mivariable + "" + miotravariable)
console.log(resultado)

//const elementoHtmlBoton = document.getElementById("boton")
const elementoHtmlBoton = document.querySelector("#botonID")

//elementoHtmlBoton.style.backgroundColor="pink"

// console.log(elementoHtmlBoton)


elementoHtmlBoton.addEventListener("click", function(event){
    event.currentTarget.style.backgroundColor="pink"
    elementoHtmlBoton.style.color="black"
})

const botones = document.querySelectorAll(".boton")

botones.forEach(function(boton){
    boton.addEventListener("click", function(e){
        boton.style.backgroundColor="pink"
        boton.style.color="green"
    })

})




botones.forEach((boton)=>{

    boton,addEventListener("click" , (e)=>{

        botones.forEach((boton)=>{
            boton.style.backgroundColor="orange"
            boton.style.border="2px dashed #410a6e"
            boton.style.color="white"
            console.log(mivariable)
            })

        e.currentTarget.style.border="2px solid green"
        boton.style.backgroundColor="pink"
        boton.style.color="green"

    })

})

const botonesDesplegar = document.querySelectorAll(".botonDesplegar")


    botonesDesplegar.forEach((item)=>{

        item.addEventListener("click" , ()=>{

            // cojo el elemento padre y de ahi el elemento de la clase que me interesa(solo el 1ro con esa clase)
            const superior = item.parentElement
            const miParrafo = superior.querySelector(".desplegable")

            // const miParrafo = item.previousElementSibling // cojo el elemento previo al que tengo en item.


            miParrafo.classList.toggle("open")

            // contains me devuelve true o false si el elemento ocntiene clase o no.
            console.log(miParrafo.classList.contains("open"))


            // opcion 1
            if(miParrafo.classList.contains("open")===true){
                item.textContent="leer menos"
            }else{
                item.textContent="leer más"
            }
            
            // opcion 2 / ternario
            miParrafo.classList.contains("open") ? item.textContent ="leer menos" : item.textContent="leer más"

            // opcion 2 / operadpor ternario mas optimizado
            const h = miParrafo.classList.contains("open")
            item.textContent = h ? "Leer menos" : "leer más"


        })
    })







