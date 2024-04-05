// LIGHT / DARK MODE
const switchButton = document.querySelector(".switch-mode")
const switcher = document.querySelector(".switch")
const body = document.querySelector("body")

switchButton.addEventListener("click", function () {
    body.classList.toggle("dark")
    switcher.classList.toggle("switch-dark")
})

//NAVIGATION
const icon = document.querySelector(".fa-solid")
const navigation = document.querySelector(".links")

icon.addEventListener("click", function() {
    navigation.classList.toggle("show-links")
if (icon.classList.contains("fa-bars") ) {
    icon.classList.add("fa-xmark")
    icon.classList.remove("fa-bars")
} else {
    icon.classList.add("fa-bars")
    icon.classList.remove("fa-xmark")
}
})

//SCROLL
const links = document.querySelectorAll(".link")
links.forEach((link) => {
    link.addEventListener("click", function(e) {
        e.preventDefault()
        const id = e.currentTarget.getAttribute("class").slice(5)
        const scrollGoal = document.getElementById(id)
        const position = scrollGoal.offsetTop

        window.scrollTo({
                    top: position,
                    behavior: "smooth"
                })
    })
})

// TOP BUTTON
const button = document.querySelector(".top")

window.addEventListener("scroll", function () {
    scrollY > 100 ? button.classList.add("show-button") : button.classList.remove("show-button")
})

//PASSWORD
const logForm = document.querySelector(".log-form")
const passwordInput = document.querySelector(".password")
const confirmPasswordInput = document.querySelector(".confirm-password")
const notification = document.querySelector(".notification")

const printNotification = (message, newClass) => {
    notification.textContent = message
    notification.classList.add(newClass)
}

logForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let password = passwordInput.value
    let confirmedPassword = confirmPasswordInput.value
    !password ?
        printNotification("Musíte vyplnit heslo", "red") : password === confirmedPassword ?
            printNotification("Hesla jsou stejná", "green") : printNotification("Hesla nejsou stejná", "red")
})

//CONTACT FORM
const emailInput = document.querySelector(".email")
const errorDiv = document.querySelector(".error")
const message = document.querySelector(".message")
const counter = document.querySelector(".number-of-letters")

emailInput.addEventListener("input", function () {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,4}$/

    errorDiv.textContent = !emailInput.value ?
        "Musíte vyplnit e-mail" : !pattern.test(emailInput.value) ?
            "E-mail nemá správný formát" : ""
});

message.addEventListener("input", function() {
    counter.textContent = message.value.length
})



