import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({ width: null, height: null });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}