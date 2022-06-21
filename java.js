const Narutooo= document.querySelector('.Naruto')
document.addEventListener('keydown', jump);      
//document.addEventListener('keydown', jump);   
function jump() {
    switch (Event.keyCode) {
        case 13:
    Narutooo.classList.add('jump');
    setTimeout(()=> {
    Narutooo.classList.remove('jump');
    }, 650); 
}
            }        
        
