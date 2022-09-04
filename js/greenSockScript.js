gsap.to(".hscrollFromLeft", {
    translateX: "30%",
    scrollTrigger: {
        trigger: ".hscrollFromLeft",
        scrub: 1,
    }
});

gsap.to(".hscrollFromRight", {
    translateX: "-30%",
    scrollTrigger: {
        trigger: ".hscrollFromRight",
        scrub: 1,
    }
});
gsap.from('.logo', {
    duration: 1,
    delay: .4,
    opacity:0,
    x:-100,
});

gsap.from('.navlist', {
    duration: 1,
    delay: .4,
    opacity:0,
    y:100,
});
gsap.from('#about', {
    duration: 1,
    delay: .7,
    opacity:0,
    y:100,
    scrollTrigger: {
        trigger: '#about',
    }
});



gsap.from('#portfolio', {
    duration: 1,
    delay: .7,
    opacity:0,
    x:100,
    scrollTrigger: {
        trigger: '#portfolio',
    }
});
gsap.from('#contact', {
    duration: 1,
    delay: .7,
    opacity:0,
    x:-100,
    scrollTrigger: {
        trigger: '#contact',
    }
});


