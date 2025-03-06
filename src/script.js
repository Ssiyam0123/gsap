function page1Animation() {
  var tl = gsap.timeline();

  tl.from("#navbar", {
    y: -300,
    duration: 0.2,
    delay: 0.25,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from("#center1 h1, p, button", {
    x: -500,
    opacity: 0,
    duration: 0.15,
    stagger: 0.15,
  });

  tl.from("#center2 img", {
    opacity: 0,
    duration: 0.5,
  });

  tl.from("#section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}


function page2Animatin() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      scroller: "body",
      marker: true,
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from("#services", {
    y: 30,
    opacity: 0,
  });

  tl2.from(
    "#elem1",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "hello"
  );
  tl2.from(
    "#elem2",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "hello"
  );

  tl2.from(
    "#elem3",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "2ndhello"
  );

  tl2.from(
    "#elem4",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "2ndhello"
  );
}


page1Animation()
page2Animatin()