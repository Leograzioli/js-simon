const numbersContainer = document.getElementById("numbers");
const RndNumbersArray = [];
const userNumbersArray = [];
const guessedNumber = []

while (RndNumbersArray.length < 5) {
    const element = getRndInteger(1,100);
    if (!RndNumbersArray.includes(element)){
        numbersContainer.innerHTML +=` ${element}` ;
        RndNumbersArray.push(element);
    } 
}

//timeout to hide the class
setTimeout( () => {
    numbersContainer.classList.add("hidden");
}, 3000);

// to ask user the numbers 
const askUser = () => {
    for (let i = 0; i < 5; i++) {
        let userImput = parseInt(prompt("indovina il numero"));        
        userNumbersArray.push(userImput)
    }
    result();
}

setTimeout(askUser, 3100);

//FUNCTIONS

//generate rnd numbers in a range between min(number) and max(number) parameters
//return (number)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//check if the RndNumbersArray includes the inputed number 
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