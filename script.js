
if (localStorage.getItem('login')) {
    alert('Already Registered')
    window.history.back()
}


//--------sign up--------
let usernameInput = document.querySelector('#username')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password1')
let _passwordInput = document.querySelector('#password2')
let submitBtn = document.querySelector('#submitbtn')

let values = {
    username: "",
    email: "",
    password: "",
    _password: "",
}

let getValues = () => {
    values.username = usernameInput.value
    values.email = emailInput.value
    values.password = passwordInput.value
    values._password = _passwordInput.value
}


let emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
let passwordFilter = /^[A-Za-z]\w{7,20}$/
let submitForm = () => {
    getValues ()
    
    if (values.email.match(emailFilter) && values.password.match(passwordFilter) && values.password == values._password) {
        localStorage.setItem('login', JSON.stringify(values))
        window.history.back()
    } else {
        alert('Something incorrect')
    }
}

submitBtn.addEventListener('click', submitForm)