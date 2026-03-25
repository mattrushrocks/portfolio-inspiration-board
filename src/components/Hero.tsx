import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-foreground font-body text-sm group"
          >
            View Work
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>

        <motion.div
          className="relative h-[500px] lg:h-[600px] hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src={project1}
            alt="Project preview"
            width={360}
            height={270}
            className="absolute top-8 right-0 w-[360px] rounded-lg shadow-2xl"
            initial={{ y: 30, rotate: 3 }}
            animate={{ y: 0, rotate: 3 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.img
            src={project2}
            alt="Project preview"
            width={300}
            height={225}
            className="absolute bottom-12 left-0 w-[300px] rounded-lg shadow-2xl"
            initial={{ y: 30, rotate: -2 }}
            animate={{ y: 0, rotate: -2 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
