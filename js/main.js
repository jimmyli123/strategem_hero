document.getElementById('easyButton').addEventListener('click', play)
document.getElementById('mediumButton').addEventListener('click', play)
document.getElementById('hardButton').addEventListener('click', play)
document.getElementById('refresh').addEventListener('click', startOver)

let rightArrow = document.querySelector('.fa-solid fa-arrow-right fa-5x')

// Prevent arrow keys from scrolling the page.
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

let mapping = {
    'ArrowRight':39,
    'ArrowLeft':37,
    'ArrowUp':38,
    'ArrowDown':40
}

let difficultyLevel;

function startOver() {
    location.reload();
}

// Error: getting an additional eventlistener everytime I click on a button wihtout refreshing the page.
function play() {
    // Code the 3 second delay
    // document.removeEventListener('keydown', myListener)
    let buttonsToHide = document.querySelectorAll(".optionButton")
    for (let item of buttonsToHide) {
        item.classList.add("hide")
    }
    
    if (this.dataset === undefined) {
    } else {
        difficultyLevel = parseInt(this.dataset.diff)
    }
    
    let numberOfArrows = Math.ceil(Math.random()*difficultyLevel)
    const showArea = document.querySelector("#show")
    clearShowArea();
    
    let answerSheet = []
    let indexOfCurrent = 0;
    for (let i =0; i<numberOfArrows; i++) {
        let key = Math.ceil(Math.random() *4)
        
        // Create i element to hold our arrows.
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


    var myListener = function(e) {
        
        console.log('Beginning a new line.')
        console.log(`Current index = ${indexOfCurrent}`)
        console.log(e.keyCode)
        if (e.keyCode === answerSheet[indexOfCurrent]) {
            console.log(`You inputted the correct arrow. Increasing the index to ${indexOfCurrent + 1}`)
            document.getElementById(indexOfCurrent).classList.add('correctArrow');
            indexOfCurrent++;
            if (indexOfCurrent >= answerSheet.length) {
                console.log('You finished the game!')
                document.removeEventListener('keydown', myListener)
                play()
            }
        } else  if (e.keyCode !== answerSheet[indexOfCurrent]) {
            indexOfCurrent = 0;
            console.log('Incorrect arrow.')
            let allArrows = document.querySelectorAll('i')
            for (let item of allArrows) {
                item.classList.remove("correctArrow");
            }
        }

    }
    let test = document.addEventListener('keydown', myListener)
    // console.log(test)
       
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