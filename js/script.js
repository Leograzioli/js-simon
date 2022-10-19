const numbersContainer = document.getElementById("numbers");
const finalResult = document.getElementById("result");
const RndNumbersArray = [];
const userNumbersArray = [];
const guessedNumber = []

//generate rnd numbers in a range between min(number) and max(number) parameters
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//compares RndNumbersArray with guessedNumber to know the result
const result = () => {
    for (let i = 0; i < RndNumbersArray.length; i++) {
        const elementI = RndNumbersArray[i];
        for (let j = 0; j < userNumbersArray.length; j++) {
            const elementJ = userNumbersArray[j];
            if(elementJ === elementI){
                guessedNumber.push(elementJ)
            }
        }
    }
    finalResult.innerHTML += (`quantita di numeri indovinati: ${guessedNumber.length}.  numeri indovinati: ${guessedNumber} `);
}

// to ask user the numbers 
const askUser = () => {
    for (let i = 0; i < 5; i++) {
        let userImput = parseInt(prompt("indovina il numero"));
        if (isNaN(userImput)) {
            userImput = parseInt(prompt("hai inserito una lettera, indovina il NUMERO"));
        }      
        userNumbersArray.push(userImput)
    }
    result();
}

//generate random number and add to RndNumbersArray without repeated number.
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

setTimeout(askUser, 3100);

setTimeout( () => {
    numbersContainer.classList.remove("hidden");
}, 3200)