const numbersContainer = document.getElementById("numbers");
const RndNumbersArray = [];
const userNumbersArray = [];
const guessedNumber = []


for (let i = 0; i < 5; i++) {
    const element = getRndInteger(1,100);
    numbersContainer.innerHTML +=` ${element}` ;
    RndNumbersArray.push(element);
}

setTimeout(hideElementHtml, 3000);
setTimeout(askUser, 3100);


//FUNCTIONS

//generate rnd numbers in a range between min(number) and max(number) parameters
//return (number)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//to ad class hidden
function hideElementHtml () {
    numbersContainer.classList.add("hidden");
}


// to ask user the numbers 
function askUser() {
    for (let i = 0; i < 5; i++) {
        let userImput = parseInt(prompt("indovina il numero"));        
        userNumbersArray.push(userImput)
    }
    result();
}


function result() {
    for (let i = 0; i < RndNumbersArray.length; i++) {
        const elementI = RndNumbersArray[i];
        for (let j = 0; j < userNumbersArray.length; j++) {
            const elementJ = userNumbersArray[j];
            if(elementJ === elementI){
                guessedNumber.push(elementJ)
            }
        }
    }

    console.log(`quantita di numeri indovinati: ${guessedNumber.length}.  numeri indovinati: ${guessedNumber} `);
}