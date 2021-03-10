var posts = document.getElementById('posts');
var buttons = document.getElementById('buttons');
var limit = 8;
function createButton(){
    for(i=0;i<limit;i++){
        let button = document.createElement('button');
        button.setAttribute('id',i+1);
        button.innerHTML = i+1;
        buttons.appendChild(button);
    }

}

createButton()

var popup = document.getElementById("myPopup");
var popup1 = document.getElementById("myPopup1");
var popup2 = document.getElementById("myPopup2");
// When the user clicks on div, open the popup
function myFunction() {
  popup.classList.toggle("show");
}


function mouseOut(){
  popup.classList.toggle("show");
}
function myFunction1(){
    popup1.classList.toggle("show");
}

function mouseOut1(){
    popup1.classList.toggle("show");
}

function myFunction2(){
    popup2.classList.toggle("show");
}

function mouseOut2(){
    popup2.classList.toggle("show");
}