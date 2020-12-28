
gsap.registerPlugin(ScrollTrigger)

gsap.to(".square", {

    scale: .6,
    duration: 1,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 80%",
        end: "top 30%",
        pin: ".square", //you can set this to true or give it the name of the value that needs to be pinned
        pinSpacing: true,
        scrub: 4, //if you make this a number, it smoothes it out
        toggleActions: "restart none none none",
        markers: true
    }
})




console.log('fuckkkk')


