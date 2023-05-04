const tl = gsap.timeline();

tl.from(".letter",{duration:1,opacity:0,stagger:0.25,});
tl.to(".letter",{duration:0.5,y:"20%",opacity:0,stagger});

const tlSid=gsap.timeline();
tlSid.from("");