function validateName() {
    let nameError = document.getElementById('usernameError')
    let name = document.getElementById('username')

    if(name.value.trim() == ''){
        nameError.innerHTML = 'username cannot be blank'
        return false 
    } 
    else if (name.value.length < 5) {
        nameError.innerHTML = 'username must not be less than 5 characters'
        return false 
    }
    else {
        nameError.innerHTML = ''
        return true
    }
    
}

function validateEmail() {
    let email = document.getElementById('email')
    let emailError = document.getElementById('emailError')

    let regEx = /^[\w-_\.+]*[\w-_\.]\@([\w]+\.)+[\w]+[\w]$/
    if(email.value.trim() == '') {
        emailError.innerHTML = 'Email cannot be blank!!'
        return false 
    }
    else if (!email.value.match(regEx)) {
        emailError.innerHTML = "Email not in global format"
        return false 
    }
    else {
        emailError.innerHTML = ''
        return true
    }
}

function validatePassword() {
    let password = document.getElementById('password')
    let passwordError = document.getElementById('passwordError')

    if(password.value.trim() == '') {
        passwordError.innerHTML = 'Password cannot be blank'
    }
    else if (password.value.length < 6 || password.value.length > 20) {
        passwordError.innerHTML = 'Password length cannot be less than 6 characters or more than 20 characters'
        return false
    }
    else {
        passwordError.innerHTML = ''
        return true
    }
}

function validateRepeat() {
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeat')
    let repeatError = document.getElementById('repeatError')

    if (password.value != repeatPassword.value) {
        repeatError.innerHTML = 'Password mismatch'
        return false 
    }
    else {
        repeatError.innerHTML = ''
        return true
    }
}

function validateForm() {
    let submitError = document.getElementById("submitError")
    if(!validateEmail() || !validateName() || !validatePassword || 
    !validateRepeat) {
        submitError.innerHTML="Please resolve the errors"
        return false
    }
    else {
        submitError.innerHTML = ''
        return true
    }
}


