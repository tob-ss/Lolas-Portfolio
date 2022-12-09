const card1 = document.querySelector('.card:nth-child(7)');

const test = () => {
    card1.classList.toggle('is-active')
}

card1.addEventListener('click', test);