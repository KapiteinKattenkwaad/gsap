
gsap.registerPlugin(ScrollTrigger)

gsap.to(".square", {

    scale: .6,
    duration: 1,
    scrollTrigger: {
        trigger: ".square",
        start: "top 80%",
        end: "top 30%",
        scrub: true, //if you make this a number, it smoothes it out
        toggleActions: "restart none none none",
        markers: true
    }
})

gsap.to(".title", {
    x: 300,
    duration: .7,
    scrollTrigger: {
        trigger: ".title",
        start: "top 80%",
        end: "top 30%",
        scrub: 4,
        toggleActions: "restart none none none",
    
    }
})


console.log('fuckkkk')


