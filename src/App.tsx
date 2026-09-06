import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useLayoutEffect } from 'react'
import { CustomCursor } from './components/CustomCursor'
import { Navigation } from './components/Navigation'
import { Footer } from './sections/Contacts'
import { Engineering } from './sections/Engineering'
import { FAQ } from './sections/FAQ'
import { Hero } from './sections/Hero'
import { Intro } from './sections/Intro'
import { Process } from './sections/Process'
import { Quality } from './sections/Quality'
import { Quote } from './sections/Quote'
import { Services } from './sections/Services'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function App() {
  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    let animationFrame = 0
    const update = (time: number) => {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(update)
    }
    animationFrame = requestAnimationFrame(update)
    lenis.on('scroll', ScrollTrigger.update)
    const magneticCleanups: Array<() => void> = []

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.fromTo(element, { y: 34, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('.media-reveal').forEach((element) => {
        gsap.fromTo(element, { clipPath: 'inset(0 0 100% 0)' }, {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.15,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: element, start: 'top 84%', once: true },
        })
      })

      gsap.to('.hero-video', {
        scale: 1.08,
        yPercent: 4,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 },
      })

      gsap.to('.process-line > span', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.process-track', start: 'top 70%', end: 'bottom 45%', scrub: true },
      })

      gsap.utils.toArray<HTMLElement>('.magnetic').forEach((element) => {
        const move = (event: MouseEvent) => {
          const rect = element.getBoundingClientRect()
          gsap.to(element, {
            x: (event.clientX - rect.left - rect.width / 2) * 0.1,
            y: (event.clientY - rect.top - rect.height / 2) * 0.14,
            duration: 0.28,
            ease: 'power2.out',
          })
        }
        const reset = () => gsap.to(element, { x: 0, y: 0, duration: 0.45, ease: 'power3.out' })
        element.addEventListener('mousemove', move)
        element.addEventListener('mouseleave', reset)
        magneticCleanups.push(() => {
          element.removeEventListener('mousemove', move)
          element.removeEventListener('mouseleave', reset)
        })
      })
    })

    return () => {
      context.revert()
      magneticCleanups.forEach((cleanup) => cleanup())
      lenis.destroy()
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="site" data-styleseed-recipe="expressive-brand">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Engineering />
        <Process />
        <Quality />
        <Quote />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
