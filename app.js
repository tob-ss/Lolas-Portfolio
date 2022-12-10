
/* when click on card it goes into zoomed state

when in zoomed state, */

const card1 = document.querySelector('.card:nth-child(7)');

const card2 = document.querySelector('.card:nth-child(6)');

const card3 = document.querySelector('.card:nth-child(5)');

const card4 = document.querySelector('.card:nth-child(4)');

const card5 = document.querySelector('.card:nth-child(3)');

const card6 = document.querySelector('.card:nth-child(2)');

const card7 = document.querySelector('.card:nth-child(1)');

const notCards = document.querySelector('.click-away');

const zoom1 = () => {
    shrink2()
    shrink3()
    shrink4()
    shrink5()
    shrink6()
    shrink7()    
    card1.classList.add('zoom')
    card2.classList.add('pushed')
    console.log("Card 1 is zoomed")
}

const zoom2 = () => {
    shrink1()
    shrink3()
    shrink4()
    shrink5()
    shrink6()
    shrink7()
    card2.classList.add('zoom')
    card3.classList.add('pushed')
    console.log("Card 2 is zoomed")
}

const zoom3 = () => {
    shrink1()
    shrink2()
    shrink4()
    shrink5()
    shrink6()
    shrink7()
    card3.classList.add('zoom')
    card4.classList.add('pushed')
    console.log("Card 3 is zoomed")
}

const zoom4 = () => {
    shrink1()
    shrink2()
    shrink3()
    shrink5()
    shrink6()
    shrink7()
    card4.classList.add('zoom')
    card5.classList.add('pushed')
    console.log("Card 4 is zoomed")
}

const zoom5 = () => {
    shrink1()
    shrink2()
    shrink3()
    shrink4()
    shrink6()
    shrink7()
    card5.classList.add('zoom')
    card6.classList.add('pushed')
    console.log("Card 5 is zoomed")
}

const zoom6 = () => {
    shrink1()
    shrink2()
    shrink3()
    shrink4()
    shrink5()
    shrink7()
    card6.classList.add('zoom')
    card7.classList.add('pushed')
    console.log("Card 6 is zoomed")
}

const zoom7 = () => {
    shrink1()
    shrink2()
    shrink3()
    shrink4()
    shrink5()
    shrink6()
    card7.classList.add('zoom')
    console.log("Card 7 is zoomed")
}

const shrink1 = () => {
    card1.classList.remove('zoom')
    card2.classList.remove('pushed')
    console.log("Card 1 is no longer zoomed")
}

const shrink2 = () => {
    card2.classList.remove('zoom')
    card3.classList.remove('pushed')
    console.log("Card 2 is no longer zoomed")
}

const shrink3 = () => {
    card3.classList.remove('zoom')
    card4.classList.remove('pushed')
    console.log("Card 3 is no longer zoomed")
}

const shrink4 = () => {
    card4.classList.remove('zoom')
    card5.classList.remove('pushed')
    console.log("Card 4 is no longer zoomed")
}

const shrink5 = () => {
    card5.classList.remove('zoom')
    card6.classList.remove('pushed')
    console.log("Card 5 is no longer zoomed")
}

const shrink6 = () => {
    card6.classList.remove('zoom')
    card7.classList.remove('pushed')
    console.log("Card 6 is no longer zoomed")
}

const shrink7 = () => {
    card7.classList.remove('zoom')
    console.log("Card 7 is no longer zoomed")
}

card1.addEventListener('click', zoom1)
 
card2.addEventListener('click', zoom2)

card3.addEventListener('click', zoom3)

card4.addEventListener('click', zoom4)

card5.addEventListener('click', zoom5)

card6.addEventListener('click', zoom6)

card7.addEventListener('click', zoom7)

notCards.addEventListener('click', shrink1)

notCards.addEventListener('click', shrink2)

notCards.addEventListener('click', shrink3)

notCards.addEventListener('click', shrink4)

notCards.addEventListener('click', shrink5)

notCards.addEventListener('click', shrink6)

notCards.addEventListener('click', shrink7)

/* card clicked on should zoom up

card behind clicked card should be pushed back

clicking on clicked card shouldn't put it back

clicking anywhere apart from the card stack should put the card back

clicking on a different card should put the zoomed card back, return the pushed card back and zoom up the new card */