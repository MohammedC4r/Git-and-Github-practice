let back = document.querySelector(".back-to-top");

addEventListener("scroll", function () {
  if (scrollY >= 1500){
    back.style.display = "block";
  }else{
    back.style.display = "none";
  }
});

let notf = document.querySelector(".notif");
back.onclick = function (e) {
  if (e.target == this){
    scrollTo({
    top: 0,
    behavior: "smooth",
    });
    notf.style.display = "none";
  }
}
