document.querySelector('button').addEventListener('click', play)

let rightArrow = document.querySelector('.fa-solid fa-arrow-right fa-5x')
console.log('its working')

let mapping = {
    'ArrowRight':39,
    'ArrowLeft':37,
    'ArrowUp':38,
    'ArrowDown':40
}

function play() {
    // Code the 3 second delay
    // Generate random arrows
    // If key press does not match arrow, start over

    let numberOfArrows = Math.ceil(Math.random()*5)
    const showArea = document.querySelector("#show")
    clearShowArea();
    
    let answerSheet = []
    let indexOfCurrent = 0;
    for (let i =0; i<numberOfArrows; i++) {
        let key = Math.ceil(Math.random() *4)
        
        const arrow = document.createElement("i");
        
        if (key === 1) {
            arrow.classList.add("fa-solid", "fa-arrow-left", "fa-5x")

            answerSheet.push(37)
        } else if (key === 2) {
            arrow.classList.add("fa-solid", "fa-arrow-right", "fa-5x")
            answerSheet.push(39)
        } else if (key === 3) {
            arrow.classList.add("fa-solid", "fa-arrow-up", "fa-5x")
            answerSheet.push(38)
        } else {
            arrow.classList.add("fa-solid", "fa-arrow-down", "fa-5x")
            answerSheet.push(40)
        }
        arrow.setAttribute('id',i)
        showArea.appendChild(arrow);
    }
    console.log(answerSheet)
    console.log('have we started playing?')

    window.addEventListener('keydown', function(e){
        if (e.repeat) { return; }
        console.log(answerSheet)
        console.log(`Current index = ${indexOfCurrent}`)
        console.log(e.keyCode)
        if (e.keyCode === answerSheet[indexOfCurrent]) {
            console.log(`You inputted the correct arrow. Increasing the index to ${indexOfCurrent + 1}`)
            document.getElementById(indexOfCurrent).classList.add('correctArrow');
            indexOfCurrent++;
        } else {
            indexOfCurrent = 0;
            let allArrows = this.document.querySelectorAll('i')
            for (let item of allArrows) {
                item.classList.remove("correctArrow");
            }
        }
    })
    console.log(e)

    
}

// Function will remove all current arrows on the page.
function clearShowArea() {
    const showArea = document.querySelector("#show")
    let child = showArea.lastElementChild;
    while (child) {
        showArea.removeChild(child)
        child = showArea.lastElementChild;
    }
}