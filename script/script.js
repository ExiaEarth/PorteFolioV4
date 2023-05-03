
let btn1 = document.getElementById("togg1");
let VisNoVisi = document.getElementById("divCv");

btn1.addEventListener("click", () => {
  if(getComputedStyle(VisNoVisi).display != "none"){
    VisNoVisi.style.display = "none";
  } else {
    VisNoVisi.style.display = "block";
  }
})


