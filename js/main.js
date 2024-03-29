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

    let numberOfArrows = Math.ceil(Math.random()*5)
    const showArea = document.querySelector("#show")
    clearShowArea();
    for (let i =0; i<numberOfArrows; i++) {
        let key = Math.ceil(Math.random() *4)
        const arrow = document.createElement("i");
        if (key === 1) {
            arrow.classList.add("fa-solid", "fa-arrow-left", "fa-5x")
        } else if (key === 2) {
            arrow.classList.add("fa-solid", "fa-arrow-right", "fa-5x")
        } else if (key === 3) {
            arrow.classList.add("fa-solid", "fa-arrow-up", "fa-5x")
        } else {
            arrow.classList.add("fa-solid", "fa-arrow-down", "fa-5x")
        }

        
        showArea.appendChild(arrow);
    }


    console.log('have we started playing?')
    console.log(Math.ceil(Math.random() * 4))
    window.addEventListener('keydown', function(e) {
        console.log(e)
    })

    // Function will remove all current arrows on the page.
    function clearShowArea() {
        const showArea = document.querySelector("#show")
        let child = showArea.lastElementChild;
        while (child) {
            showArea.removeChild(child)
            child = showArea.lastElementChild;
        }
    }
}