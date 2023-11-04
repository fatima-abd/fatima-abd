

// const  changed = "welcome!"
// const h1 = document.querySelector("h1")


// h1.addEventListener('click', function() {

//     h1.textContent = changed;
//     h1.style.color = "red";  
// }) 


const btnNav = document.querySelector(".btn-mobile-nav");
const headerNav = document.querySelector(".header-content");

btnNav.addEventListener("click", function() {

    headerNav.classList.toggle("nav-open");
});