var tl = gsap.timeline({
    scrollTrigger:
    {
        trigger: "#main",
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
