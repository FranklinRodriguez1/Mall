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
    let estado = false
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
    formulario.reset() 
    let alertaError = document.createElement("p");   
        alertaError.style.opacity = 0
        alertaError.classList.add( 
            "aviso",
            "text-light",
            "bg-success",
            "fw-bolder",
            "pt-1")
        alertaError.textContent = `Se ha limpiado el formulario`; 
        alertas.appendChild(alertaError) 
        setTimeout(()=>{
            alertaError.remove()
        },3000)
} 
    ) 

    nombre.addEventListener('blur',validar)
    email.addEventListener('blur', validar)
    telefono.addEventListener('blur',validar)
    enviar.addEventListener('click', (e)=>{ 
        e.preventDefault()
        let nuevaPersona  = new persona(nombre.value, email.value, telefono.value, mensaje.value);  
        let alertaError = document.createElement("p"); 
        alertaError.classList.add( 
            "aviso",
            "text-light",
            "bg-success",
            "fw-bolder",
            "pt-1")
        alertaError.textContent = `Se ha hecho el envio correctamente`; 
        alertas.appendChild(alertaError) 
        setTimeout(()=>{
            alertaError.remove() 
        },3000) 
        formulario.reset()     
        console.log(nuevaPersona); 
        enviar.disabled = true
    })
// fin de los listeners del formularios 
//clase
class persona {
    constructor(nombre, correo, numeroTelf, mensaje){
        this.nombre  = nombre
        this.correo = correo
        this.numeroTelf = numeroTelf
        this.mensaje = mensaje
    }
}
//funciones para el formulario
function validar(e){   
    if(e.target.value.trim() === ""){ 
        estado = false
        let alertaError = document.createElement("p"); 
        alertaError.classList.add( 
            "aviso",
            "text-light",
            "bg-danger",
            "fw-bolder",
            "pt-1")
        alertaError.textContent = `el campo ${e.target.classList} es obligatorio`; 
        alertas.appendChild(alertaError) 
        setTimeout(()=>{
            alertaError.remove() 
            alertaError
        },3000)
    } 
    if(e.target.classList.contains("email") && e.target.value != ""){
        validarEmail(e.target.value.trim()); 
        
    }
    if(estado === false){
        enviar.disabled = true 
        
    }  
    if(nombre.value.trim() !== "" && telefono.value.trim !== "" && email.value.trim !== "" ){ 
        validarEmail(email.value.trim()) 
        if(nombre.value.trim() !== "" && telefono.value.trim() !== "" && estado === true){
        enviar.disabled = false
        } 
        else{
            estado = false 
            return
        }
    }
}  
    function validarEmail(email){ 
    const exprecionReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(exprecionReg.test(email)){  
        estado = true
    }else{
        let alertaError = document.createElement("p"); 
        alertaError.classList.add( 
            "aviso",
            "text-light",
            "bg-danger",
            "fw-bolder",
            "pt-1") 
        estado = false
        alertaError.textContent = `Correo electronico no es válido`; 
        alertas.appendChild(alertaError) 
        setTimeout(()=>{
            alertaError.remove()
        },3000) 
        
    }
}
