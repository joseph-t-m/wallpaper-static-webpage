const elToggle = document.querySelector("#toggle_footer");
const elContent = document.querySelector("#content_footer");

elToggle.addEventListener("click", () => {
  elContent.classList.toggle("is-hidden");
});
elContent.classList.toggle("is-hidden");


const elToggle1 = document.querySelector("#toggle_body");
const elContent1 = document.querySelector("#content_body");

elToggle1.addEventListener("click", () => {
  elContent1.classList.toggle("main");
});
elContent1.classList.toggle("main");


const elToggle2 = document.querySelector("#toggle_header");
const elContent2 = document.querySelector("#content_header");

elToggle2.addEventListener("click", () => {
  elContent2.classList.toggle("is-hidden");
});
elContent2.classList.toggle("is-hidden");



