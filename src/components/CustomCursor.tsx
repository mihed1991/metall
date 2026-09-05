import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const targetRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    const target = targetRef.current
    const follower = followerRef.current
    if (!target || !follower) return

    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let followerX = pointerX
    let followerY = pointerY
    let frame = 0

    const move = (event: MouseEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY
      target.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`
      const interactive = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]')
      document.documentElement.dataset.cursorLabel = interactive?.dataset.cursor ?? ''
      const label = follower.querySelector('span')
      if (label) label.textContent = interactive?.dataset.cursor ?? ''
      target.classList.toggle('is-active', Boolean(interactive))
      follower.classList.toggle('is-active', Boolean(interactive))
    }

    const leave = () => document.documentElement.classList.add('cursor-hidden')
    const enter = () => document.documentElement.classList.remove('cursor-hidden')
    const animate = () => {
      followerX += (pointerX - followerX) * 0.14
      followerY += (pointerY - followerY) * 0.14
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    animate()

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className="cursor-target" ref={targetRef} aria-hidden="true"><span /></div>
      <div className="cursor-follower" ref={followerRef} aria-hidden="true"><span /></div>
    </>
  )
}
