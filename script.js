let back = document.querySelector(".back-to-top");
let notf = document.querySelector(".notif");

addEventListener("scroll", function () {
  if (scrollY >= 1500){
    back.style.display = "block";
    notf.classList.add("hidden-to-visible");
  }else{
    back.style.display = "none";
  }
});

back.onclick = function (e) {
  if (e.target == this){
    scrollTo({
    top: 0,
    behavior: "smooth",
    });
    notf.style.display = "none";
  }
}
