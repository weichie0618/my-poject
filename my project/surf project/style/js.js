let x = document.getElementById("start");
x.addEventListener("mouseover", mouse);
function mouse() {
  setTimeout(time, 500);
  function time() {
    x.innerHTML = "馬上報名";
    x.classList.toggle("scale");
  }
}
x.addEventListener("mouseout", function () {
  x.innerHTML = "現在開始";
  x.classList.toggle("scale");
});

let header = document.querySelector("header");
let a = header.querySelectorAll("a");

window.addEventListener("scroll", (e) => {
  console.log(e);
  if (window.pageYOffset != 0) {
    a.forEach((c) => (c.style = `color:white`));
    header.style = "background-color:#029e9e7c;";
  } else {
    header.style = "";
    a.forEach((c) => (c.style = ""));
  }
});
