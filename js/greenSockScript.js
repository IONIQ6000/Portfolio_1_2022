gsap.to(".hscrollFromLeft", {
    translateX: "20%",
    scrollTrigger: {
        trigger: ".hscrollFromLeft",
        scrub: .5,
    }
});

gsap.to(".hscrollFromRight", {
    translateX: "-20%",
    scrollTrigger: {
        trigger: ".hscrollFromRight",
        scrub: .5,
    }
});


TweenMax.from('.header-1', .4,{
    delay: .1,
    opacity:0,
    y:80,

});
TweenMax.from('.header-2', .4,{
    delay: .4,
    opacity:0,
    x:80,
});
TweenMax.from('.header-3', .4,{
    delay: .4,
    opacity:0,
    x:-80,
});
TweenMax.from('.header-4', .4,{
    delay: .4,
    opacity:0,
    y:80,
});
TweenMax.from('.header-5', .4,{
    delay: .7,
    opacity:0,
    x:80,
});
TweenMax.from('.sub-header-1', .4,{
    delay: 1,
    opacity:0,
    x:80,
});

