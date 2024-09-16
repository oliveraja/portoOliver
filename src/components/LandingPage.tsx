import { useState, useEffect } from "react";

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

  return (
    <div className="items-center justify-center h-screen p-10">
      <h1 className="font-bold text-[250px] text-white">O L I V E R</h1>
      <div className="flex items-center justify-center mt-10">
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
