var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3200);
}

showSlides();

// popup1 javascript(signuppage)
document.getElementById('signupbtn').addEventListener('click', function () {
    document.querySelector('.big-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.big-modal').style.display = 'none'
})

// login page javascript
document.getElementById('loginbtn').addEventListener('click', function () {
    document.querySelector('.login').style.display = 'flex';
});
document.querySelector('.close1').addEventListener('click', function () {
    document.querySelector('.mylogin').style.display = 'none'
})