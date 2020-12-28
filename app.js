
gsap.registerPlugin(ScrollTrigger)

gsap.to(".square", {

    scale: .6,
    duration: 1,
    scrollTrigger: {
        trigger: ".square",
        start: "top 20%",
        end: "top 50%",
        pin: ".square", //you can set this to true or give it the name of the value that needs to be pinned
        pinSpacing: true,
        scrub: 4, //if you make this a number, it smoothes it out
        toggleActions: "restart none none none",
        markers: true
    }
})

const tl = gsap.timeline({
    scrollTrigger: {

        trigger: ".box",
        start: "top 80%",
        end: "top 30%",
        scrub: 3, //if you make this a number, it smoothes it out
        markers: true
    }
});

tl
.to(".box", {
    x:500, 
    duration: 5
})
.to(".box", {
    y: 300,
    duration: 2
})
.to(".box", {
    x: 0,
    y: 0,
    duration: 3
})




console.log('fuckkkk')


