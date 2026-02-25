import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "./aboutData";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroBadge from "./hero/HeroBadge";
import HeroClock from "./hero/HeroClock";

const HeroSection = ({ appReady = true }) => {
  const heroRef = useRef(null);
  const shortSummary = profile.summary.split(".")[0] + ".";

  useEffect(() => {
    if (!appReady) return;
    const ctx = gsap.context(() => {
      gsap.to(".ut-logo-container", {
        y: -6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".hero-text-animate", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, [appReady]);

  return (

    <section
      ref={heroRef}
      className="relative no-cursor-target w-full overflow-hidden rounded-3xl bg-[#040b1d] py-10 px-4 sm:px-6"
    >
      <HeroBackground />
      <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-12 ">
        <HeroContent key={`hero-content-${appReady ? "ready" : "loading"}`} profile={profile} shortSummary={shortSummary}/>

        <div className="flex-shrink-0 flex flex-col items-center gap-3 lg:items-end">
          <HeroClock className="hidden lg:block mr-5" />
          <HeroBadge key={`hero-badge-${appReady ? "ready" : "loading"}`} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
