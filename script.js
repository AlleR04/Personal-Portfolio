const botonHire = document.querySelector('.boton-hire');
let statusD = "none"; 

botonHire.onclick = ()=>{
    
    
    const hireEmail = document.querySelector('.email-card'); 
    hireEmail.style.display == statusD ? (
        hireEmail.style.display = "block"
    ):(
        hireEmail.style.display = "none"

    ) 
    
    
    
}





