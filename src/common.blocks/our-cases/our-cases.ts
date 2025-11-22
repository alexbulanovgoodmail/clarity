document.addEventListener('DOMContentLoaded', () => {
  document.fonts.ready.then(() => {
    window.gsap.set('#our-cases h2', { opacity: 1 })

    const splitedText = window.SplitText.create('#our-cases h2', {
      type: 'words',
    })

    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: '#our-cases',
        start: 'top 75%',
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
