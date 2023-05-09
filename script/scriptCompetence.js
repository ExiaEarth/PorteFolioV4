let btn1= document.getElementById("btnFront");
let btn2= document.getElementById("btnEnd");
let btn3= document.getElementById("btnCompl");

let card1 = document.getElementById("cardFront");
let card2 = document.getElementById("cardFront");
let card3 = document.getElementById("cardFront");
let list=document.getElementById("containerlistcard")


btn1.addEventListener("click",()=>{
    if (getComputedStyle(card1).height !="10%") {
        card1.style.height = "90%";
        card1.style.display = "block";
        btn1.style.height ="10%"
        btn1.style.transform ="translateY(35rem)"
    } else {
        card1.style.height = "10%";
        card1.style.display ="non";
        btn1.style.height ="100%"
        btn1.style.transform ="translateY(2rem)"

    }
})