//butão de função para voltar a img e icon normal
const buttonclose = document.querySelector('.buttonX')
// imgsofá e gifsofá
const Trocadeimg = document.querySelector('.imgs')

//botão dessa função
let buttonO = document.querySelector('.rodate')
//função de gif e de botão X
function Rotacion(troca) {
  //de img pra gif
  Trocadeimg.setAttribute('src', './Images/Sofá-360.gif')
  //mostrar outro botão e nova função
  buttonclose.style.display = 'inline'
  //essa funtion vai sumir e vai ser esse looping
  buttonO.style.display = 'none'
}

function Backimg() {
  //de volta img
  Trocadeimg.setAttribute('src', './Images/Sofá.png')
  //de volta ao function gif
  buttonO.style.display = 'inline'

  buttonclose.style.display = 'none'
}

function carrinho() {
  alert('Feito!')
}
