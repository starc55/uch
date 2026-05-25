import { useEffect, useState } from "react";

const defaultPosition = { x: 0.74, y: 0.26 };
const pointerMotionQuery = "(hover: hover) and (pointer: fine)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function useMouseGlow() {
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    let frameId = 0;
    let nextPosition = defaultPosition;
    const pointerMedia = window.matchMedia(pointerMotionQuery);
    const reducedMotionMedia = window.matchMedia(reducedMotionQuery);

    const handlePointerMove = (event) => {
      nextPosition = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };

      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        setPosition(nextPosition);
      });
    };

    const updatePointerTracking = () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (pointerMedia.matches && !reducedMotionMedia.matches) {
        window.addEventListener("pointermove", handlePointerMove, {
          passive: true,
        });
        return;
      }

      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }

      setPosition(defaultPosition);
    };

    updatePointerTracking();
    pointerMedia.addEventListener("change", updatePointerTracking);
    reducedMotionMedia.addEventListener("change", updatePointerTracking);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      pointerMedia.removeEventListener("change", updatePointerTracking);
      reducedMotionMedia.removeEventListener("change", updatePointerTracking);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return position;
}

export default useMouseGlow;
