//calculate the scoure
let isLoggedIn = localStorage.getItem('isLoggedIn');
const user = JSON.parse(localStorage.getItem("user"));
let UserName=user.Username


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
    window.location.href = '../../../../suhaib/home.html';
    
}

function profile() {
    window.location.href='../../profile/profile.html'
}


function testhere() {
    window.location.href='../../../../sally/test-here/testHere.html'
}

function Register() {
    window.location.href = '../../../../toqa/Login&SignUp/Login.html?show=signup';
}

function about() {
    window.location.href = '../../../toqa/About Us/About Us.html';
    
}
function aboutT() {
    window.location.href = '../../../../toqa/About Us/About Us.html#Q';
    
}
function Contact() {
    window.location.href = '../../../../Ammar/Ammars/ContactUs/contactUs.html';
    
}
function Login() {
    window.location.href='../../../toqa/Login&SignUp/Login.html#signinForm'
}


function logout() {
    alert('Logged out successfully');
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false'); 
    localStorage.removeItem('user')
    home()
    updateNavbar();
}

function calcRes(arrName,corr,url,testname){
    let arrAns= sessionStorage.getItem(arrName+'-'+UserName).split(',')
    let arrAnsb= sessionStorage.getItem(arrName+'-'+UserName)
    console.log(arrAns)
    let arrCorrect= sessionStorage.getItem(corr+'-'+UserName).split(',')
    console.log(arrCorrect)
    
    let resCard = document.getElementById('result');
    if (!resCard) {
        console.error('Result card element not found!');
        return;
    }
    let score = 0
    for (let i = 0 ; i < arrAns.length ; i++){
        if (arrAns[i].trim() == arrCorrect[i].trim()){
            score++;
        }

    }
    let arr = arrAns.map(item => item.replace(/'/g, "\\'"));
    console.log(arr);
    let len=arr.length;
    
    resCard.innerHTML = `
                    <div class="card w-75">
                        <div class="card-body ${score >= arrCorrect.length/2 ? 'bg-success text-white' : 'bg-danger text-white'}">
                            <h5 class="card-title">your Scoure is :${score}</h5><br>
                            <p class="card-text ">${score >= arrCorrect.length/2 ? 'Good Job you pass the test' : 'Sorry,Try again later'}</P>
                            
                        </div>
                    </div>
                    <div>
                    <button class="btn btn-green mt-5 ms-1 ps-4 pe-4" id="btn" onclick=" showAns('${url}','${arr}')">Review Quiz</button>
                    <button class="btn btn-outline-green mt-5 me-1 ps-5 pe-5" id="btn" onclick="back()">back</button>
                    <div>
                    
                `;
    console.log(score)
    
}

function back(){
// Redirect to the testHere page
    window.location.href = '../../../../sally/test-here/testHere.html';
}




window.onload=()=>{
    updateNavbar();
    let url;
    let rsultId = sessionStorage.getItem('resultId');
    let testname;

    //to know which result to calculate to read 
    if (rsultId == '0') {

        url = '../../JSON/IQ.json';
        testname = 'iq';

        calcRes('iqans','iqcorrectAns',url,testname)
        
    } 
    else if (rsultId == '1') {

        url = '../../JSON/English.json';
        testname = 'eng';

        calcRes('engans','engcorrectAns',url,testname)
       

    } 
    else if (rsultId == '2') {

        url = '../../JSON/technical.json';
        testname = 'tech';

        calcRes('techans','techcorrectAns',url,testname)

    }
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

function displayOption(op,arrAns, con = 0,correct_answer) {
    let c = ''; // Holder for the HTML elements
    let o = 1; // Counter to assign different IDs for the options
    let arr = arrAns.split(',')
    
    // Loop through the options
    for (const option of op) {
        let opt=escapeHtml(option)

    

        if(opt == escapeHtml(arr[con] ) && escapeHtml (arr[con] )== escapeHtml (correct_answer)){
            c += `
            <div class="option bg-success text-white">
                <input checked type="radio" name="question${con}" id="o${o}" value="${opt}">
                <label for="o${o}">${opt}</label>
            </div>
            `;
        }

        else if(opt == escapeHtml (arr[con]) && escapeHtml(arr[con] )!= escapeHtml (correct_answer)){
            c += `
            <div class="option bg-danger text-white">
                <input checked type="radio" name="question${con}" id="o${o}" value="${opt}">
                <label for="o${o}">${opt}</label>
            </div>
            `;
        }
        else{
            c += `
            <div class="option">
                <input type="radio" name="question${con}" id="o${o}" value="${opt}">
                <label for="o${o}">${opt}</label>
            </div>
            `;
        }


        // Create radio button with a label
        o++; // Increment the ID
    console.log('User Answer:', arr[con]);
    console.log('Correct Answer:', correct_answer);
    console.log('Current Option:', option);
    }
    return c; // Return the option tags to the parent.innerHTML

    
}

function displayOptionImg(op, arrAns, con = 0,correct_answer ) {
    let c = ''; // Holder for the HTML elements
    let o = 1; // Counter to assign different IDs for the options
    let arr = arrAns.split(',')
    
    // Loop through the options
    for (const option of op) {
        // console.log(option)
        if(option == arr[con].trim() && arr[con]==correct_answer){
            c += `
            <div class ='bg-success text-white'>
            <input type="radio" checked name="question${con}" id="o${o}" value="${option}" class="card-text mt-4 ms-4 me-2 bg-success text-white"}">
            <label for="o${o}">
                <img src="../../JSON/${option}" alt="Option ${o}" style="max-width: 200px; display: block;">
            </label><br>
            </div>
            `;
        }
        else if(option == arr[con].trim() && arr[con] != correct_answer){
            c += `
             <div class ='bg-danger text-white'>
            <input type="radio" checked name="question${con}" id="o${o}" value="${option}" class="card-text mt-4 ms-4 me-2 bg-danger text-white"}">
            <label for="o${o}">
                <img src="../../JSON/${option}" alt="Option ${o}" style="max-width: 200px; display: block;">
            </label><br>
            </div>
            `;
        }
        else{
            c += `
            <input type="radio" name="question${con}" id="o${o}" value="${option}" class="card-text mt-4 ms-4 me-2 bg-success text-white"}">
            <label for="o${o}">
                <img src="../../JSON/${option}" alt="Option ${o}" style="max-width: 200px; display: block;">
            </label><br>
            `;
        }
        // Create radio button with an image label
        o++; // Increment the ID
      
    }
    return c; // Return the option tags to the parent.innerHTML
}

function showAns(url,arrAns) {

    fetch(url) // Relative path from the folder where your JS is located
    .then(response => response.json()) // Parse it to object
    .then(data => {
        console.log(data.questions);
        let parent = document.getElementById('Quiz'); // Call the parent container
    
        for (let i = 0; i < data.questions.length; i++) {
            let question = data.questions[i];
           // console.log(question);
            
            let card = document.createElement('div');
            card.classList='d-flex flex-column justify-content-md-center align-items-md-center'

            if(question.image_path){

                card.innerHTML = `
                <div class="card w-75 m-2">
                    <div  id="inertContent"  class="card-body ">
                        <h5  class="card-title">${question.question}</h5><br>
                        <img src="../../JSON/${question.image_path}" style="max-width: 400px; display: block;">
                        ${displayOptionImg(question.options,arrAns,i,question.correct_answer)}
                        <p class= 'CorrctAns mt-4'>Correcrt Answer is :<img src="../../JSON/${question.correct_answer}" style="max-width: 200px; display: block;"> </p> 
                    </div>
                </div>
            `

            }
            else{
                
                card.innerHTML = `
                <div class="card w-75 m-2">
                    <div  id="inertContent"  class="card-body ">
                        <h5  class="card-title">${question.question}</h5><br>
                        ${displayOption(question.options,arrAns,i,question.correct_answer)}
                        <p class= 'CorrctAns mt-4'>Correcrt Answer is : <span class='correct'> ${escapeHtml(question.correct_answer)} <span> </p>
                    </div>
                </div>
            `;}
            
            parent.appendChild(card);
        }

        

        
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
    });


    
    
}


let btn =document.getElementById('toUp');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

function goToUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}