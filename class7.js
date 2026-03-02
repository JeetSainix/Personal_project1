function page1Animation(){
let tl=gsap.timeline()
tl.from("nav h1,nav h4,nav button",{
    y:-10,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.2,
})
tl.from(".center-part1 h1",{
    x:-100,
    duration:0.5,
    opacity:0,
})
tl.from(".center-part1 p",{
    x:-100,
    duration:1,
    opacity:0,
})
tl.from(".center-part1 button",{
    opacity:0,
      duration:0.5,
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
},"-=1")
tl.from(".section1bottom img",{
    y:40,
    opacity:0,
    duration:0.5,
    delay:0.2,
    stagger:0.2,
})
}

let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2 .container",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 60%",
        // scrub:2,
    }
})
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5,

})
tl2.from(".elem.line1.left",{
    opacity:0,
    x:-300,
    duration:1,
},"a")
tl2.from(".elem.line1.right",{
    opacity:0,
    x:300,
    duration:1,
},"a")
tl2.from(".elem.line2.left",{
    opacity:0,
    x:-300,
    duration:1,
},"b")
tl2.from(".elem.line2.right",{
    opacity:0,
    x:300,
    duration:1,
},"b")
page1Animation()