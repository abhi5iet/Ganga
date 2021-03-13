var posts = document.getElementById('posts');
var buttons1 = document.getElementById('buttons1');
var buttons2 = document.getElementById('buttons2');
const body = document.getElementById('posts');
var mockapi = [{ name:"Buon Appetito at table9",back:"../IMG/565-4023-l.jpg",alt:"",votes:15,rating:4.5,discount:30,hotel:"Table9 Cafe & Kitchen" ,location: "Kuala Lumpur, Wilayah Persekutuan",desc:"Indulge in a creative fare of Italian cuisine and Korean-inspired drinks in the cozy atmosphere of Table9.",
    expiry:"12 Days",
    egg:true,
    milk:true,
    drink:false,
    food:"burger",
    },{
        name:"Trendy Fusion Delights",
        back:"../IMG/618-3514-l.jpg",
        votes:11,
        rating:5,
        discount:20,
        hotel:"Vg Seventeen Cafe" ,
        location: "Kuala Lumpur, Wilayah Persekutuan",
        desc:"Let us pamper you with trendy, healthy and fascinating meals, prepared with fresh and natural ingredients!",
        expiry:"8 Hours",
        egg:false,
        milk:true,
        drink:false,
        food:"pasta"
        },
        {
            name:"Authentic taste of Hong Kong",
            back:"../IMG/666-4145-l.jpg",
            votes:0,
            rating:0,
            discount:30,
            hotel:"Prince Cuisine" ,
            location: "Kuala Lumpur, Wilayah Persekutuan",
            desc:"Prince Cuisine indulges you with a taste of authentic Hong Kong food within the cozy atmosphere of our restaurant",
            expiry:"11 Days",
            egg:true,
            milk:true,
            drink:false,
            food:"breakfast",
            },
            {
                name:"Vegipai's Fusion Indulgence",
                back:"../IMG/591-3151-l.jpg",
                votes:19,
                rating:4.5,
                discount:20,
                hotel:"Vegipai Cafe" ,
                location: "Taman Desa, Off Jln. Kelang La.., Kuala Lumpur",
                desc:"Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients!",
                expiry:"9 Days",
                egg:true,
                milk:true,
                drink:false,
                food:"breakfast",
                },
                {
                    name:"Rawsome Lifestyle",
                    back:"../IMG/590-3137-l.jpg",
                    votes:6,
                    rating:4.5,
                    discount:20,
                    hotel:"Rawsome" ,
                    location: "Sungai Buloh & 1 Branch",
                    desc:"Enjoy healthy, guilt-free, raw food meals artfully crafted for a nutritious and delicious experience.",
                    expiry:"7 Hours",
                    egg:true,
                    milk:false,
                    drink:false,
                    food:"burger",
                    },
                    {
                        name:"RAWsome Treats",
                        back:"../IMG/508-2267-l.jpg",
                        votes:12,
                        rating:5,
                        discount:25,
                        hotel:"The Honest Treat" ,
                        location: "Hartamas, Kuala Lumpur",
                        desc:"Indulge in guiltless desserts made with the finest ingredients, handcrafted into decadent treats!",
                        expiry:"4 Days",
                        egg:false,
                        milk:false,
                        drink:false,
                        food:"pasta",
                        },
                        {
                            name:"Dining Bowl Asian Delicacies",
                            back:"../IMG/383-1189-l.jpg",
                            votes:12,
                            rating:4,
                            discount:20,
                            hotel:"Dining Bowl" ,
                            location: "Kuala Lumpur, Wilayah Persekutuan",
                            desc:"Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality!",
                            expiry:"10 Days",
                            egg:true,
                            milk:true,
                            drink:false,
                            food:"salad",
                            }, {
                                name:"Lovely Fusion Meals",
                                back:"../IMG/633-3874-l.jpg",
                                votes:4,
                                rating:4,
                                discount:20,
                                hotel:"Love Veggie" ,
                                location: " Klang, Selangor",
                                desc:"Enjoy a cozy dining experience where we pamper you with a variety of healthy, exquisite and natural foods.",
                                expiry:"9 Days",
                                egg:false,
                                milk:true,
                                drink:false,
                                food:"japanesekorean"
                                }, {
                                    name:"Hainaese & Local Delights",
                                    back:"../IMG/660-4040-l.jpg",
                                    votes:4,
                                    rating:5,
                                    discount:20,
                                    hotel:"GreenLeaf Hut" ,
                                    location: "Puchong, Selangor",
                                    desc:"Enjoy our wholesome, healthy home-cooked delights within a comfortable environment.",
                                    expiry:"6 Days",
                                    egg:true,
                                    milk:true,
                                    drink:false,
                                    food:"japanesekorean"
                                    }, {
                                        name:"Buon Appetito at table9",
    back:"../IMG/565-4023-l.jpg",
    votes:15,
    rating:2,
    discount:30,
    hotel:"Table9 Cafe & Kitchen" ,
    location: "Kuala Lumpur, Wilayah Persekutuan",
    desc:"Indulge in a creative fare of Italian cuisine and Korean-inspired drinks in the cozy atmosphere of Table9.",
    expiry:"12 Days",
    egg:true,
    milk:true,
    drink:false,
    food:"salad",
    },{
        name:"Trendy Fusion Delights",
        back:"../IMG/618-3514-l.jpg",
        votes:11,
        rating:3.5,
        discount:20,
        hotel:"Vg Seventeen Cafe" ,
        location: "Bangsar, Wilayah Persekutuan",
        desc:"Let us pamper you with trendy, healthy and fascinating meals, prepared with fresh and natural ingredients!",
        expiry:"8 Hours",
        egg:false,
        milk:true,
        drink:false,
        food:"hightea",
        },
        {
            name:"Authentic taste of Hong Kong",
            back:"../IMG/666-4145-l.jpg",
            votes:0,
            rating:1.5,
            discount:30,
            hotel:"Prince Cuisine" ,
            location: "Kuala Lumpur, Wilayah Persekutuan",
            desc:"Prince Cuisine indulges you with a taste of authentic Hong Kong food within the cozy atmosphere of our restaurant",
            expiry:"11 Days",
            egg:true,
            milk:true,
            drink:false,
            food:"soup",
            },
            {
                name:"Vegipai's Fusion Indulgence",
                back:"../IMG/591-3151-l.jpg",
                votes:19,
                rating:4.5,
                discount:20,
                hotel:"Vegipai Cafe" ,
                location: "Taman Desa, Off Jln. Kelang La.., Kuala Lumpur",
                desc:"Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients!",
                expiry:"9 Days",
                egg:true,
                milk:true,
                drink:false,
                food:"chinesevegetarian",
                },
                {
                    name:"Rawsome Lifestyle",
                    back:"../IMG/590-3137-l.jpg",
                    votes:6,
                    rating:4.5,
                    discount:20,
                    hotel:"Rawsome" ,
                    location: "Sungai Buloh & 1 Branch",
                    desc:"Enjoy healthy, guilt-free, raw food meals artfully crafted for a nutritious and delicious experience.",
                    expiry:"7 Hours",
                    egg:true,
                    milk:false,
                    drink:false,
                    food:"chinesevegetarian",
                    },
                    {
                        name:"RAWsome Treats",
                        back:"../IMG/508-2267-l.jpg",
                        votes:12,
                        rating:5,
                        discount:25,
                        hotel:"The Honest Treat" ,
                        location: "Bangsar, Kuala Lumpur",
                        desc:"Indulge in guiltless desserts made with the finest ingredients, handcrafted into decadent treats!",
                        expiry:"4 Days",
                        egg:false,
                        milk:false,
                        drink:false,
                        food:"chinesevegetarian",
                        },
                        {
                            name:"Dining Bowl Asian Delicacies",
                            back:"../IMG/383-1189-l.jpg",
                            votes:12,
                            rating:4,
                            discount:20,
                            hotel:"Dining Bowl" ,
                            location: "Ara Damansara, Wilayah Persekutuan",
                            desc:"Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality!",
                            expiry:"10 Days",
                            egg:true,
                            milk:true,
                            drink:false,
                            }, {
                                name:"Lovely Fusion Meals",
                                back:"../IMG/633-3874-l.jpg",
                                votes:4,
                                rating:4,
                                discount:20,
                                hotel:"Love Veggie" ,
                                location: " Klang, Selangor",
                                desc:"Enjoy a cozy dining experience where we pamper you with a variety of healthy, exquisite and natural foods.",
                                expiry:"9 Days",
                                egg:false,
                                milk:true,
                                drink:false,
                                }, {
                                    name:"Hainaese & Local Delights",
                                    back:"../IMG/660-4040-l.jpg",
                                    votes:4,
                                    rating:5,
                                    discount:20,
                                    hotel:"GreenLeaf Hut" ,
                                    location: "Puchong, Selangor",
                                    desc:"Enjoy our wholesome, healthy home-cooked delights within a comfortable environment.",
                                    expiry:"6 Days",
                                    egg:true,
                                    milk:true,
                                    drink:false,
                                    }, {
                                        name:"Buon Appetito at table9",
                                        back:"../IMG/565-4023-l.jpg",
                                        votes:15,
                                        rating:4.5,
                                        discount:30,
                                        hotel:"Table9 Cafe & Kitchen" ,
                                        location: "Kuala Lumpur, Wilayah Persekutuan",
                                        desc:"Indulge in a creative fare of Italian cuisine and Korean-inspired drinks in the cozy atmosphere of Table9.",
                                        expiry:"12 Days",
                                        egg:true,
                                        milk:true,
                                        drink:false,
                                        food:"burger",
                                        },{
                                            name:"Trendy Fusion Delights",
                                            back:"../IMG/618-3514-l.jpg",
                                            votes:11,
                                            rating:5,
                                            discount:20,
                                            hotel:"Vg Seventeen Cafe" ,
                                            location: "Kuala Lumpur",
                                            desc:"Let us pamper you with trendy, healthy and fascinating meals, prepared with fresh and natural ingredients!",
                                            expiry:"8 Hours",
                                            egg:false,
                                            milk:true,
                                            drink:false,
                                            food:"burger",
                                            },
                                            {
                                                name:"Authentic taste of Hong Kong",
                                                back:"../IMG/666-4145-l.jpg",
                                                votes:0,
                                                rating:0,
                                                discount:30,
                                                hotel:"Prince Cuisine" ,
                                                location: "Ara Damansara, Wilayah Persekutuan",
                                                desc:"Prince Cuisine indulges you with a taste of authentic Hong Kong food within the cozy atmosphere of our restaurant",
                                                expiry:"11 Days",
                                                egg:true,
                                                milk:true,
                                                drink:false,
                                                food:"burger",
                                                },
                                                {
                                                    name:"Vegipai's Fusion Indulgence",
                                                    back:"../IMG/591-3151-l.jpg",
                                                    votes:19,
                                                    rating:4.5,
                                                    discount:20,
                                                    hotel:"Vegipai Cafe" ,
                                                    location: "Taman Tun, Off Jln. Kelang La.., Kuala Lumpur",
                                                    desc:"Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients!",
                                                    expiry:"9 Days",
                                                    egg:true,
                                                    milk:true,
                                                    drink:false,
                                                    },
                                                    {
                                                        name:"Rawsome Lifestyle",
                                                        back:"../IMG/590-3137-l.jpg",
                                                        votes:6,
                                                        rating:4.5,
                                                        discount:20,
                                                        hotel:"Rawsome" ,
                                                        location: "Sungai Buloh & 1 Branch",
                                                        desc:"Enjoy healthy, guilt-free, raw food meals artfully crafted for a nutritious and delicious experience.",
                                                        expiry:"7 Hours",
                                                        egg:true,
                                                        milk:false,
                                                        drink:false,
                                                        },
                                                        {
                                                            name:"RAWsome Treats",
                                                            back:"../IMG/508-2267-l.jpg",
                                                            votes:12,
                                                            rating:5,
                                                            discount:25,
                                                            hotel:"The Honest Treat" ,
                                                            location: "Old Klang Road, Kuala Lumpur",
                                                            desc:"Indulge in guiltless desserts made with the finest ingredients, handcrafted into decadent treats!",
                                                            expiry:"4 Days",
                                                            egg:false,
                                                            milk:false,
                                                            drink:false,
                                                            },
                                                            {
                                                                name:"Dining Bowl Asian Delicacies",
                                                                back:"../IMG/383-1189-l.jpg",
                                                                votes:12,
                                                                rating:4,
                                                                discount:20,
                                                                hotel:"Dining Bowl" ,
                                                                location: "Kuala Lumpur, Wilayah Persekutuan",
                                                                desc:"Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality!",
                                                                expiry:"10 Days",
                                                                egg:true,
                                                                milk:true,
                                                                drink:false,
                                                                }, {
                                                                    name:"Lovely Fusion Meals",
                                                                    back:"../IMG/633-3874-l.jpg",
                                                                    votes:4,
                                                                    rating:4,
                                                                    discount:20,
                                                                    hotel:"Love Veggie" ,
                                                                    location: "Pudu, Selangor",
                                                                    desc:"Enjoy a cozy dining experience where we pamper you with a variety of healthy, exquisite and natural foods.",
                                                                    expiry:"9 Days",
                                                                    egg:false,
                                                                    milk:true,
                                                                    drink:false,
                                                                    }, {
                                                                        name:"Hainaese & Local Delights",
                                                                        back:"../IMG/660-4040-l.jpg",
                                                                        votes:4,
                                                                        rating:5,
                                                                        discount:20,
                                                                        hotel:"GreenLeaf Hut" ,
                                                                        location: "Sepang, Selangor",
                                                                        desc:"Enjoy our wholesome, healthy home-cooked delights within a comfortable environment.",
                                                                        expiry:"6 Days",
                                                                        egg:true,
                                                                        milk:true,
                                                                        drink:false,
                                                                        }, {
                                                                                                                        name:"Vegipai's Fusion Indulgence",
                                                                                                                        back:"../IMG/591-3151-l.jpg",
                                                                                                                        votes:19,
                                                                                                                        rating:4.5,
                                                                                                                        discount:20,
                                                                                                                        hotel:"Vegipai Cafe" ,
                                                                                                                        location: "Damansara Perdana, Off Jln. Kelang La.., Kuala Lumpur",
                                                                                                                        desc:"Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients!",
                                                                                                                        expiry:"9 Days",
                                                                                                                        egg:true,
                                                                                                                        milk:true,
                                                                                                                        drink:false,
                                                                                                                        }, {
                                                                                                                            name:"Vegipai's Fusion Indulgence",
                                                                                                                            back:"../IMG/591-3151-l.jpg",
                                                                                                                            votes:19,
                                                                                                                            rating:4.5,
                                                                                                                            discount:20,
                                                                                                                            hotel:"Vegipai Cafe" ,
                                                                                                                            location: "Cheras, Off Jln. Kelang La.., Kuala Lumpur",
                                                                                                                            desc:"Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients!",
                                                                                                                            expiry:"9 Days",
                                                                                                                            egg:true,
                                                                                                                            milk:true,
                                                                                                                            drink:false,
                                                                                                                            }, {
                                                                                                                                name:"Vegipai's Fusion Indulgence",
                                                                                                                                back:"../IMG/591-3151-l.jpg",
                                                                                                                                votes:19,
                                                                                                                                rating:4.5,
                                                                                                                                discount:20,
                                                                                                                                hotel:"Vegipai Cafe" ,
                                                                                                                                location: "Taman Desa, Off Jln. Kelang La.., Kuala Lumpur",
                                                                                                                                desc:"Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients!",
                                                                                                                                expiry:"9 Days",
                                                                                                                                egg:true,
                                                                                                                                milk:true,
                                                                                                                                drink:false,
                                                                                                                                }, {
                                                                                                                                    name:"Vegipai's Fusion Indulgence",
                                                                                                                                    back:"../IMG/591-3151-l.jpg",
                                                                                                                                    votes:19,
                                                                                                                                    rating:4.5,
                                                                                                                                    discount:20,
                                                                                                                                    hotel:"Vegipai Cafe" ,
                                                                                                                                    location: "Taman Desa, Off Jln. Kelang La.., Kuala Lumpur",
                                                                                                                                    desc:"Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients!",
                                                                                                                                    expiry:"9 Days",
                                                                                                                                    egg:true,
                                                                                                                                    milk:true,
                                                                                                                                    drink:false,
                                                                                                                                    }, {
                                                                                                                                        name:"RAWsome Treats",
                                                                                                                                        back:"../IMG/508-2267-l.jpg",
                                                                                                                                        votes:12,
                                                                                                                                        rating:5,
                                                                                                                                        discount:25,
                                                                                                                                        hotel:"The Honest Treat" ,
                                                                                                                                        location: "Hartamas, Kuala Lumpur",
                                                                                                                                        desc:"Indulge in guiltless desserts made with the finest ingredients, handcrafted into decadent treats!",
                                                                                                                                        expiry:"4 Days",
                                                                                                                                        egg:false,
                                                                                                                                        milk:false,
                                                                                                                                        drink:false,
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            name:"Dining Bowl Asian Delicacies",
                                                                                                                                            back:"../IMG/383-1189-l.jpg",
                                                                                                                                            votes:12,
                                                                                                                                            rating:4,
                                                                                                                                            discount:20,
                                                                                                                                            hotel:"Dining Bowl" ,
                                                                                                                                            location: "Kelana Jaya, Wilayah Persekutuan",
                                                                                                                                            desc:"Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality!",
                                                                                                                                            expiry:"10 Days",
                                                                                                                                            egg:true,
                                                                                                                                            milk:true,
                                                                                                                                            drink:false,
                                                                                                                                            }, {
                                                                                                                                                name:"Lovely Fusion Meals",
                                                                                                                                                back:"../IMG/633-3874-l.jpg",
                                                                                                                                                votes:4,
                                                                                                                                                rating:4,
                                                                                                                                                discount:20,
                                                                                                                                                hotel:"Love Veggie" ,
                                                                                                                                                location: " Klang, Selangor",
                                                                                                                                                desc:"Enjoy a cozy dining experience where we pamper you with a variety of healthy, exquisite and natural foods.",
                                                                                                                                                expiry:"9 Days",
                                                                                                                                                egg:false,
                                                                                                                                                milk:true,
                                                                                                                                                drink:false,
                                                                                                                                                },
        ]
 places={60:"Kuala Lumpur",
        42:"Petaling Jaya",
          20: "Ampang",
          21: "Ara Damansara",
          22: "Bangsar",
          23: "Bangsar South",
          24: "Bukit Bintang",
          26: "Damansara",
          27: "Cheras",
          29: "Damansara Heights",
          30: "Damansara Perdana",
          31: "Damansara Utama",
          62: "Ipoh",
          33: "Kelana Jaya",
          34: "Kepong",
          35: "Klang",
          37: "Kota Damansara",
          39: "Mont Kiara",
          40: "Mutiara Damansara",
          41: "Old Klang Road",
          44: "Puchong",
          45: "Pudu",
          46: "Putrajaya",
          48: "Sepang",
          50: "Seri Kembangan",
          51: "Setapak",
          52: "Shah Alam",
          53: "Sri Hartamas",
          54: "Sri Petaling",
          55: "Subang",
          56: "Taman Desa",
          58: "Taman Tun",
}
var limit = Math.ceil(mockapi.length/10);
function createButton(){
    var span = document.createElement('span');
    span.setAttribute('class','inline');
    span.innerHTML="Page:"
    let cloneSpan = span.cloneNode(true);
    buttons1.appendChild(span);
    buttons2.appendChild(cloneSpan)
    for(i=0;i<limit;i++){
        let button = document.createElement('button');
        button.setAttribute('id',i);
        button.setAttribute('class','inline')
        button.innerHTML = i+1;
        button.onclick = createNums;
        let cloneBut = button.cloneNode(true);
        cloneBut.onclick = createNums;
        buttons1.append(button);
        buttons2.appendChild(cloneBut)
    }
    let button = document.createElement('button');
    button.setAttribute('id','next');
    button.setAttribute('class','inline');
    button.innerHTML="Next";
    button.onclick = next;
    let clone = button.cloneNode(true);
    clone.onclick= next;
    buttons1.appendChild(button);
    buttons2.appendChild(clone);
}
function next(){
   let data =  localStorage.getItem('val');
   let start = + data[0];
   let end = + data[2];
   start = start + 10;
   end += 10;
   addPosts(start,end);
 }
