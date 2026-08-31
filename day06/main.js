let ctx = gsap.context(() => {

  gsap.to(".box", {...}) // <- normal selector text, automatically scoped to myRefOrElement
  gsap.from(".circle", {...});

}, '.card'); // <- scope!!!