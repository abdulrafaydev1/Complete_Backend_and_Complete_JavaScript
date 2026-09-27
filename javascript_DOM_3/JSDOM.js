let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let form = document.querySelector('#validatorForm')

form.addEventListener('submit', function (dets) {
    dets.preventDefault()

    document.querySelector('#emailMessage').textContent = ''
    document.querySelector('#passwordMessage').textContent = ''

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let invalid = true

    let emailAns = emailRegex.test(emailInput.value)
    let passwordAns = passwordRegex.test(passwordInput.value)

    if (!emailAns) {
        let emailMessage = document.querySelector('#emailMessage')
        emailMessage.textContent = 'Email is incurrect'
        emailMessage.style.color = 'red'
        invalid = false
    }

    if (!passwordAns) {
        let passwordMessage = document.querySelector('#passwordMessage')
        passwordMessage.textContent = 'Email is incurrect'
        passwordMessage.style.color = 'red'
        invalid = false
    }

    if(invalid){
        let result = document.querySelector('#result')
        result.textContent = 'anything is sahi'
        result.style.color = 'green'
    }


})