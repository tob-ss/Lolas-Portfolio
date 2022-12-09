const card1 = document.querySelector('.card:nth-child(7)');
const card2 = document.querySelector('.card:nth-child(6)');

const fadeIn = () => {
    card1.classList.toggle('fadein')
    card2.classList.toggle('pushed')
}

card1.addEventListener('click', fadeIn);

/* if card has property of fadein
add event listener click fadout
else do nothing */

const fadeOut = () => {
    console.log("Fades Out")
}
