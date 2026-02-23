import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-700/40 bg-slate-950/70 backdrop-blur">        
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-12">
          <a href="#top" className="text-base font-bold tracking-wide text-white">
            Utkarsh
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800/70"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-slate-200 transition-colors hover:bg-slate-800/70 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu overlay"
              onClick={closeMenu}
              className="absolute inset-0 bg-black/45"
            />
            <motion.aside
              className="absolute right-0 top-0 h-full w-72 max-w-[85vw] border-l border-slate-700 bg-slate-950 p-4 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.28 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-wide text-slate-100">
                  Navigation
                </span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-slate-200 transition-colors hover:bg-slate-800/70"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                className="flex flex-col gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800/70"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
