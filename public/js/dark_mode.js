var body = document.body;
var darkModeToggle = document.querySelector("#dark-mode-toggle");
var headerSubtitle = document.querySelector(".header__subtitle");
var moonIcon = document.querySelector(".ph-moon");
var sunIcon = document.querySelector(".ph-sun");
darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("body-dark-mode");
    headerSubtitle.classList.toggle("text-dark-mode");
    if (body.classList.contains("body-dark-mode")) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
    }
    else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline";
    }
});
