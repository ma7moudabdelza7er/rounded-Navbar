let btn = document.querySelector(".navbar-btn");
let navbarWrapper = document.querySelector(".navbar-wrapper");
btn.addEventListener("click", function () {
    navbarWrapper.classList.toggle('change');
    // btn.classList.toggle('change');
})