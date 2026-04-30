import React, { useState, useEffect } from "react";
import "../styles/Typewriter.css";

const words = ["esign", "evelop", "eploy"];
const finalWord = "UMinimum";

export default function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [finalLoop, setFinalLoop] = useState(false);
  const [done, setDone] = useState(false); // for hiding cursor

  useEffect(() => {
    let timeout;

    // Typing the final DUMINIMUM
    if (finalLoop) {
      if (charIndex < finalWord.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + finalWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 150); // typing speed
      } else {
        setDone(true); // finished typing final word → remove cursor
      }
      return () => clearTimeout(timeout);
    }

    const currentWord = words[wordIndex];

    if (typing) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, wordIndex === 0 ? 200 : 120);
      } else {
        timeout = setTimeout(() => setTyping(false), wordIndex === 0 ? 1200 : 600);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        if (wordIndex + 1 < words.length) {
          timeout = setTimeout(() => {
            setWordIndex((prev) => prev + 1);
            setTyping(true);
          }, 200);
        } else {
          // Start final DUMINIMUM
          timeout = setTimeout(() => {
            setDisplayText("");
            setCharIndex(0);
            setFinalLoop(true);
          }, 200);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, wordIndex, finalLoop]);

  return (
    <div className="typing-container">
      <span>D</span>
      <span className="dynamic-text">{displayText}</span>
      {!done && <span className="cursor">|</span>}
    </div>
  );
}