createButton()
function createNums(){
    localStorage.clear();
    let cur = event.target.id;
    let l = Number(cur);
    //console.log(l,a,cur)
    let a =0;
    for(let i=l-1;i<l+1;i++){
        if(i==l-1){
            start = Number(l+"0")
        }else{
            a=l;
            end = Number(l+"9")
        }
    }
     let vars = [start,end];
     localStorage.setItem('val',vars);
    addPosts(start,end);
}

function addPosts(start=0,end=9){
 body.innerHTML="";
 for(let i=start;i<=end;i++){
     createPost(i);
 }

}
function createPost(i){
    let egg = "";
    let milk = "";
    let wine = "";
    let estate = "";
    let mstate = "";
    let wstate = "";
    const starTotal = 5;  
    if(mockapi[i].egg==true){
        egg="https://www.kindmeal.my/images/icon_egg.png";
        estate="popuptext";
    }
    if(mockapi[i].milk==true){
       milk="https://www.kindmeal.my/images/icon_milk.png";
       mstate="popuptext";
    }
    if(mockapi[i].drink==true){
        wine="https://www.kindmeal.my/images/icon_alcohol.png";
        wstate="popuptext";
    }
    if(mockapi[i].egg==false){
        egg="https://www.kindmeal.my/images/icon_egg_disabled.png";
        estate="disabled";
    }
    if(mockapi[i].milk==false){
        milk="https://www.kindmeal.my/images/icon_milk_disabled.png";
        mstate="disabled";
    }
    if(mockapi[i].drink==false){
        wine="https://www.kindmeal.my/images/icon_alcohol_disabled.png";
        wstate="disabled";
    }
     var div = document.createElement('div');
     div.setAttribute('class','flex');
     div.innerHTML = ` <div onclick="newPage(${i})" id="imgs" style="background-image: url(${mockapi[i].back});">
     <div class="top-left"><h2 class="circle" style="color:rgb(70, 69, 69); margin-top:5px; text-align: center; font-size: 22px;">-${mockapi[i].discount}%</h2></div>
     <h2><span class="background">${mockapi[i].name}</span></h2>
 </div>
 <div class="padded" style="margin-bottom:2px;">
     <span class="inline"><p style="font-size: 18px; font-weight: 600; color: rgb(151, 151, 151);" class="inline">${mockapi[i].hotel}</p></span><pre class="inline"> - </pre><span class="lighter inline" style="font-size: 14px;">${mockapi[i].location}</span>
 </div>
<p class="padded" style="margin: 3px 3px 7px 3px;">${mockapi[i].desc}</p>
<button onclick="newPage(i)" class="inline post-buttons">Get FREE Coupon</button> <div class=star${i} style="display:inline-block;"><div class="stars-outer"><div class="stars-inner"></div></div></div><p class="inline" style="margin-left: 2%; font-size: 12px;">(15)</p>
<div class=" bordertop" style="margin-bottom: 0px;display: flex; flex-wrap: nowrap; padding: 0% 2%;margin-top: 10px;height: 55px;" >
     <div style="flex-direction: row;flex-grow: 1;width: 0%; padding-top: 10px;" class="borderright">
         <span class="selected icons popup"><img  class="scale" src=${egg} alt=""><span class=${estate} id="myPopup">Contains egg</span></span><span class="selected icons popup"><img class="scale" src=${milk} alt=""><span class=${mstate} id="myPopup1">Contains Dairy products<br/>(i.e milk,cheese)</span></span><span class="selected icons popup" ><img class="scale" src=${wine} alt=""><span class=${wstate} id="myPopup2">Contains Alcohol<br/>(i.e beer,wine,liqour)</span></span>
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
  const starPercentage = (mockapi[i].rating / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  document.querySelector(`.star${i} .stars-inner`).style.width = starPercentageRounded; 

}
window.onload =  addPosts();

document.getElementById('search').addEventListener('click',search);

function search(){
    let res = document.getElementById('searchs').value;
    let food = document.getElementById('option').value;
    let num = + document.getElementById('city').value;
    let loc = getLocation(num);
    console.log(location)
    body.innerHTML="";
    search_val = [];
    for(i in mockapi){
        var mock_location = (mockapi[i].location).split(',')
        if(mockapi[i].food == food && res.toLowerCase() == (mockapi[i].hotel).toLocaleLowerCase() && mock_location[0]==loc){
            search_val.push(i);
        }
        else if( mock_location[0]==loc && mockapi[i].food == food ){
          search_val.push(i);
        }
        else if(mock_location[0]==loc){
            createPost(i);
        }
        else if((mockapi[i].hotel).toLocaleLowerCase() == res.toLowerCase()){
            search_val.push(i);
        }
        else  if(mockapi[i].food == food){
            createPost(i);
        }
        else if(food==""&&num==""&&res==""){
            addPosts();
        }
    }
    console.log(search_val)
    if(search_val.length>0){
        body.innerHTML="";
        for(i of search_val){
            createPost(i);
        }
    }

}

function getLocation(num){
       return places[num];
}

function newPage(i){
    location.href = `http://127.0.0.1:5500/meals_ex.html?q=${i}`
}


