import { useEffect, useState } from "react";

const enhancedScrollQuery =
  "(min-width: 1024px) and (hover: hover) and (pointer: fine)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function useLocomotiveScroll(containerRef) {
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    let isMounted = true;
    let locomotive = null;
    let initializing = false;
    let refreshFrame = 0;
    const enhancedScrollMedia = window.matchMedia(enhancedScrollQuery);
    const reducedMotionMedia = window.matchMedia(reducedMotionQuery);

    const shouldUseEnhancedScroll = () =>
      enhancedScrollMedia.matches && !reducedMotionMedia.matches;

    const refresh = () => {
      if (!locomotive || refreshFrame) {
        return;
      }

      refreshFrame = window.requestAnimationFrame(() => {
        refreshFrame = 0;
        locomotive?.update();
      });
    };

    const destroyScroll = () => {
      if (refreshFrame) {
        window.cancelAnimationFrame(refreshFrame);
        refreshFrame = 0;
      }

      locomotive?.destroy();
      locomotive = null;
      document.documentElement.classList.remove("has-scroll-smooth");

      if (isMounted) {
        setScrollInstance(null);
      }
    };

    const initScroll = async () => {
      if (!shouldUseEnhancedScroll() || locomotive || initializing) {
        return;
      }

      initializing = true;

      try {
        const [{ default: LocomotiveScroll }] = await Promise.all([
          import("locomotive-scroll"),
          import("locomotive-scroll/dist/locomotive-scroll.css"),
        ]);

        if (
          !containerRef.current ||
          !isMounted ||
          !shouldUseEnhancedScroll() ||
          locomotive
        ) {
          return;
        }

        locomotive = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          lerp: 0.075,
          multiplier: 0.9,
          smartphone: {
            smooth: false,
          },
          tablet: {
            smooth: false,
          },
        });

        setScrollInstance(locomotive);
        refresh();
      } finally {
        initializing = false;
      }
    };

    const syncScrollMode = () => {
      if (shouldUseEnhancedScroll()) {
        initScroll();
        return;
      }

      destroyScroll();
    };

    syncScrollMode();
    enhancedScrollMedia.addEventListener("change", syncScrollMode);
    reducedMotionMedia.addEventListener("change", syncScrollMode);
    window.addEventListener("load", refresh, { once: true });
    window.addEventListener("resize", refresh, { passive: true });

    return () => {
      isMounted = false;
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      enhancedScrollMedia.removeEventListener("change", syncScrollMode);
      reducedMotionMedia.removeEventListener("change", syncScrollMode);

      if (refreshFrame) {
        window.cancelAnimationFrame(refreshFrame);
      }

      locomotive?.destroy();
    };
  }, [containerRef]);

  return scrollInstance;
}

export default useLocomotiveScroll;
