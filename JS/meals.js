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