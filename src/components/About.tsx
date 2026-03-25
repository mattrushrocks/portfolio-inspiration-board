import { motion } from "framer-motion";
import headshot from "@/assets/headshot.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-2">About</p>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-10">
            Who Is <span className="text-primary italic">Matt</span>?
          </h2>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground font-body font-light leading-relaxed flex-1"
          >
            <p>
              Matt is an Interaction Design student at Utah Valley University focused on creating intuitive, engaging digital experiences. He brings together research, design, and creativity to build websites that prioritize real user needs. Beyond design, he enjoys photography, gaming, and reading, always looking for new inspiration to bring into his work.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "Focus", value: "Interaction Design" },
                { label: "School", value: "Utah Valley University" },
                { label: "Tools", value: "Figma · Adobe CC" },
                { label: "Hobbies", value: "Photography · Gaming" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-foreground font-normal text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <img
              src={headshot}
              alt="Matt headshot"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
