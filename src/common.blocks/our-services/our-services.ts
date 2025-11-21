import Swiper from 'swiper'
import { Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
  document.fonts.ready.then(() => {
    window.gsap.set('#our-services h2', { opacity: 1 })

    const splitedText = window.SplitText.create('#our-services h2', {
      type: 'words',
    })

    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: '#our-services',
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

  new Swiper('#our-services .swiper', {
    effect: 'flip',
    spaceBetween: 16,
    modules: [Pagination, A11y],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      640: {
        spaceBetween: 16,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 24,
        slidesPerView: 3,
      },
    },
  })
})
