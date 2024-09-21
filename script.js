var search = document.querySelector(".search");
var btn = document.querySelector(".btn");
var inputClass = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  inputClass.focus();
  inputClass.style.borderRadius = "10px 0 0 10px";
});
