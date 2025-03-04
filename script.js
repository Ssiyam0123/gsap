gsap.to("#exmp h1", {
    x: "-150vw", // Moves text fully off-screen
    scrollTrigger: {
      trigger: "#page2", // Animation starts when scrolling to #page2
      scroller: "body",
      start: "top bottom", // Starts when #page2 is at bottom of viewport
      end: "top 50%", // Ends when #page2 reaches 50% of viewport
      scrub: 2, // Smooth animation
      markers: true, // Debug markers (remove in production)
    },
  });
  