let btn1= document.getElementById("btnFront");
let btn1Close= document.getElementById("btnFrontClose");

let btn2= document.getElementById("btnEnd");
let btn2Close= document.getElementById("btnEndClose");

let btn3= document.getElementById("btnCompl");
let btn3Close= document.getElementById("btnComplClose");

let card1 = document.getElementById("cardFront");
let card2 = document.getElementById("cardEnd");
let card3 = document.getElementById("cardCompl");

let list1=document.getElementById("containerFront");
let list2=document.getElementById("containerEnd");
let list3=document.getElementById("containerCompl");


btn1.addEventListener("click",()=>{
    if (getComputedStyle(card1).height != "10%"  ) {
        card1.style.height = "90%";
        card1.style.display = "block";
        btn1.style.height ="10%";
        btn1Close.style.height ="10%";
        btn1Close.style.transform ="translateY(1rem)";
        btn1Close.style.display="block";
        btn1.style.display = "none";
        list1.style.display ="block"
    }
})
btn1Close.addEventListener("click",()=>{
    if (getComputedStyle(card1).height != "90%"  ) {
        card1.style.height = "10%";
        card1.style.display ="non";
        btn1.style.height ="100%";
        btn1.style.transform ="translateY(0.5rem)";
        btn1Close.style.height ="100%";
        btn1Close.style.display="none";
        btn1.style.display="block";
        list1.style.display="none"


    }
})

btn2.addEventListener("click",()=>{
    if (getComputedStyle(card2).height != "10%"  ) {
        card2.style.height = "90%";
        card2.style.display = "block";
        btn2.style.height ="10%";
        btn2Close.style.height ="10%";
        btn2Close.style.transform ="translateY(1rem)";
        btn2Close.style.display="block";
        btn2.style.display = "none";
        list2.style.display ="block"
    }
})
btn2Close.addEventListener("click",()=>{
    if (getComputedStyle(card2).height != "90%"  ) {
        card2.style.height = "10%";
        card2.style.display ="non";
        btn2.style.height ="100%";
        btn2.style.transform ="translateY(0.5rem)";
        btn2Close.style.height ="100%";
        btn2Close.style.display="none";
        btn2.style.display="block";
        list2.style.display="none";
    }
})
btn3.addEventListener("click",()=>{
    if (getComputedStyle(card3).height != "10%"  ) {
        card3.style.height = "90%";
        card3.style.display = "block";
        btn3.style.height ="10%";
        btn3Close.style.height ="10%";
        btn3Close.style.transform ="translateY(1rem)";
        btn3Close.style.display="block";
        btn3.style.display = "none";
        list3.style.display ="block"
    }
})
btn3Close.addEventListener("click",()=>{
    if (getComputedStyle(card3).height != "90%"  ) {
        card3.style.height = "10%";
        card3.style.display ="non";
        btn3.style.height ="100%";
        btn3.style.transform ="translateY(0.5rem)";
        btn3Close.style.display="none";
        btn3.style.display="block";
        list3.style.display="none"

    }
})