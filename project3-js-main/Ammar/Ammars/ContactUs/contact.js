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

function home() {
  window.location.href='../../../suhaib/home.html'
}

function Login() {
    window.location.href='../../../toqa/Login&SignUp/Login.html#signinForm'
}

function testhere() {
    
    window.location.href='../../../sally/test-here/testHere.html'

}

function profile() {
    window.location.href='../../../Saja/profile/profile.html'
}


function Register() {
    window.location.href = '../../../toqa/Login&SignUp/Login.html?show=signup';
}

function about() {
    window.location.href = '../../../toqa/About Us/About Us.html';
    
}
function aboutT() {
    window.location.href = '../../../toqa/About Us/About Us.html#Q';
    
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

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const form = document.getElementById('form');

form.addEventListener('input', function () {
  const username = document.getElementById('username').value;
  const usernameError = document.getElementById('usernameError');
  const usernameRegex = /^[a-zA-Z]+$/;
  usernameError.textContent = usernameRegex.test(username) ? '' : 'Only letters are allowed';

  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  emailError.textContent = emailRegex.test(email) ? '' : 'Enter a valid email address';

  const phone = document.getElementById('phone').value;
  const phoneError = document.getElementById('phoneError');
  const phoneRegex = /^[0-9]+$/;
  phoneError.textContent = phoneRegex.test(phone) ? '' : 'Phone number must contain only numbers';

  const message = document.getElementById('message').value;
  const messageError = document.getElementById('messageError');
  messageError.textContent = message.trim() === '' ? 'Message cannot be empty' : '';
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!username && !email && !phone && !message) {
    alert('Please fill out the form before submitting.');
    return;
  }

 
  if (
    document.getElementById('usernameError').textContent ||
    document.getElementById('emailError').textContent ||
    document.getElementById('phoneError').textContent ||
    document.getElementById('messageError').textContent
  ) {
    alert('Please fix the errors in the form before submitting.');
    return;
  }

 
  const formData = {
    username: username,
    email: email,
    phone: phone,
    message: message,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Form submitted and data saved successfully!');
  form.reset();
});