AOS.init({
  duration: "1000",
});

// popup-card
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".popupp").style.display = "block";
    document.querySelector(".popupp").style.zIndex = "999";
    document.getElementsByClassName("bg_fxd")[0].style.zIndex = "9";
    document.querySelector("body").style.backgroundColor = "#404040";
    document.querySelector("body").style.opacity = "0.6";
    $(window).scrollTop(0);
  });
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".popupp").style.display = "none";
  document.getElementsByClassName("bg_fxd")[0].style.zIndex = "999";
  document.querySelector("body").style.backgroundColor = "transparent";
  document.querySelector("body").style.opacity = "1";
});

// hedaer 1
function open1() {
  document.getElementsByClassName("child")[0].style.display = "block";
  document.getElementsByClassName("child1")[0].style.display = "none";
  document.getElementsByClassName("bg_fxd")[0].style.zIndex = 9;
}

function open2() {
  document.getElementsByClassName("child1")[0].style.display = "block";
  document.getElementsByClassName("child")[0].style.display = "none";
  document.getElementsByClassName("bg_fxd")[0].style.zIndex = 9;
}

//go to top
let ProgressEventt = () => {
  let progresss = document.getElementById("progresss");
  let pos = document.documentElement.scrollTop;
  let positionnone = document.getElementsByClassName("bg_fxd")[0];
  let hight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollvaleee = Math.round((pos * 100) / hight);

  if (pos > 100) {
    progresss.style.display = "grid";
    positionnone.style.position = "absolute";
  } else {
    progresss.style.display = "none";
    positionnone.style.position = "fixed";
  }
  progresss.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  progresss.style.background = `conic-gradient(#e4007c ${scrollvaleee}% , white ${scrollvaleee}%)`;
};

window.onscroll = ProgressEventt;
window.onload = ProgressEventt;

// popup sider
function start() {
  setInterval(anim, 8000);
}
let countiue = setInterval(anim, 10000);
let a = 0;
function anim() {
  a = a + 10;
  if (a === 30) {
    clearInterval(countiue);
    document.getElementsByClassName("popup_none")[0].style.display = "none";
    start();
    a = 0;
  } else {
    document.getElementsByClassName("popup_none")[0].style.display = "block";
  }
}
document.querySelector("#closee").addEventListener("click", function () {
  document.getElementsByClassName("popup_none")[0].style.display = "none";
  start();
});
