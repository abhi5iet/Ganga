document.getElementById('signupbtn').addEventListener('click',function(){
    document.querySelector('.big-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.big-modal').style.display = 'none'
})



function JoinNow(){
   
    //     var month = document.getElementById('selectmonth').value;
        
    // var day = document.getElementById('selectday').value;
    // var year = document.getElementById('selectyear').value;
    // var birthdate = `${month}-${day}-${year}`
    
    
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
    gender:document.querySelector('input[name=gender]').value,
    
    // showdatebirth(){
    //     console.log(`${this.month}+" -" + ${this.day}+"-" +${this.year}`)
    // }
    // birthdate:`${month}-${day}-${year}`
    // birthdate:document.getElementById('selectmonth').value,
    
    
    }
    console.log(JoinData)
    var data = JSON.stringify(JoinData)
    localStorage.setItem('join',data)
    validate()
    
    }
    
    
    function validate(){
        var firstname =  document.getElementById('firstname')
        var lastname =  document.getElementById('lastname')
        var email =  document.getElementById('email')
        var reemail =  document.getElementById('re-email')
        var password =  document.getElementById('password')
        var username =  document.getElementById('username')
        // var month = document.getElementById('selectmonth')
        // var day = document.getElementById('selectday')
        // var year = document.getElementById('selectmonth')
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
        }else if(gender.checked===false) {
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
    }


    // login page javascript
document.getElementById('loginbtn').addEventListener('click',function(){
    document.querySelector('.login').style.display = 'flex';
});
document.querySelector('.close1').addEventListener('click',function(){
    document.querySelector('.mylogin').style.display = 'none'
})
