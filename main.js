const timesOne = document.querySelector(".times_one")
const timesTwo = document.querySelector(".times_two")
const timesThree = document.querySelector(".times_three")
const timesFour = document.querySelector(".times_four")
const timesFive = document.querySelector(".times_five")
const timesSix = document.querySelector(".times_six")
const timesSeven = document.querySelector(".times_seven")
const timesEight = document.querySelector(".times_eight")
const timesNine = document.querySelector(".times_nine")
const timesTen = document.querySelector(".times_ten")
const inputNumber = document.querySelector(".input_number")
inputNumber.setAttribute('value', 'Digite um número');

function inputValueDisappearance() {
    inputNumber.removeAttribute('value')
}

function inputValueReappearance() {
    const { value } = inputNumber

    if(value == '') {
        inputNumber.setAttribute('value', 'Digite um número');
    }
}

function tableResult() {
    var inputValue = inputNumber.value

    if(isNaN(inputValue)) {
        alert('Você deve digitar um número')
        return
    }

    if(inputValue == '') {
        alert('Você deve digitar um número')
        return
    }

    timesOne.innerText = `${inputValue} x 1 = ${inputValue * 1}`
    timesTwo.innerText = `${inputValue} x 2 = ${inputValue * 2}`
    timesThree.innerText = `${inputValue} x 3 = ${inputValue * 3}`
    timesFour.innerText = `${inputValue} x 4 = ${inputValue * 4}`
    timesFive.innerText = `${inputValue} x 5 = ${inputValue * 5}`
    timesSix.innerText = `${inputValue} x 6 = ${inputValue * 6}`
    timesSeven.innerText = `${inputValue} x 7 = ${inputValue * 7}`
    timesEight.innerText = `${inputValue} x 8 = ${inputValue * 8}`
    timesNine.innerText = `${inputValue} x 9 = ${inputValue * 9}`
    timesTen.innerText = `${inputValue} x 10 = ${inputValue * 10}`
}