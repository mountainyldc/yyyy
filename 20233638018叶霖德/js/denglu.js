function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('register-title').style.display = 'block';
    document.getElementById('login-switch').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('register-title').style.display = 'none';
    document.getElementById('login-switch').style.display = 'none';
}