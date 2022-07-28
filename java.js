const Narutooo= document.querySelector('.Naruto')
document.addEventListener('keydown', jump);         
function jump() {
    switch (Event.keyCode) {
        case 8:
    Narutooo.classList.add('jump');
    setTimeout(()=> {
    Narutooo.classList.remove('jump');
    }, 650); 
}
            } 
        document.addEventListener('keydown', jump);       
        
