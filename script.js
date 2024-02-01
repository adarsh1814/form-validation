const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

const form = id('form'),
    userName = id('username'),
    email = id('email'),
    password = id('password'),
    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation(userName, 0, 'Username cannot be blank');
    validation(email, 1, 'Email cannot be blank');
    validation(password, 2, 'Password cannot be blank');


}

)

const validation = (id, serial, message) => {
    if (id.value.trim() === '') {
        errorMsg[serial].innerHTML = message
        failureIcon[serial].style.opacity = '1'
    }
    else {
        errorMsg[serial].innerHTML = ''
        failureIcon[serial].style.opacity = '0'
        successIcon[serial].style.opacity = '1'

    }
}