import React, {useEffect, useRef} from 'react'

import '../../styles/Landing.test.css'
import smileIcon from '../../assets/smile.svg'







export default function Landing() {
  const headerRef = useRef();
  const containerRef = useRef();
  const sectionRef = useRef();

  function parallaxEffect() {
    const distance = window.scrollY;
    headerRef.current.style.transform = `translateY(${distance *
      1}px)`;
    containerRef.current.style.transform = `translateY(${distance * 0.3}px)`;
    setTimeout(() => {
      sectionRef.current.classList.add("animate-me");
    }, 400);
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxEffect)
  }, [])

  return (
    <div className='landing'>
      <header ref={headerRef}>
        <div class="container" ref={containerRef}>
          <img src={smileIcon} alt="" />
          <h3>Welcome</h3>
          <p>Scroll to see how cool i am!</p>
        </div>
      </header>

      <section class='above' ref={sectionRef}>
        <h3>Cool like you</h3>
      </section>
    </div>
  )
}




//Parallax js
// window.addEventListener("scroll", function() {
//   const distance = window.scrollY;
//   document.querySelector("header").style.transform = `translateY(${distance *
//     1}px)`;
//   document.querySelector(
//     ".container"
//   ).style.transform = `translateY(${distance * 0.3}px)`;
//   setTimeout(() => {
//     document.querySelector("section h3").classList.add("animate-me");
//   }, 400);
// });