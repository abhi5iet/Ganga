var posts = document.getElementById('posts');
var buttons1 = document.getElementById('buttons1');
var buttons2 = document.getElementById('buttons2');
const body = document.getElementById('posts')
var limit = 8;
var mockapi = [{
    name:"Buon Appetito at table9",
    back:"../Ganga/IMG/565-4023-l.jpg",
    votes:15,
    discount:-30,
    hotel:"Table9 Cafe & Kitchen" ,
    location: "Kuala Lumpur, Wilayah Persekutuan",
    desc:"Indulge in a creative fare of Italian cuisine and Korean-inspired drinks in the cozy atmosphere of Table9.",
    expiry:"12 Days",
    egg:true,
    milk:true,
    drink:false,
    },{
        name:"Buon Appetito at table9",
        back:"../Ganga/IMG/565-4023-l.jpg",
        votes:15,
        discount:-30,
        hotel:"Table9 Cafe & Kitchen" ,
        location: "Kuala Lumpur, Wilayah Persekutuan",
        desc:"Indulge in a creative fare of Italian cuisine and Korean-inspired drinks in the cozy atmosphere of Table9.",
        expiry:"12 Days",
        egg:true,
        milk:true,
        drink:false,
        },
        {
            name:"Buon Appetito at table9",
            back:"../Ganga/IMG/565-4023-l.jpg",
            votes:15,
            discount:-30,
            hotel:"Table9 Cafe & Kitchen" ,
            location: "Kuala Lumpur, Wilayah Persekutuan",
            desc:"Indulge in a creative fare of Italian cuisine and Korean-inspired drinks in the cozy atmosphere of Table9.",
            expiry:"12 Days",
            egg:true,
            milk:true,
            drink:false,
            },
            {
                name:"Buon Appetito at table9",
                back:"../Ganga/IMG/565-4023-l.jpg",
                votes:15,
                discount:-30,
                hotel:"Table9 Cafe & Kitchen" ,
                location: "Kuala Lumpur, Wilayah Persekutuan",
                desc:"Indulge in a creative fare of Italian cuisine and Korean-inspired drinks in the cozy atmosphere of Table9.",
                expiry:"12 Days",
                egg:true,
                milk:true,
                drink:false,
                },
        ]
function createButton(){
    for(i=0;i<limit;i++){
        let button = document.createElement('button');
        button.setAttribute('id',i+1);
        button.innerHTML = i+1;
        buttons1.appendChild(button);
        buttons2.appendChild(button);
      
    }

}

createButton()

function addPosts(){
 for(i in mockapi){
     var div = document.createElement('div');
     div.setAttribute('class','flex');
     div.innerHTML = ` <div id="imgs" style="background-image: url(${mockapi[i].back});">
     <div class="top-left"><h2 class="circle" style="color:rgb(70, 69, 69); margin-top:5px; text-align: center; font-size: 22px;">${mockapi[i].discount}%</h2></div>
     <h2><span class="background">${mockapi[i].name}</span></h2>
 </div>
 <div class="padded" style="margin-bottom:2px;">
     <span class="inline"><p style="font-size: 18px; font-weight: 600; color: rgb(151, 151, 151);" class="inline">${mockapi[i].hotel}</p></span><pre class="inline"> - </pre><span class="lighter inline" style="font-size: 14px;">${mockapi[i].location}</span>
 </div>
<p class="padded" style="margin: 3px 3px 7px 3px;">${mockapi[i].desc}</p>
<button class="inline post-buttons">Get FREE Coupon</button> <div class="stars-outer"><div class="stars-inner"></div></div><p class="inline" style="margin-left: 2%; font-size: 12px;">(15)</p>
<div class=" bordertop" style="margin-bottom: 0px;display: flex; flex-wrap: nowrap; padding: 0% 2%;margin-top: 10px;height: 55px;" >
     <div style="flex-direction: row;flex-grow: 1;width: 0%; padding-top: 10px;" class="borderright">
         <span class="selected icons popup""><img  class="scale" src="https://www.kindmeal.my/images/icon_egg.png" alt=""><span class="popuptext" id="myPopup">Contains egg</span></span><span class="selected icons popup" onmouseover="myFunction1()" onmouseout="mouseOut1()"><img class="scale" src="https://www.kindmeal.my/images/icon_milk.png" alt=""><span class="popuptext" id="myPopup1">Contains Dairy products<br/>(i.e milk,cheese)</span></span><span class="selected icons popup" onmouseover="myFunction2()" onmouseout="mouseOut2()"><img class="scale" src="https://www.kindmeal.my/images/icon_alcohol.png" alt=""><span class="popuptext" id="myPopup2">Contains Alcohol<br/>(i.e beer,wine,liqour)</span></span>
     </div>
     <div style="flex-direction: row;flex-grow: 1; text-align:center; " class="borderright">
         <p style="margin: 3px 1px 1px 1px;">kindMEal Discount</p>
         <h2 style="color: red;  margin:1px">${mockapi[i].discount} off</h2>
     </div>
     <div style="flex-direction: row;flex-grow: 1; text-align:center;  width: 0%;">
         <p style="margin: 1px;">Expires in</p>
         <h2 style="color: rgb(119, 119, 119);  margin:1px">${mockapi[i].expiry}</h2>
     </div>`;
     body.append(div);
 }
}
addPosts();
