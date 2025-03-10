// let isLoggedIn1 = localStorage.setItem('isLoggedIn',false);

let isLoggedIn = localStorage.getItem('isLoggedIn');

function updateNavbar() {
    if (isLoggedIn === 'true') {
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



function Login() {
    window.location.href='../toqa/Login&SignUp/Login.html#signinForm'
}

function testhere() {
    
    window.location.href='../sally/test-here/testHere.html'

}

function profile() {
    window.location.href='../Saja/profile/profile.html'
}


function Register() {
    window.location.href = '../toqa/Login&SignUp/Login.html?show=signup';
}

function about() {
    window.location.href = '../toqa/About Us/About Us.html';
    
}
function aboutT() {
    window.location.href = '../toqa/About Us/About Us.html#Q';
    
}
function Contact() {
    window.location.href = '../Ammar/Ammars/ContactUs/contactUs.html';
    
}


function logout() {
    alert('Logged out successfully');
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false'); 
    localStorage.removeItem('user')
    updateNavbar();
}

window.onload = updateNavbar;
