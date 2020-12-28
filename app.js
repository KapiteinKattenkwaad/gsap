
gsap.registerPlugin(ScrollTrigger)

gsap.to(".square", {
    x: 300,
    duration: 1,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end: () => `+=${document.querySelector('.square').offsetHeight}`, //this will get the end value dynamically from square element, even if its set to vh or something
        toggleClass: 'red',
        markers: true
    }
})


console.log('fuckkkk')


