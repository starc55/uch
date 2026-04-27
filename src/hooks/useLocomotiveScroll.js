import { useEffect, useState } from "react";

function useLocomotiveScroll(containerRef) {
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    let isMounted = true;
    let locomotive;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (!containerRef.current || !isMounted) {
        return;
      }

      locomotive = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.075,
        multiplier: 0.9,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      setScrollInstance(locomotive);
      window.requestAnimationFrame(() => locomotive.update());
    };

    initScroll();

    const refresh = () => {
      locomotive?.update();
    };

    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      isMounted = false;
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      setScrollInstance(null);
      locomotive?.destroy();
    };
  }, [containerRef]);

  return scrollInstance;
}

export default useLocomotiveScroll;
