import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, 200); // Typing speed
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, 200); // Deleting speed
    } else if (index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
    } else if (index === 0 && isDeleting) {
      setIsDeleting(false);
      timeout = setTimeout(() => setIndex(0), 1000); // Pause before retyping
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <div className="typewriter">
      <h1 className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-purple-500">
        {displayedText}
      </h1>
    </div>
  );
};

export default Typewriter;
