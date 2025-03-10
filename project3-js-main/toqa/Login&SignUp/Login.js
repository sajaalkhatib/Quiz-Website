
// Get references to DOM elements
const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");
const signupForm = document.getElementById('signupForm');

// Detect URL parameter to show the signup form on page load


// Add event listeners for slider buttons
registerbtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// Input validation for the signup form
Username.addEventListener('input', function () {
    // Username validation
    const regName = document.getElementById('Username').value;
    const regNameError = document.getElementById('regUserError');
    
    regNameError.textContent = /^[a-zA-Z]+$/.test(regName) ? '' : 'Numbers are not allowed';
    // /^[a-zA-Z]+$/.test(regName) ? '' : swal({
    //     title: "Try Again!",
    //     text: "Numbers are not allowed!",
    //     icon: "warning"
    //   });;
});
    

regEmail.addEventListener('input', function () {
    // Email validation
    const email = document.getElementById('regEmail').value;
    const emailError = document.getElementById('regEmailError');
    emailError.textContent = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? '' : 'The e-mail is not valid';
});
phone.addEventListener('input', function () {

    // Phone validation
    const regPhone = document.getElementById('phone').value;
    const regPhoneError = document.getElementById('regPhoneError');
    regPhoneError.textContent = /^[0-9]+$/.test(regPhone) ? '' : 'Numbers only allowed';
});
password.addEventListener('input', function () {

    // Password validation
    const password = document.getElementById('password');
    const regpasswordError = document.getElementById('regpasswordError');
    if (password.value.length < 6) {
        regpasswordError.textContent = 'Password must be at least 6 characters';
    } 
    else if (!/[A-Z]/.test(password.value)) {
        regpasswordError.textContent = 'Password must have at least one uppercase English letter';
    }else if (!/[0-9]/.test(password.value)) {
        regpasswordError.textContent = 'Password must have numbers ';
    } else {
        regpasswordError.textContent = '';
    }
});
password.addEventListener('input', function () {

    // Confirm password validation
    const regConfirmPassword = document.getElementById('regConfirmPassword');
    const regConfirmPasswordError = document.getElementById('regConfirmPasswordError');
    regConfirmPasswordError.textContent = password.value === regConfirmPassword.value ? '' : 'Passwords do not match';
});


// Handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const Username = document.getElementById("Username").value;
    const regEmail = document.getElementById("regEmail").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("male").checked ? 'male' : 'female';

    const newUser = {
        Username: Username,
        regEmail: regEmail,
        password: password,
        phone: phone,
        gender: gender,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users)

    if (users.some(user => user.regEmail === regEmail)) {
        swal({
            title: "Try Again!",
            text: "This email is already registered. Please use a different email.",
            icon: "warning"
          });;
        // alert("This email is already registered. Please use a different email.");
    } else {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        // alert("Registration successful! Please login.");
        swal({
            title: "Well Done!",
            text: "Registration successful! Please login.",
            icon: "success"
          });;
        loginbtn.click();
    }
});

// Handle login form submission
document.getElementById("signinForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const Username = document.getElementById("Lusername").value;
    const password = document.getElementById("Lpassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users)
    const user = users.find(user => user.Username === Username);

    if (user) {
        if (user.password === password) {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "../../suhaib/home.html";
        } else {
            // alert("Incorrect password");
            swal({
                title: "Try Again!",
                text: "Incorrect password!",
                icon: "warning"
              });;
        }
    } else {
        // alert("User not found");
        swal({
            title: "Try Again!",
            text: "User not found!",
            icon: "warning"
          });;
    }
});

// Update navbar based on login state
let isLoggedIn = localStorage.getItem('isLoggedIn');

function home() {
    window.location.href = '../../suhaib/home.html';
    
}

function about() {
    window.location.href = '../About Us/About Us.html';
    
}
function aboutT() {
    window.location.href = '../About Us/About Us.html#Q';
    
}
function Contact() {
    window.location.href = '../../Ammar/Ammars/ContactUs/contactUs.html';
    
}
window.onload = OnLoadEventHandeler;


function OnLoadEventHandeler(){
    const queryString=window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    const show = urlParams.get('show')
    console.log(show);
    
    if(show=='signup')
    {
        registerbtn.click();
    }
    else
    {
        loginbtn.click();
    }

}










