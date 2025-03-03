// // gsap.from("#box",{
// //     x: 1000,
// //     duration:3,
// //     rotate:360,
// //     delay:0,
// //     backgroundColor: "green",
// //     borderRadius:"50%",
// //     scale:0.5,
// // })


// // gsap.from("#box",{
// //     y: 2000,
// //     duration:2,
// //     delay:3
    
// // })

// // gsap.to("#box3",{
// //     x: 3000,
// //     duration:5,
// // })



// // gsap.from("h1",{
// //     color: "red",
// //     duaration: 5,
// //     delay: 1,
// //     opacity: 0,
// //     x:-50,
// //     stagger: 1

// // })



// gsap.to("#box",{
//     x: 1500,
//     duaration: 1.5,
//     delay:1,
//     rotate: 360,
//     borderRadius:"50%",
//     // repeat:-1,
//     // yoyo:true
// })

// gsap.to("#box2",{
//     x:1500,
//     backgroundColor: "yellow",
//     rotate:360,
//     duaration:1.5,
//     delay:1.5,
//     yoyo: true
// })

// gsap.to("#box3", {
//     x: 1500,
//     rotate:360,
//     borderRadius: "50%",
//     duaration: 1.5,
//     delay: 3
// })



// var tl = gsap.timeline()

// tl.from("#navName",{
//     y: -30,
//     opacity:0,
//     duaration:0.2,
//     delay:0.2
// })

// tl.from("h4",{
//     x:-30,
//     opacity:0,
//     duaration:0.2,
//     stagger:0.1
// })

// tl.from("#paragraph",{
//     x:-20,
//     opacity:0,
//     duaration:0.5,
//     scale:0.3
// })




gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duaration:1,
    rotation:360,
    borderRadius:"50%"
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duaration:1,
    rotation:360,
    borderRadius:"50%",
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller: "body",
        markers:true,
        start: "top 60%",
        end: "top 20%",
        scrub: 2
    }
})

gsap.from("#page3 #box",{
    backgroundColor: "red",
    borderRadius:"50%",
    scrollTrigger: "#page3 #box",
    delay:1,
    duaration:2
})
