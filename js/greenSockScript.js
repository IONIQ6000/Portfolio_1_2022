gsap.to(".hscrollFromLeft", {
    translateX: "35%",
    scrollTrigger: {
        trigger: ".hscrollFromLeft",
        scrub: 1,
    }
});

gsap.to(".hscrollFromRight", {
    translateX: "-35%",
    scrollTrigger: {
        trigger: ".hscrollFromRight",
        scrub: 1,
    }
});

gsap.from('.home-ani-1', {
    duration: 1.5,
    delay: .4,
    opacity: 0,
    x: -500,
});
gsap.from('.home-ani-2', {
    duration: 1.5,
    delay: .6,
    opacity: 0,
    x: -500,
});
gsap.from('.home-ani-3', {
    duration: 1.5,
    delay: .8,
    opacity: 0,
    x: -500,
});
gsap.from('.home-ani-4', {
    duration: 1.5,
    delay: 1,
    opacity: 0,
    x: -500,
});
gsap.from('.home-ani-5', {
    duration: 1.5,
    delay: 1.2,
    opacity: 0,
    x: -500,
});

gsap.from('.logo', {
    duration: 1,
    delay: 2,
    opacity: 0,
    x: -300,
});

gsap.from('.home-img', {
    duration: 1.7,
    delay: .4,
    opacity: 0,
    x: 500,
});

gsap.from('.navlist', {
    duration: 1,
    delay: 2,
    opacity: 0,
    x: 300,

});


gsap.from('.about-text', {
    duration: 1.5,
    delay: .6,
    opacity: 0,
    x: 300,
    scrollTrigger: {
        trigger: '#about',
    }
});
gsap.from('.about-img', {
    duration: 1.5,
    delay: .6,
    opacity: 0,
    x: -300,
    scrollTrigger: {
        trigger: '#about',
    }
});

gsap.from('#portfolio', {
    duration: 2,
    delay: .6,
    opacity: 0,
    scrollTrigger: {
        trigger: '#portfolio',
    }
});
gsap.from('#contact', {
    duration: 2,
    delay: .6,
    opacity: 0,
    scrollTrigger: {
        trigger: '#contact',
    }
});

gsap.from('.ends', {
    duration: 2,
    delay: .6,
    opacity: 0,
    scrollTrigger: {
        trigger: '.ends',
    }
});