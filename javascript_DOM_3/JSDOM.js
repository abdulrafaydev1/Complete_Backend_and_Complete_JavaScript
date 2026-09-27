let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let form = document.querySelector('#validatorForm')

form.addEventListener('submit', function (dets) {
    dets.preventDefault()

    let emailMessage = document.querySelector('#emailMessage')
    emailMessage.textContent = ""
    let passwordMessage = document.querySelector('#passwordMessage')
    passwordMessage.textContent = ""

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(emailInput.value)
    let passwordAns = passwordRegex.test(passwordInput.value)

    let isvalid = true

    if (!emailAns) {
        let emailMessage = document.querySelector('#emailMessage')
        emailMessage.style.color = 'red'
        emailMessage.textContent = 'Email is incurrnect'
        isvalid = false
    }

    if (!passwordAns) {
        let passwordMessage = document.querySelector('#passwordMessage')
        passwordMessage.style.color = 'red'
        passwordMessage.textContent = 'password is incurrnect'
        isvalid = false
    }

    if(isvalid){
        document.querySelector("#result").textContent = 'sahi hai sub kuch'
    }

})