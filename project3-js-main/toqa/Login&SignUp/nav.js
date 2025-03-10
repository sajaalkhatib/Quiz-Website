
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

function updateNavbar() {
    if (isLoggedIn) {
        document.getElementById('test').style.display = 'block';
        document.getElementById('userProfile').style.display = 'block';
        document.getElementById('logout').style.display = 'block';
        document.getElementById('log').style.display = 'none';
        document.getElementById('join').style.display = 'none';
    } else {
        document.getElementById('test').style.display = 'none';
        document.getElementById('userProfile').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('log').style.display = 'block';
        document.getElementById('join').style.display = 'block';
    }
}

function showLogin() {
    alert('Login functionality here');
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true'); 
    updateNavbar();
}

function showRegister() {
    alert('Register functionality here');
}

function logout() {
    alert('Logged out successfully');
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false'); 
    updateNavbar();
}

window.onload = updateNavbar;
