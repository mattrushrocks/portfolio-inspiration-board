import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import bfcHero from "@/assets/bfc-hero.png";
import bridgeHero from "@/assets/bridge-hero.png";
import turnorderHero from "@/assets/turnorder-hero.png";

const projects = [
  { id: "01", title: "Bingham Family Clinic", category: "Web · Healthcare", image: bfcHero, link: "/case-study/bingham-family-clinic" },
  { id: "02", title: "Bridge Civic Collaboration", category: "Civic Tech · Research", image: bridgeHero, link: "/case-study/bridge" },
  { id: "03", title: "Turn Order", category: "Product · Ecosystem Design", image: turnorderHero, link: "/case-study/turn-order" },
  { id: "04", title: "Analytics Dashboard", category: "Web · SaaS", image: project3, link: "" },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-2">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground">Projects</h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onClick={() => p.link && navigate(p.link)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${p.link ? "cursor-pointer" : ""} ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} flex flex-col gap-3`}>
                <span className="text-sm font-body text-muted-foreground tracking-wider">{p.id} / {p.category}</span>
                <h3 className="text-3xl md:text-4xl font-heading text-foreground">{p.title}</h3>
                <p className="text-muted-foreground font-body font-light max-w-sm">
                  A meticulously crafted design project showcasing thoughtful solutions and pixel-perfect execution.
                </p>
                {p.link ? (
                  <button
                    onClick={() => navigate(p.link)}
                    className="inline-flex items-center gap-1 text-primary text-sm font-body mt-2 cursor-pointer group"
                  >
                    View project <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 text-muted-foreground text-sm font-body mt-2">
                    Coming soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
