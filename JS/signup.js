


// const button = document.getElementById('signupbtn')
// button.addEventListener('click','file:///C:/Users/pawan/Ganga/signuprest.html')
    

var array =[]

function JoinNow(){
   
    var month = document.getElementById('selectmonth').value;
    
var day = document.getElementById('selectday').value;
var year = document.getElementById('selectyear').value;
var birthdate = `${month}-${day}-${year}`


var JoinData = {
firstname:document.getElementById('firstname').value,
lastname:document.getElementById('lastname').value,
email:document.getElementById('email').value,
reemail:document.getElementById('re-email').value,
password:document.getElementById('password').value,
username:document.getElementById('username').value,
country:document.getElementById('selectcountry').value,
state:document.getElementById('selectstate').value,
photo:document.getElementById('photo').value,
gender:document.querySelector('input[name=gender]:checked').value,
DOB:birthdate





}
console.log(JoinData)
var data = JSON.stringify(JoinData)
localStorage.setItem('join',data)

var get = localStorage.getItem('join')
array.push(get)
console.log(array)
validate()

}
// LOG IN DETAILS
var loginbtn = document.getElementById("loginBtn");
function loginn(event) {
    event.preventDefault();
    let email_L = document.getElementById("email_L").value;
    let password_L = document.getElementById("password_L").value;
    var get = localStorage.getItem('join');
    console.log(get);
    get = JSON.parse(get);
    console.log(get)
    if (email_L == get.email && password_L === get.password) {
        alert("Login Successful");
    } else {
        alert("Try Again");
    }
}
/*
​

*/

loginbtn.addEventListener("click", loginn);




function validate(){
    var firstname =  document.getElementById('firstname')
    var lastname =  document.getElementById('lastname')
    var email =  document.getElementById('email')
    var reemail =  document.getElementById('re-email')
    var password =  document.getElementById('password')
    var username =  document.getElementById('username')
    var month = document.getElementById('selectmonth')
    var day = document.getElementById('selectday')
    var year = document.getElementById('selectmonth')
    var gender =  document.getElementById('gender')
    var checkbox =  document.getElementById('checkbox')
    
    
    if(firstname.value.length<=0){
        alert('Plz enter your firstname')
    }else if(lastname.value.length<=0)
     {
        alert('Plz enter your lastname')
    }else if(email.value<=0){
        alert('Plz enter your email')
    }else if(reemail.value<=0){
        alert('Plz Re-enter your email')
    }else if(password.value<=0){
        alert('Plz enter your password')
    }else if(username.value<=0){
        alert('Plz enter your username')
    }else if(gender.value===false) {
        alert('plz select gender')
   }
    else if(checkbox.checked===false) {
         alert('plz select checkbox')
    }


    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('re-email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('username').value = '';
    document.getElementById('checkbox').checked = '';
    document.getElementById('selectcountry').value='';
    document.getElementById('selectstate').value = '';
    document.getElementById('photo').value = '';
    document.getElementById('selectmonth').value= '';
    document.querySelector('input[name=gender]:checked').value = '';
    document.getElementById('selectday').value = '';
    document.getElementById('selectyear').value = '';
}





// popup1 javascript(signuppage)
document.getElementById('signupbtn').addEventListener('click',function(){
    document.querySelector('.big-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.big-modal').style.display = 'none'
})



// login page javascript
document.getElementById('loginbtn').addEventListener('click',function(){
    document.querySelector('.login').style.display = 'flex';
});
document.querySelector('.close1').addEventListener('click',function(){
    document.querySelector('.mylogin').style.display = 'none'
})


