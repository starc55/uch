import { useEffect, useRef, useState } from "react";
import FloatingCallButton from "../components/FloatingCallButton";
import Navbar from "../components/Navbar";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";
import useMouseGlow from "../hooks/useMouseGlow";
import CapabilitiesSection from "../sections/CapabilitiesSection";
import ContactSection from "../sections/ContactSection";
import CoreSection from "../sections/CoreSection";
import DevelopersSection from "../sections/DevelopersSection";
import FooterSection from "../sections/FooterSection";
import HeroSection from "../sections/HeroSection";
import PortfolioSection from "../sections/PortfolioSection";
import ProcessSection from "../sections/ProcessSection";

const navigationItems = [
  "capabilities",
  "portfolio",
  "core",
  "developers",
  "process",
  "contact",
].map((id) => ({
  id,
}));

function HomePage() {
  const scrollContainerRef = useRef(null);
  const mousePosition = useMouseGlow();
  const locomotiveScroll = useLocomotiveScroll(scrollContainerRef);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (locomotiveScroll) {
      return undefined;
    }

    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 28);
    };

    handleWindowScroll();
    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [locomotiveScroll]);

  useEffect(() => {
    if (!locomotiveScroll) {
      return undefined;
    }

    const handleScroll = (args) => {
      setScrolled(args.scroll.y > 28);
    };

    locomotiveScroll.on("scroll", handleScroll);
    handleScroll({
      scroll: { y: locomotiveScroll.scroll?.instance?.scroll?.y ?? 0 },
    });
    window.requestAnimationFrame(() => locomotiveScroll.update());

    return () => {
      if (typeof locomotiveScroll.off === "function") {
        locomotiveScroll.off("scroll", handleScroll);
      }
    };
  }, [locomotiveScroll]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    if (locomotiveScroll) {
      locomotiveScroll.scrollTo(element, {
        offset: id === "hero" ? 0 : -96,
        duration: 950,
        disableLerp: false,
      });

      return;
    }

    const supportsEnhancedNavigation =
      window.matchMedia(
        "(min-width: 1024px) and (hover: hover) and (pointer: fine)"
      ).matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsEnhancedNavigation) {
      const offset = id === "hero" ? 0 : 96;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: Math.max(top, 0), behavior: "instant" });
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page-shell">
      <Navbar
        items={navigationItems}
        onNavigate={scrollTo}
        scrolled={scrolled}
      />
      <FloatingCallButton />

      <div ref={scrollContainerRef} data-scroll-container>
        <main>
          <div data-scroll-section>
            <HeroSection
              mousePosition={mousePosition}
              onPrimaryClick={() => scrollTo("contact")}
              onSecondaryClick={() => scrollTo("portfolio")}
            />
          </div>
          <div data-scroll-section>
            <CapabilitiesSection />
          </div>
          <div data-scroll-section>
            <PortfolioSection />
          </div>
          <div data-scroll-section>
            <CoreSection />
          </div>
          <div data-scroll-section>
            <DevelopersSection />
          </div>
          <div data-scroll-section>
            <ProcessSection />
          </div>
          <div data-scroll-section>
            <ContactSection />
          </div>
        </main>

        <div data-scroll-section>
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
