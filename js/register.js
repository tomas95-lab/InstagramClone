const form = document.querySelector("form")
const $userName = document.getElementById("inputUser")
const $email = document.getElementById("email")
const $password = document.getElementById("inputPassword")
const $alert = document.querySelector(".alert")

form.addEventListener("submit", (e) => {
    let email = $email.value
    let password = $password.value

    if (email.indexOf(".") == -1 || email.indexOf("@") == -1) {
        e.preventDefault()
        $alert.innerHTML = `<h5>Ingrese un mail correcto</h5>`
    }
    else if (password.length < 4) {
        e.preventDefault()
        $alert.innerHTML = `<h5>Porfavor ingrese una contraseña con al menos 4 caracteres</h5>`

    }
    else {
        $alert.innerHTML = ``
    }

    localStorage.setItem("user", $userName.value)
    localStorage.setItem("password", password)
})