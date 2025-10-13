// src/hooks/useTypedText.js
import { useState, useEffect, useRef } from 'react';

export const useTypedText = (words, typeSpeed = 100, deleteSpeed = 50, delay = 1500) => {
  const [text, setText] = useState('');
  
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeoutId;

    const handleTyping = () => {
      const currentWord = words[wordIndex.current];
      let currentText = '';
      let nextSpeed = typeSpeed;

      if (isDeleting.current) {
        currentText = currentWord.substring(0, charIndex.current - 1);
        charIndex.current -= 1;
        nextSpeed = deleteSpeed;

        if (charIndex.current === 0) {
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }

      } else {
        currentText = currentWord.substring(0, charIndex.current + 1);
        charIndex.current += 1;
        nextSpeed = typeSpeed;

        if (charIndex.current === currentWord.length) {
          nextSpeed = delay; 
          isDeleting.current = true;
        }
      }

      setText(currentText);
      timeoutId = setTimeout(handleTyping, nextSpeed);
    };

    timeoutId = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(timeoutId);
    
  }, [words, typeSpeed, deleteSpeed, delay]);

  return text;
};