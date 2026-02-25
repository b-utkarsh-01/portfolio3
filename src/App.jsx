import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./page/About";
import TargetCursor from "./components/TargetCursor";
import Galaxy from "./components/Galaxy";
import Preloader from "./components/Preloader";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [enableGalaxy, setEnableGalaxy] = useState(false);
  const [browserLoaded, setBrowserLoaded] = useState(document.readyState === "complete");
  const [galaxyReady, setGalaxyReady] = useState(false);
  const [appReady, setAppReady] = useState(false);

  const handleGalaxyReady = useCallback(() => {
    setGalaxyReady(true);
  }, []);

  useEffect(() => {
    const markLoaded = () => setBrowserLoaded(true);

    if (document.readyState === "complete") {
      markLoaded();
    } else {
      window.addEventListener("load", markLoaded, { once: true });
    }

    return () => {
      window.removeEventListener("load", markLoaded);
    };
  }, []);

  useEffect(() => {
    if (!browserLoaded) return;

    let idleId;
    let timeoutId;
    const mountGalaxy = () => setEnableGalaxy(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(mountGalaxy, { timeout: 1000 });
    } else {
      timeoutId = window.setTimeout(mountGalaxy, 100);
    }

    return () => {
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [browserLoaded]);

  useEffect(() => {
    if (!browserLoaded || !enableGalaxy) return;

    // Fallback for devices where WebGL may fail to report readiness.
    const fallbackId = window.setTimeout(() => {
      setGalaxyReady(true);
    }, 2200);

    return () => window.clearTimeout(fallbackId);
  }, [browserLoaded, enableGalaxy]);

  useEffect(() => {
    if (!browserLoaded || !galaxyReady) return;

    let hideTimer;
    setIsLoaded(true);
    hideTimer = window.setTimeout(() => {
      setShowPreloader(false);
      requestAnimationFrame(() => {
        setAppReady(true);
      });
    }, 420);

    return () => {
      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }
    };
  }, [browserLoaded, galaxyReady]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (showPreloader) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [showPreloader]);

  return (
    <div className="App relative min-h-screen w-full overflow-x-hidden text-white">
      {enableGalaxy ? (
        <Galaxy
          className="pointer-events-none absolute inset-0 z-0"
          trackGlobalMouse
          mouseInteraction
          onReady={handleGalaxyReady}
        />
      ) : null}
      <div className="relative z-10">
      {appReady ? (
        <TargetCursor
          targetSelector=".cursor-target, .rounded-2xl, .rounded-3xl, a, button"
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
      ) : null}
       
      <Navbar/>
      <main className="py-4 px-4 sm:px-6 lg:px-12 xl:px-20">
        <Routes>
          <Route path="/" element={<About appReady={appReady} />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
      </main>
      </div>
      {showPreloader ? <Preloader isLoaded={isLoaded} /> : null}
    </div>
  );
};

export default App;
