// variables de el aviso de cookies
const box = document.querySelector('.box')  
const boton = document.querySelector('.boton') 
// fin de las variables de cookies  
//variables para el formulario  
    const formulario = document.getElementById("formulario")
    const nombre = document.querySelector(".nombre")
    const email = document.querySelector(".email") 
    const telefono = document.querySelector(".telefono") 
    const mensaje  = document.querySelector(".mensaje") 
    const enviar = document.querySelector(".enviar") 
    const limpiar = document.querySelector(".limpiar")
//fin del formulario 

/*codigo para el formulario*/ 

/* fin del formulario*/
/*  codigo para las cookies*/ 
setTimeout(()=>{
    box.style.marginBottom = "0" 
    box.style.transition = "1.25s" 
    
},3000) 
/*fin del codigo para las cookies*/ 

//listeners 
boton.addEventListener('click', ()=>{
    box.style.marginBottom = "-500px"
}) 
// listener para el formulario 
limpiar.addEventListener('click', (e)=>{ 
    e.preventDefault()
    formulario.reset()})