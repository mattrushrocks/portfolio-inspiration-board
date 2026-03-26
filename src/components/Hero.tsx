import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-[0.95] mb-6">
            I'm <span className="text-primary italic">Matt Rushforth</span>
          </h1>
          <p className="text-lg text-muted-foreground font-body font-light max-w-md leading-relaxed mb-8">
            Product Designer based in Provo Utah, currently studying at Utah Valley University and building user-centered digital experiences.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/documents/Matt_Rushforth_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground font-body text-sm group"
            >
              Resume
              <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-foreground font-body text-sm group"
            >
              View Work
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[400px] md:h-[500px] lg:h-[600px] hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src={project1}
            alt="Project preview"
            className="absolute top-8 right-0 w-[55%] max-w-[360px] rounded-lg shadow-2xl object-cover"
            initial={{ y: 30, rotate: 3 }}
            animate={{ y: 0, rotate: 3 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.img
            src={project2}
            alt="Project preview"
            className="absolute bottom-12 left-0 w-[45%] max-w-[300px] rounded-lg shadow-2xl object-cover"
            initial={{ y: 30, rotate: -2 }}
            animate={{ y: 0, rotate: -2 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
