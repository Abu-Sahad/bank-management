document.getElementById('login-from-button').addEventListener('click', function () {
    const inputFieldEmail = document.getElementById('input-email');
    const email = inputFieldEmail.value;
    const inputFieldPassword = document.getElementById('input-password');
    const password = inputFieldPassword.value;


    if (email === 'abusahad603@gmail.com' && password === '123456') {
        window.location.href = 'bank.html'
    }
    else{
        alert("valid user and password please")
    }

})