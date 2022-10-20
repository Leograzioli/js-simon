const qtyNumber = 5;
const numbersContainer = document.getElementById("numbers");
const result = document.getElementById("result")
const rdnNumbers = createRdnNumberArray(qtyNumber);
numbersContainer.innerHTML = rdnNumbers

console.log(rdnNumbers);


setTimeout(() => {
    numbersContainer.innerHTML = ""
}, 3000);

setTimeout(() => {
    const userNumbers = askNumber(qtyNumber);
    console.log(userNumbers );
    const arrayCompare1 = (arrayCompare(rdnNumbers, userNumbers)); 
    result.innerHTML = `numeri indovinati: ${arrayCompare1} hai fatto ${arrayCompare1.length} punti`;
}, 3200)


//FUNCTIONS
//generate rnd numbers in a range between min(number) and max(number) parameters
// return (number)
function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};


//add random number to rndNumbersArray without repeated number.
// arraylength -> (number) - array length 
//return --(array) 
function createRdnNumberArray (arraylength) {
    const rndNumbersArray = []
    while (rndNumbersArray.length < arraylength) {
        const element = getRndInteger(1,100);
    
        if (!rndNumbersArray.includes(element)){
            rndNumbersArray.push(element);
        } 
    }
    return rndNumbersArray
}

//ask user the numbers and sabe to an array
// arraylength -> (number) - array length 
//return --(array)
function askNumber (arrayLenght) {
    const userNumbersArray = [];
    for (let i = 0; i < arrayLenght; i++) {
        const userImput = parseInt(prompt("Tell us the memorized numbers"));   
        userNumbersArray.push(userImput);
    }
    return userNumbersArray;
}



//compare two arrays to see how many itens are equals
// array1 -> (array)
// array2 -> (array)
//return - (array)
function arrayCompare(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        if (array2.includes(element)) {
            result.push(element);
        }
    }
    return result;    
}
