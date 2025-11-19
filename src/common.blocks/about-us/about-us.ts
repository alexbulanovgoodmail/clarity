document.addEventListener('DOMContentLoaded', (event) => {
  document.fonts.ready.then(() => {
    window.gsap.set('#about-us p', { opacity: 1 })

    const splitedText = window.SplitText.create('#about-us p', {
      type: 'words',
    })

    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: '#about-us p',
        start: 'top 80%',
        end: 'top center',
        scrub: 1,
      },
    })

    tl.from(splitedText.words, {
      opacity: 0.1,
      duration: 0.2,
      ease: 'power1.out',
      stagger: 0.4,
    })
  })
})
