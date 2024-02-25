"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./styles.module.scss";

const Loader = () => {
    return (<>
        <div className={styles.logoContainer}>
            <Logo height={100}/>
        </div>

    </>);
}

const Logo = ({height}) => {

  const SVGRef = useRef();
  const leftBracketRef = useRef();
  const rightBracketRef = useRef();
  const bigDRef = useRef();
  const dynamicLettersRef = useRef();
  const doodlesmithLettersRef = useRef();

  useGSAP(() => {
    
    const tl = gsap.timeline({ timeScale: 2 });
    
    tl.set([leftBracket, bigD, rightBracket], {opacity: 0})
      .to(leftBracket, {opacity: 1, duration: 1.5})
      .to(leftBracket, {fill: "orange"}, "-=.15")
      .to(bigD, {opacity: 1, duration: 1.5})
      .to(bigD, {fill: "orange"}, "-=.15")
      .to(rightBracket, {opacity: 1, duration: 1.5})
      .to(rightBracket, {fill: "orange"}, "-=.15")
      .from(rightBracket, {x: -123.5, duration: 2, ease: "back.out(1.4)", delay: 2})
      .fromTo(dynamicLetters, {opacity: 0}, {opacity: 1, duration: .45, stagger: .1, ease: "power1.in", fill: "orange"}, "<")
      .fromTo(doodlesmithLetters, {opacity: 0}, {opacity: 1, duration: .45, stagger: .1, ease: "power1.in", fill: "orange"}, "-=1.25")
      .to([bigD, dynamicLetters, doodlesmithLetters], {fill: "white", duration: 1}, "<")
      .to(".bracket", {fill: "white", opacity: .35, duration: 1});

    // Clean up
    return () => {
      tl.kill();
    };
  });


    return (
        <svg xmlns="http://www.w3.org/2000/svg" ref={SVGRef} className={styles.dynamicDoodlesmithLogoSVG} height={height}  version="1.1" viewBox="0 0 205.5 67.41">
    <g id="dynamic-doodlesmith-logo" transform="translate(-51.42 -84.49)">
      <path id="bracket-left" ref={leftBracketRef} className={styles.bracket} d="M75.9 151.2c-4.69-.1-8.38-1.1-11.09-3.1-2.7-2-4.05-5-4.05-9.1v-11.2c0-2.6-.82-4.4-2.45-5.5-1.58-1.1-3.88-1.7-6.89-1.7V115c3.01-.1 5.31-.6 6.89-1.7 1.63-1.1 2.45-2.9 2.45-5.4V96.58c0-4.08 1.4-7.11 4.2-9.09 2.81-1.99 6.45-2.98 10.94-2.98v5.5c-2.65.1-4.74.65-6.27 1.75-1.48 1.13-2.22 2.94-2.22 5.44v11c0 5.3-2.78 8.4-8.34 9.3v.5c5.56.9 8.34 4 8.34 9.3v11.3c0 2.5.74 4.2 2.22 5.3 1.48 1.1 3.57 1.7 6.27 1.8z" />
      <g id="words-group">
        <path id="D" ref={bigDRef} className={styles.bigDLetter} d="M75.57 141.7V95.92h12.6c3.29 0 5.77.92 7.44 2.76 1.67 1.82 2.5 4.52 2.5 8.02v21.4c0 4.3-.76 7.7-2.29 10.1-1.51 2.3-4.17 3.5-7.97 3.5zm9.21-8.1h1.59c1.68 0 2.52-.8 2.52-2.4v-23.7c0-1.5-.21-2.5-.62-2.9-.4-.4-1.22-.7-2.47-.7h-1.02z" />
        <g id="group-ynamic">
          <path ref={dynamicLettersRef} id="dynamic-y" className={styles.dynamicLetter} d="M101.9 120.4v-2.7h2.1c.3 0 .5-.1.5-.3v-.4l-2.9-17.86h4.2l1.2 13.46 1.4-13.46h4.2l-3.4 19.16c-.1.7-.3 1.3-.7 1.6-.3.3-.9.5-1.7.5z" />
          <path ref={dynamicLettersRef} id="dynamic-n" className={styles.dynamicLetter} d="M113.8 117.4V99.15h4.3v2.35c.2-.7.5-1.3.9-1.8.5-.49 1.1-.74 1.9-.74 1.3 0 2.2.38 2.7 1.14.6.8.9 1.9.9 3.2v14.1h-4.3v-13.6c0-.4-.1-.7-.2-1-.2-.3-.5-.5-.8-.5-.3 0-.6.1-.7.4-.2.2-.3.5-.3.8-.1.4-.1.8-.1 1.1v12.8z" />
          <path ref={dynamicLettersRef} id="dynamic-a" className={styles.dynamicLetter} d="M129.5 117.6c-1 0-1.8-.2-2.3-.7-.5-.5-.9-1.1-1.1-1.9-.2-.9-.3-1.8-.3-2.8 0-1.1.1-2.1.3-2.8.3-.7.7-1.2 1.2-1.7s1.3-.9 2.2-1.2l2.7-.9v-1.9c0-.9-.3-1.4-1-1.4-.6 0-.9.4-.9 1.2v1.1h-4.2v-.6c0-1.9.4-3.2 1.2-3.9.9-.75 2.2-1.13 4.1-1.13 1 0 1.9.17 2.6.52.8.34 1.4.81 1.9 1.51.4.7.6 1.5.6 2.5v13.9h-4.3v-2.2c-.2.8-.5 1.4-1 1.8-.5.4-1.1.6-1.7.6zm1.7-3.4c.4 0 .6-.1.7-.4.1-.3.2-.7.2-1v-5.1c-.6.3-1.1.6-1.4.9-.3.4-.5.9-.5 1.6v2.4c0 1.1.3 1.6 1 1.6z" />
          <path ref={dynamicLettersRef} id="dynamic-m" className={styles.dynamicLetter} d="M138.2 117.4V99.15h4.3v2.15c.2-.8.5-1.38 1-1.75.5-.39 1.1-.59 2-.59.7 0 1.4.17 1.9.51.5.33.9.73 1.1 1.33.3-.6.7-1.06 1.2-1.37.5-.31 1.1-.47 1.9-.47 1 0 1.8.22 2.3.65.6.49 1 1.09 1.2 1.79.2.8.3 1.7.3 2.7v13.3h-4.3V104c0-1.2-.3-1.8-.9-1.8-.3 0-.6.1-.8.4-.1.2-.2.4-.3.7-.1.3-.1.7-.1 1v13.1h-4.4V104c0-.4 0-.8-.1-1.1-.1-.4-.3-.6-.7-.6-.3 0-.6.1-.8.3l-.3.9c-.1.3-.1.7-.1 1v12.9z" />
          <path ref={dynamicLettersRef} id="dynamic-i" className={styles.dynamicLetter} d="M157.1 98.03v-3.62h4.3v3.62zm0 19.37V99.15h4.3v18.25z" />
          <path ref={dynamicLettersRef} id="dynamic-c" className={styles.dynamicLetter} d="M168.7 117.6c-2.1 0-3.5-.5-4.4-1.6-.9-1-1.3-2.5-1.3-4.6v-5.6c0-1.5.2-2.8.5-3.8s.9-1.8 1.7-2.28c.8-.5 1.9-.75 3.4-.75 1 0 1.9.18 2.7.53.8.34 1.4.9 1.9 1.6.5.7.7 1.5.7 2.5v2.8h-4.4v-2.6c0-.4-.1-.7-.2-1-.1-.3-.4-.5-.8-.5-.7 0-1.1.5-1.1 1.5v8.9c0 .4.1.7.3 1 .1.3.4.5.8.5.3 0 .6-.2.7-.5.2-.3.3-.6.3-1v-3.1h4.4v3.2c0 1-.2 1.9-.7 2.6-.5.7-1.1 1.3-1.8 1.6-.8.4-1.7.6-2.7.6z" />
        </g>
        <g id="group-oodlesmith">
          <path ref={doodlesmithLettersRef} id="doodlesmith-o1" className={styles.doodlesmithLetter} d="M107.5 142.3c-3.9 0-5.8-2-5.8-6v-7.8c0-1.9.5-3.3 1.5-4.4 1.1-1.1 2.5-1.7 4.3-1.7 1.8 0 3.2.6 4.3 1.7 1 1.1 1.5 2.5 1.5 4.4v7.8c0 4-1.9 6-5.8 6zm0-3.6c.4 0 .7-.1.8-.4.2-.3.3-.6.3-1.1v-9.5c0-1.1-.4-1.7-1.1-1.7-.7 0-1.1.6-1.1 1.7v9.5c0 .5.1.8.2 1.1.2.3.5.4.9.4z" />
          <path ref={doodlesmithLettersRef} id="doodlesmith-o2" className={styles.doodlesmithLetter} d="M120.7 142.3c-3.9 0-5.8-2-5.8-6v-7.8c0-1.9.5-3.3 1.5-4.4 1.1-1.1 2.5-1.7 4.3-1.7 1.8 0 3.2.6 4.3 1.7 1 1.1 1.5 2.5 1.5 4.4v7.8c0 4-1.9 6-5.8 6zm0-3.6c.4 0 .7-.1.8-.4.2-.3.3-.6.3-1.1v-9.5c0-1.1-.4-1.7-1.1-1.7-.7 0-1.1.6-1.1 1.7v9.5c0 .5.1.8.2 1.1.2.3.5.4.9.4z" />
          <path ref={doodlesmithLettersRef} id="doodlesmith-d" className={styles.doodlesmithLetter} d="M132.1 142.3c-.9 0-1.7-.2-2.2-.5-.5-.3-.9-.8-1.2-1.3-.2-.6-.4-1.3-.5-2.1-.1-.8-.1-1.6-.1-2.5v-8.5c0-1.5.3-2.7.8-3.6.5-.9 1.4-1.4 2.7-1.4.9 0 1.7.2 2.2.6.5.4.9 1 1.2 1.7v-5.4h4.7v22.8H135V140c-.3.7-.6 1.3-1.1 1.7-.4.4-1 .6-1.8.6zm1.7-3.6c.5 0 .8-.2.9-.6.2-.3.3-1 .3-1.9V128c0-.4-.1-.8-.3-1.3-.1-.5-.3-.7-.8-.7s-.9.2-1 .7c-.1.4-.2.8-.2 1.3v8.2c0 1.7.4 2.5 1.1 2.5z" />
          <path ref={doodlesmithLettersRef} id="doodlesmith-l" className={styles.doodlesmithLetter} d="M141.5 142.1v-22.8h4.7v22.8z" />
          <path ref={doodlesmithLettersRef} id="doodlesmith-e" className={styles.doodlesmithLetter} d="M153.5 142.3c-1.4 0-2.5-.3-3.3-.8-.8-.5-1.4-1.2-1.8-2.2-.3-1-.5-2.2-.5-3.5v-7.9c0-1.8.5-3.2 1.6-4.1 1-.9 2.4-1.4 4.3-1.4 3.7 0 5.6 1.8 5.6 5.5v1.4c0 1.7 0 2.9-.1 3.5h-6.7v4.8c.1.3.2.6.3.8.1.2.4.3.7.3.5 0 .9-.2 1-.6.1-.4.1-.9.1-1.6v-1.9h4.7v1.1c0 1.5-.2 2.7-.6 3.6-.3 1-.9 1.8-1.8 2.3-.9.5-2 .7-3.5.7zm-1-11.8h2.2v-2.6c0-.7-.1-1.2-.2-1.5-.2-.3-.5-.5-.8-.5-.4 0-.7.1-.9.4-.2.3-.3.9-.3 1.6z" />
          <path ref={doodlesmithLettersRef} id="doodlesmith-s" className={styles.doodlesmithLetter} d="M166.4 142.3c-3.9 0-5.8-1.9-5.8-5.8v-1.6h4.7v2.3c0 .5.1.8.2 1 .2.3.5.4.9.4.7 0 1-.5 1-1.5 0-.9-.2-1.5-.5-1.9-.4-.4-.8-.8-1.3-1.2l-2.5-1.9c-.8-.6-1.4-1.2-1.8-1.9-.4-.7-.6-1.7-.6-2.9 0-1.1.3-2 .8-2.7.5-.7 1.2-1.3 2.1-1.6.9-.4 1.8-.6 2.9-.6 3.7 0 5.6 1.9 5.6 5.7v.3h-4.8v-.7c0-.4-.1-.8-.2-1.1-.1-.4-.4-.6-.8-.6-.7 0-1 .4-1 1.1 0 .7.3 1.2.9 1.6l2.9 2.1c.9.7 1.6 1.4 2.2 2.3.6.9.9 2.1.9 3.6 0 1.8-.5 3.2-1.5 4.2-1.1.9-2.5 1.4-4.3 1.4z" />
          <path ref={doodlesmithLettersRef} id="doodlesmith-m" className={styles.doodlesmithLetter} d="M173.7 142.1v-19.5h4.5v2.3c.2-.8.6-1.4 1.1-1.8.5-.5 1.2-.7 2.2-.7.7 0 1.4.2 2 .6.5.3.9.8 1.1 1.4.4-.7.8-1.2 1.3-1.5.5-.3 1.1-.5 2-.5 1.1 0 2 .2 2.5.7.6.5 1 1.1 1.3 1.9.2.9.3 1.8.3 2.9v14.2h-4.6v-14.3c0-1.3-.3-1.9-1-1.9-.3 0-.6.1-.8.4-.1.2-.2.5-.3.8-.1.3-.2.7-.2 1v14h-4.6v-14.3c0-.4 0-.8-.1-1.2-.1-.4-.4-.6-.8-.6-.3 0-.6.1-.8.3-.2.3-.3.6-.4 1-.1.3-.1.7-.1 1.1v13.7z" />
          <path ref={doodlesmithLettersRef} id="doodlesmith-i" className={styles.doodlesmithLetter} d="M193.8 121.4v-3.8h4.6v3.8zm0 20.7v-19.5h4.6v19.5z" />
          <path ref={doodlesmithLettersRef} id="doodlesmith-t" className={styles.doodlesmithLetter} d="M204.3 142.3c-1.3 0-2.1-.3-2.6-.8-.4-.5-.6-1.3-.6-2.4v-12.2h-1.3v-3.5h1.3v-4.1h4.5v4.1h1.3v3.5h-1.3V138c0 .3.1.5.2.6.1.1.3.2.6.2h.5v3.2c-.1 0-.4.1-1 .2-.5.1-1.1.1-1.6.1z" />
          <path ref={doodlesmithLettersRef} id="doodlesmith-h" className={styles.doodlesmithLetter} d="M208.4 142.1v-22.8h4.8v5.3c.2-.7.6-1.3 1.1-1.6.5-.4 1.1-.6 1.8-.6 1.4 0 2.4.4 3 1.3.6.9.9 2 .9 3.4v15h-4.7v-14.7c0-.4-.1-.7-.3-1-.1-.3-.4-.4-.8-.4-.3 0-.6.1-.8.4-.1.3-.2.6-.2 1v14.7z" />
        </g>
      </g>
      <path ref={rightBracketRef} id="bracket-right" className={styles.bracket} d="M220.2 146.4c2.6-.1 4.7-.8 6.2-1.9 1.6-1.1 2.4-2.9 2.4-5.4v-11.2c0-5.3 2.8-8.5 8.4-9.5v-.4c-5.6-1-8.4-4.2-8.4-9.5V97.23c0-2.52-.8-4.33-2.3-5.41-1.5-1.13-3.6-1.73-6.3-1.77v-5.57c4.7.1 8.4 1.09 11.2 3.09 2.7 2.01 4.1 5.08 4.1 9.2v11.33c0 2.6.8 4.5 2.4 5.6 1.6 1.1 4 1.6 7 1.6v5.7c-3 .1-5.4.6-7 1.7-1.6 1.1-2.4 2.9-2.4 5.5v11.5c0 4.1-1.5 7.1-4.3 9.1-2.8 2.1-6.5 3.1-11 3.1z"/>
    </g>
  </svg>
    );
}

export default Loader;
