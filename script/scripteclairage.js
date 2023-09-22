let btnCv= document.getElementById("togg1");
let btnClaire= document.getElementById("btnNav");
let btnSombre= document.getElementById("btnNav2");



function modeClair(color) { 
    document.body.style.background = color="white";
    document.body.style.color="black";
    btnCv.style.background=color="white";
    btnSombre.body.style.display="none";

    // document.body
}
function modeSombre(color) { 
    document.body.style.background = color="black";
    document.body.style.color="aquamarine";
    btnCv.style.background=color="black";
    btnClaire.body.style.display="none";
}