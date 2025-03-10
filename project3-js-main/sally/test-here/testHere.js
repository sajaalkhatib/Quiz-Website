console.log('Hello')
const user = JSON.parse(localStorage.getItem("user"));
let UserName=user.Username
window.addEventListener('load',()=>{
    console.log("iq", sessionStorage.getItem("iq-"+UserName));

    if (sessionStorage.getItem("iq-"+UserName) == "true") {
      document.getElementById("r1").disabled = false;
      document.getElementById("s1").disabled = true;
    } else {
      document.getElementById("r1").disabled = true;
      document.getElementById("s1").disabled = false;
    }
  
    if (sessionStorage.getItem("eng-"+UserName) == "true") {
      document.getElementById("r2").disabled = false;
      document.getElementById("s2").disabled = true;
    } else {
      document.getElementById("r2").disabled = true;
      document.getElementById("s2").disabled = false;
    }
  
    if (sessionStorage.getItem("tech-"+UserName) == "true") {
      document.getElementById("r3").disabled = false;
      document.getElementById("s3").disabled = true;
    } else {
      document.getElementById("r3").disabled = true;
      document.getElementById("s3").disabled = false;
    }


})


let isLoggedIn = localStorage.getItem('isLoggedIn');

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

function home() {
    window.location.href = '../../suhaib/home.html';
    
}

function profile() {
    window.location.href='../../Saja/profile/profile.html'
}


function Register() {
    window.location.href = '../toqa/Login&SignUp/Login.html?show=signup';
}

function about() {
    window.location.href = '../../toqa/About Us/About Us.html';
    
}
function aboutT() {
    window.location.href = '../../toqa/About Us/About Us.html#Q';
    
}
function Contact() {
    window.location.href = '../../Ammar/Ammars/ContactUs/contactUs.html';
    
}


function logout() {
    alert('Logged out successfully');
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false'); 
    window.location.href = '../../suhaib/home.html';
    updateNavbar();
}

window.onload = updateNavbar;


function go_to(testId) {
    // تخزين testId في الـ sessionStorage
    sessionStorage.setItem('testId', testId);

    
    // الانتقال إلى صفحة الاختبار
    window.location.href = '../tests/test.html';
}

function go_to_result(testId) {
    // تخزين testId في الـ sessionStorage
    sessionStorage.setItem('resultId', testId);

    
    // الانتقال إلى صفحة الاختبار
    window.location.href = '../../Saja/result/result/result.html';
}
