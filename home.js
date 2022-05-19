// side bar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

// btn.onclick = function () {
//   sidebar.classList.toggle("active");
// };
// --------------------------------
// scroll to top
function scrollToTop() {
  window.scrollTo(0, 0);
}
// --------------------------------
let section = document.querySelector(".right-sk");
let bars = document.querySelectorAll(".bars");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 100) {
    console.log("reached section");
    bars.forEach((bar) => {
      bar.style.width = bar.dataset.width;
    });
  }
};
