function pageOneAnimation(){
    var tl = gsap.timeline({
        scrollTrigger:
        {
            trigger: "#page1",
            start: "top top",
            scrub: 1,
            pin: true,
        }
    })
    tl.to("#center #bottum img",
    {
        scale : .4,
        rotate: "-180deg",
        stagger: .1,
        ease: Power1,
    },"same")
    
    tl.to("#center #top img",
    {
        scale : .4,
        stagger: .1,
        ease: Power1,
    },"same")
    tl.from("#pcircle",
    {
        top : "105%",
        scale : .2,
        ease: Power1,
    },"same")
    tl.to("#centerimage h5",
    {
        opacity : 0,
        duration : .2,
        ease: Power1,
    },"same")
    tl.to("#centerimage img",
    {
        scale : 0,
        ease: Power1,
    },"same")
    tl.to("#page1>h1",
    {
        top : "100%",
        opaciy : 0,
        ease: Power1,
    },"same")
    tl.from("#pinkflare",
    {
        top : "105%",
    
        rotate : "10deg",
        ease: Power1,
    })
    tl.to("#pcircle",
    {
        opacity : 0,
        duration : .2,
        ease: Power1,
    },"alpha")
    tl.to("#center",
    {
        scale : 0,
        ease: Power1,
    },"alpha")
    tl.to("#info",
    {
      top : "0%",
      duration : 1,
    }, "alpha")
    tl.to("#info",
    {
      top : "-100%",
      duration : 2,
    })
}
function pageTwoAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger:
        {
            trigger: "#page2",
            start : "top : top",
            scrub : true,
            pin : true,
        }
    })
    
    tl2.to("#sectionA #cB",
    {
        top : "50%",
        duration : 2,
        scale : 1,
    },"beta")
    tl2.to("#sectionA #cA",
    {
        top : "50%",
        duration : 3,
        scale : 1
    },"beta")
    tl2.to(".Ac",
    {
        left : "50%",
    },"gama")
    .to(".Ac",
    {
        scale : .8,
    })
    .to(".Ac",
    {
        scale : 7,
        duration : 3,
    })
    .to("#sectionA>h1",
    {
        left : "-150%",
        duration : 10,
    },"delta")
    .to("#sectionA #cB",
    {
        delay : -8,
        duration : 4,
        background: `linear-gradient(to right,#D5A7B4,#6a59a3)`,
    })
    .to("#wistful",
    {
        opacity : 0,
        duration : 5,
        delay : 2,
    },"delta")
    .to("#magenta",
    {
        opacity : 1,
        duration : 5,
        delay : 8,
    },"delta")
}
pageOneAnimation();
pageTwoAnimation();


