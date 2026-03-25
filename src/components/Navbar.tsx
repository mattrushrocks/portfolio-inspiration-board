import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="font-heading text-xl text-foreground">
          Portfolio
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-body text-muted-foreground">
          {["work", "about", "contact"].map((s) => (
            <button key={s} onClick={() => scrollTo(s)} className="hover:text-foreground transition-colors capitalize">
              {s}
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="block w-6 h-0.5 bg-foreground origin-center" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-6 h-0.5 bg-foreground" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block w-6 h-0.5 bg-foreground origin-center" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {["work", "about", "contact"].map((s) => (
                <button key={s} onClick={() => scrollTo(s)} className="text-left text-lg font-heading text-foreground capitalize">
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
