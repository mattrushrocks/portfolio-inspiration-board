import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6">
            Let's work <span className="text-primary italic">together</span>
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-md mx-auto mb-10">
            Have a project in mind? I'd love to hear about it. Drop me a line and let's create something great.
          </p>
          <a
            href="mailto:matthewrushforth12@gmail.com"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-body text-sm hover:opacity-90 transition-opacity"
          >
            Say Hello →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
