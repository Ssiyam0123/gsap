var initialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector("#string")


// string.addEventListener("mouseenter", function(dets){
//     console.log(dets)
//     console.log('enter')
// })

string.addEventListener("mousemove", function(dets){
// console.log(dets.y)
const path = `M 10 100 Q 500 ${dets.y} 990 100`

gsap.to("svg path",{
    attr: {d:path},
    duaration: 0.3,
    ease: "power3.out"

})
})




string.addEventListener("mouseleave", function(){
   gsap.to("svg path",{
    attr:{d:finalPath},
    duaration:0.3,
    ease: "elastic.out(1,0.2)"
   })
})




  