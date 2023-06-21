import { useEffect, useState } from 'react';

export const useWindowScrollPositions = () => {
  const [scrollPosition, setPosition] = useState(0);

  useEffect(() => {
    function updatePosition() {
      setPosition(Math.round(window.scrollY /window.innerHeight));
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};
