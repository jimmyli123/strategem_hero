document.querySelector('button').addEventListener('click', play)
let rightArrow = document.querySelector('.fa-solid fa-arrow-right fa-5x')
console.log('its working')

document.keydown = function (e) {
    e = e || window.event;
}

function play() {
    // Code the 3 second delay
    // Generate random arrows
    // If key press does not match arrow, start over
    

    console.log('have we started playing?')
    console.log(Math.ceil(Math.random() * 4))
    window.addEventListener('keydown', function(e) {
        console.log(e)
    })
    // on next work flow build the random arrow key generator
}