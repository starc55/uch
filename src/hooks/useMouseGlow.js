import { useEffect, useState } from 'react';

const defaultPosition = { x: 0.74, y: 0.26 };

function useMouseGlow() {
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return position;
}

export default useMouseGlow;
