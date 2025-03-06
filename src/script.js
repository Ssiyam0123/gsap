function page1Animation () {
    var tl = gsap.timeline()

tl.from("#navbar",{
    y:-300,
    duration: 0.2,
    delay: 0.25,
    opacity: 0,
    stagger: 0.15
})

tl.from("#center1 h1, p, button",{
    x: -500,
    opacity: 0,
    duration: 0.15,
    stagger: 0.15
})

tl.from("#center2 img",{
    opacity: 0,
    duration: 0.5,
})

tl.from("#section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
}

page1Animation()