const newGame = document.querySelector('#newGame')
const tryNumber = document.querySelector('#tryNumber')
const input = document.querySelector("input")
const p = document.querySelector("p")

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = null
newGame.addEventListener('click', () => {
    randomNumber = getRandom(0, 10)
    alert("Загадно число от 0 до 10")
})

tryNumber.addEventListener("click", ()=> {
    if (randomNumber == null) {
        alert("Число не загадано")
        return
    }

    const number = input.value
    if (number > randomNumber) {
        p.innerHTML = "ваша цифра больше загаданной"
    } else if (number < randomNumber) {
        p.innerHTML = "ваша цифра меньше загаданной"
    } else {
        p.innerHTML = "Вы угадали!!!"
    }
})