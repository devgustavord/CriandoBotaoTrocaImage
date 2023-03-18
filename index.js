// criando uma constante que vai capturar todas as imagens
const slider = document.querySelectorAll('.slider')
// criando consts para os botoes
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')

// vai ser o slide que estará ativo nós vamos somar para passar a imagem
// e diminuir para voltar a imagem
let currentSlide = 0;

// função que vai esconder a imagem, ou seja, esconderemos a classe on colocada no prev
function hideSlider() {
    // aqui nós vamos entrar na const slider e vamos entrar em cada um dos itens e vamos remover a classe on
    // 
    slider.forEach(item => item.classList.remove('on'))
}

// vamos criar a função de mostrar a imagem
function showSlider() {
    // o slider vai acessar o currentSlide que vai conferir, se o numero estiver 0 ele vai adicionar a classe on
    slider[currentSlide].classList.add('on')
}

// Função de avançar imagem
function nextImage() {
    // primeiro vamos remover a classe on de todas as imagens e vamos adicionar a classe on, apenas aquela que corresponde
    // no index
    hideSlider()
    // verificar se o slide atual corresponde a quantidade de slider que nós temos
    if(currentSlide === slider.length -1){
        //  e caso esteja no ultimo slider(objeto do array) ele volta pro primeiro(0)
        currentSlide = 0
    } else {
        // senão ele acrescenta mais um
        currentSlide++
    }
    showSlider()
}

// Função de avançar imagem
function prevImage() {
    hideSlider()
    // caso a nossa imagem atual que vai ser a que está selecionado for igual a 0
    // ele seta o currentSlide como o último
    if(currentSlide === 0){
       currentSlide = slider.length -1
    } else {
        currentSlide-- 
    }
    showSlider()
}


// criamos um evento para quando o botão for clicado
btnNext.addEventListener('click', nextImage)
btnPrev.addEventListener('click', prevImage)

