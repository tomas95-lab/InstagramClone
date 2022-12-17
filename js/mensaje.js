const chatContainer = document.querySelector(".chatContainer")
const form = document.getElementById("sendMessage")
const messageInput = document.getElementById("messageInput")
const userNameAcc = document.getElementById("userNameAcc")
userNameAcc.innerHTML = localStorage.getItem("user")

const $user = document.getElementById("userNameAcc")
$user.innerHTML = localStorage.getItem("user")

const bot = (container, messageM) => {
    const messageX = document.createElement("div")
    container.appendChild(messageX)
    let valueMessage

    messageX.classList.add("messageX")
    messageX.classList.add("message")

    switch (messageM) {
        case "hola":
            valueMessage = "holaa"
            break;
        case "chau":
            valueMessage = "chauu:)"
            break;
        case "como estas?":
            valueMessage = "bien vos?"
            break;
        case "bien":
            valueMessage = "me alegro"
            break;
        case "mal":
            valueMessage = "uh que pena jodete 🤭"
            break;
        case "puta":
            valueMessage = "puta tu mama"
            break;

        default: valueMessage = "no entendi :("

            break;
    }
    messageX.innerHTML = valueMessage
}


form.addEventListener("submit", (e) => {
    e.preventDefault()

    let valueMessage = messageInput.value

    const messageM = document.createElement("div")
    chatContainer.appendChild(messageM)
    messageM.innerHTML = valueMessage
    messageM.classList.add("messageM")
    messageM.classList.add("message")
    bot(chatContainer, valueMessage)
    chatContainer.scrollTop = chatContainer.scrollHeight;

    messageInput.value = ""

})