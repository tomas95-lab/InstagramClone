
let num = 1

setInterval(function () {
    if (num == 4) {
        num = 1
    }
    else {
        num++
        const image = document.querySelector(".image-changed")
        image.src = `./img/screenshot${num}.png`
    }
}, 1000)


const form = document.querySelector("#form")
const user = document.querySelector("#email")
const password = document.querySelector("#password")
const alerta = document.querySelector(".alert")

form.addEventListener("submit", (e) => {
    let passwordAc = localStorage.getItem("password")
    let userAc = localStorage.getItem("user")
    if (passwordAc != password.value && userAc != user.value) {
        e.preventDefault()
        alerta.innerHTML = `<h5>Cuenta no encontrada</h5>`
    }
})


