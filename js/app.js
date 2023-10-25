// variables de el aviso de cookies
const box = document.querySelector('.box')  
const boton = document.querySelector('.boton') 
// fin de las variables de cookies  
//variables para el formulario  
    const formulario = document.getElementById("formulario")
    const nombre = document.querySelector(".nombre")
    const email = document.querySelector(".email") 
    const telefono = document.querySelector("#phone") 
    const mensaje  = document.querySelector(".mensaje") 
    const enviar = document.querySelector(".enviar") 
    const limpiar = document.querySelector(".limpiar") 
    const alertas = document.querySelector(".alertas")
//fin del formulario 


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

    nombre.addEventListener('blur',validar)
    email.addEventListener('blur', validar)
    telefono.addEventListener('blur',validar)
    mensaje.addEventListener ('blur',validar)
// fin de los listeners del formularios 

//clases 

//funciones para el formulario
function validar(e){   
    if(e.target.value.trim() === ""){
        let alertaError = document.querySelector("p"); 
        alertaError.classList.add(
            "text-light",
            "bg-success",
            "fw-bolder")
        alertaError.textContent = `el campo ${e.target.classList} es obligatorio`; 
        alertas.appendChild(alertaError) 
        setTimeout(()=>{
            alertaError.remove()
        },3000)
    } 
    if(e.target.classList.contain("email") && e.target.value !== ""){
        validarEmail(e.target.value); 
        return
    }
}  
    function validarEmail(email){ 
    const exprecionReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(exprecionReg.test(email)){ 
        console.log("correo electronico valido");
    }else{console.log("correo electronico no valido");}
}
