const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
navbg.classList.toggle('active');
});

var typed = new Typed(".text", {
    strings: ["Graphics Design" , "Digital Marketing" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
