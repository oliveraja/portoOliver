import { useState, useEffect } from "react";
import { gsap } from "gsap";
import '../css/LandingPage.css';

const typingWords = [
  "Hello World",
  "Web Developer",
  "Bachelor Computer Science",
  "IT Dev at CIMB Niaga"
];

const LandingPage = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = typingWords[wordIndex];
      if (isDeleting) {
        setCurrentWord(current.substring(0, charIndex - 1));
        setCharIndex((prevCharIndex) => prevCharIndex - 1);
      } else {
        setCurrentWord(current.substring(0, charIndex + 1));
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 300); //time pause
        setTypingSpeed(50); //time deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prevWordIndex) => (prevWordIndex + 1) % typingWords.length);
        setTypingSpeed(150); //time typing
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, typingSpeed, wordIndex]);

  // GSAP hover effect untuk si tittle
  useEffect(() => {
    const letters = document.querySelectorAll(".oliver-text span");

    letters.forEach(letter => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          duration: 0.3,
          webkitTextStrokeColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        });
      });

      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          duration: 0.5,
          webkitTextStrokeColor: "rgba(85, 85, 85, 0.5)" // ngebalikin ke warna awal
        });
      });
    });
  }, []);

  return (
    <div className="items-center justify-center h-screen p-5">
      <h1 className="oliver-text font-bold text-[300px]">
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>V</span>
        <span>E</span>
        <span>R</span>
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-max">
          <h1 className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl text-white font-bold">
            {currentWord}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
