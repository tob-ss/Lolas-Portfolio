
/* when click on card it goes into zoomed state

when in zoomed state, */

let zoomed1 = false

const card1 = document.querySelector('.card:nth-child(7)');

const card2 = document.querySelector('.card:nth-child(6)');

const notCards = document.querySelectorAll(':not(.card)');

const zoom1 = () => {
   zoomed1 = true 
    card1.classList.add('zoom')
    card2.classList.add('pushed')
    console.log(zoomed1)
}

if (zoomed1 === false) {
    card1.addEventListener('click', zoom1)
} else {
    notCards.forEach(element => {
        notCards.addEventListener('click', () => {
            zoomed1 = false
                card1.classList.remove('zoom')
                card2.classList.remove('pushed')
        });
    })}
/* card click on should zoom up

card behind clicked card should be pushed back

clicking on clicked card shouldn't put it back

clicking anywhere apart from the card stack should put the card back

clicking on a different card should put the zoomed card back, return the pushed card back and zoom up the new card */