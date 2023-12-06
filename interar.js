
let botaoMenu = document.getElementById('botao-menu')
let modoTelemovel = document.getElementById('modo-telemovel')
let overlay = document.getElementById('overlay-menu')

botaoMenu.addEventListener('click', ()=>{
     modoTelemovel.classList.add('abrir-menu')
    }
)

modoTelemovel.addEventListener('click', ()=>{
    modoTelemovel.classList.remove('abrir-menu')
   }
)
overlay.addEventListener('click', ()=>{
    modoTelemovel.classList.remove('abrir-menu')
   }
)