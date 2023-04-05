// function switchColor(){
//     // let r=250;
//     // let g=250;
//     // let b=250;
//     // document.body.style.backgroundColor="rgb("+r+","+g+","+b+")"
//     document.body.style.backgroundColor=rgb(255, 255, 255)
// }

    // const tl=gsap.timeline();
    // tl.fronTo(".boitefront",{opacity:1},{opacity:0})
    const tl = gsap.timeline();

tl.from("boitefront",{duration:1,opacity:0,stagger:0.25,});
tl.to("boitefront",{duration:0.5,y:"20%",opacity:0,stagger});

const tlSid=gsap.timeline();
tlSid.from("")
