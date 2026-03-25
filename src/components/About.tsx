import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-2">About</p>
            <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
              Designer with a passion for <span className="text-primary italic">craft</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground font-body font-light leading-relaxed"
          >
            <p>
              With over 5 years of experience in product design, I specialize in creating digital experiences that are both beautiful and functional. My approach combines strategic thinking with meticulous visual craft.
            </p>
            <p>
              I've had the privilege of working with startups and established brands alike, helping them translate complex problems into intuitive, delightful interfaces.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "UI/UX Design", value: "Product Design" },
                { label: "Expertise", value: "Design Systems" },
                { label: "Tools", value: "Figma · Framer" },
                { label: "Based in", value: "San Francisco" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-foreground font-normal text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
