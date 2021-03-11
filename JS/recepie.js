for (var i = 1; i <= 10; i++) {
    //console.log(i)
    var create_button = document.createElement('button');
    create_button.setAttribute('id', `button${i}`)
    create_button.innerHTML = `${i}`
    document.getElementById('buttons').appendChild(create_button)
}



for(var i = 0;i<12;i++) {
    var dishes_btn = document.createElement('button');
    dishes_btn.setAttribute('id',`dish-btn${i}`)
    var dishes = ['All Categories','Appetizers','Beverages','Breakfast','Breads','Condiments','Desserts','Snacks','Main Dishes','Salads','Side dishes','Soups'];
    for(var j = 0;j<dishes.length;j++) {
        dishes_btn.innerHTML = dishes[i];
    }
    
    document.getElementById('dishes').appendChild(dishes_btn)
   
}

var theParent = document.querySelector('#dishes');
theParent.addEventListener('click', change);
function change(event) {
    var x = event.target.id
    document.getElementById(x).style.background = '#2bb673'
    document.getElementById(x).style.color = 'white'
    document.getElementById(x).style.border = '0px'
}

theParent.removeEventListener('click',change)
function change(event) {
    var x = event.target.id;
    document.getElementById(x).style.background = 'white'
}







var y = document.getElementById('dishes')
y.addEventListener('click',()=> y.style.background = 'white')



for (var i = 1; i <= 10; i++) {
    //console.log(i)
    var create_button = document.createElement('button');
    create_button.setAttribute('id', `button${i}`)
    create_button.innerHTML = `${i}`
    document.getElementById('buttons1').appendChild(create_button)
}






