document.addEventListener('DOMContentLoaded', () => {
  document.fonts.ready.then(() => {
    window.gsap.set('#home-hero h1', { opacity: 1 })

    const splitedText = window.SplitText.create('#home-hero h1', {
      type: 'words',
    })

    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: '#home-hero',
        start: 'top center',
      },
    })

    tl.from(splitedText.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: 'expo.out',
      stagger: 0.02,
    })
  })
})
