// variables de el aviso de cookies
const box = document.querySelector('.box')  
const boton = document.querySelector('.boton') 
// fin de las variables de cookies  

setTimeout(()=>{
    box.style.marginBottom = "0" 
    box.style.transition = "1.25s" 
    
},3000) 


//listeners 
boton.addEventListener('click', ()=>{
    box.style.marginBottom = "-500px"
})