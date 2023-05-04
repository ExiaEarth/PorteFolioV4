
// Animation de btn cv presentation

let btn = document.getElementById("togg1");
let VisNoVisi = document.getElementById("divCv");


btn.addEventListener("click", () => {
  if(getComputedStyle(VisNoVisi).display != "none"){
    VisNoVisi.style.display = "none";
  } else {
    VisNoVisi.style.display = "block";
  }
})


