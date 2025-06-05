// Loader
const preloaderContainerDOM = document.getElementsByClassName("Loading-Page");
window.addEventListener("load", function () {
    document.querySelector(".Loading-Page").classList.add("loaded");
    document.querySelector(".Loading-Page1").classList.add("loaded");
    preloaderContainerDOM.style.display = "none";
});

