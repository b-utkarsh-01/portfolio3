import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./page/About";
import TargetCursor from "./components/TargetCursor";
import Galaxy from "./components/Galaxy";
import SplashCursor from "./components/SplashCursor";

const App = () => {
  return (
    <div className="App relative min-h-screen w-full overflow-hidden text-white">
      <Galaxy
        className="pointer-events-none absolute inset-0 z-0"
        trackGlobalMouse
        mouseInteraction
      />
      {/* <SplashCursor/> */}
      <div className="relative z-10">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <Navbar />
      <main className="py-4 px-4 sm:px-6 lg:px-12 xl:px-20">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      </div>
    </div>
  );
};

export default App;
