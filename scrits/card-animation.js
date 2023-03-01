function handleMouseEnter() {
    this.classList.add('card--hovered')
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('card--hovered');
    document.body.id = '';
}

function addEventListenerToCards() {
    const cardElements = document.getElementsByClassName('card');
    
    for(let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

document.addEventListener("DOMContentLoaded", addEventListenerToCards, false)

/*function selectCarrosselItem(ItemSelecionado) {
    console.log('Selecionado item', ItemSelecionado);
} */

function selectCarrosselItem(selectedButtonElements) {
    const ItemSelecionado =  selectedButtonElements.id;
    const carrossel = document.querySelector(`.card__carrossel`);
    const transform = carrossel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/);
    const rotateYdeg = -120 * (Number(ItemSelecionado) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYdeg}deg)`);
    
    carrossel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.controle__botao--active');
    activeButtonElement.classList.remove('controle__botao--active');
    selectedButtonElements.classList.add('controle__botao--active')
   
}