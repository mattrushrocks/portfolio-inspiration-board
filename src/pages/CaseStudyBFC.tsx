import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bfcHome from "@/assets/bfc-home.png";
import bfcAbout from "@/assets/bfc-about.png";
import bfcVolunteer from "@/assets/bfc-volunteer.png";
import bfcVolunteerForm from "@/assets/bfc-volunteer-form.png";
import bfcDonation from "@/assets/bfc-donation.png";
import bfcWireframeAbout from "@/assets/bfc-wireframe-about.png";
import bfcWireframeHome from "@/assets/bfc-wireframe-home.png";
import bfcSketches from "@/assets/bfc-sketches.png";
import bfcHero from "@/assets/bfc-hero.png";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseStudyBFC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center h-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Portfolio
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fade}>
            <p className="text-sm font-body text-primary tracking-widest uppercase mb-3">Case Study</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground leading-[0.95] mb-6">
              Bingham Family Clinic
            </h1>
            <p className="text-xl md:text-2xl font-body font-light text-muted-foreground max-w-2xl leading-relaxed">
              Designing clarity for patients caught between systems
            </p>
          </motion.div>

          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 flex flex-wrap gap-6 text-sm font-body text-muted-foreground">
            <div><span className="block text-foreground font-medium">Role</span>UX Designer & Project Manager</div>
            <div><span className="block text-foreground font-medium">Timeline</span>6 Weeks</div>
            <div><span className="block text-foreground font-medium">Tools</span>Figma, Framer</div>
            <div><span className="block text-foreground font-medium">Team</span>Designers & Developers</div>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <motion.section {...fade} className="pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <img src={bfcHero} alt="Bingham Family Clinic mobile designs" className="rounded-lg shadow-lg w-full" loading="lazy" />
        </div>
      </motion.section>

      {/* The Problem */}
      <Section title="The Problem">
        <p>Care exists — but it's hard to understand and even harder to access.</p>
        <p>
          Bingham Family Clinic serves a unique and often overlooked group: individuals who earn too much to qualify for state assistance, but not enough to afford health insurance. While the clinic provides critical care, their digital presence didn't clearly communicate who they serve or how to get help.
        </p>
        <p>
          This created friction for users who were already navigating a stressful and uncertain situation. The information was difficult to understand, trust was not immediately established, and next steps were unclear. On top of this, our team had just six weeks to design and launch a fully functional website.
        </p>
      </Section>

      {/* Approach */}
      <Section title="A mobile-first experience built for clarity, trust, and speed">
        <p>
          As both UX Designer and Project Manager, I led the design direction while coordinating closely with developers and stakeholders to move quickly without losing focus.
        </p>
        <p>
          We approached the project with a few key principles: prioritizing clarity over complexity, simplifying healthcare information into digestible and actionable content, and designing mobile-first to ensure accessibility for users likely navigating on their phones.
        </p>
        <p>
          I led the ideation and creation of the mobile experience, establishing the core structure and interaction patterns. From there, another designer translated these designs into desktop layouts, allowing us to move efficiently while maintaining consistency across breakpoints.
        </p>
        <p>
          We built and launched the site using Framer, working closely with developers to ensure the final product aligned with both user needs and technical constraints.
        </p>
      </Section>

      {/* Sketches — integrated with text */}
      <motion.section {...fade} className="py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">Early Sketches</h2>
          <p className="text-muted-foreground font-body font-light leading-relaxed text-base md:text-lg mb-6">
            I started by sketching out core page structures on paper, focusing on mobile layouts and content hierarchy before moving into digital tools.
          </p>
          <img src={bfcSketches} alt="Early wireframe sketches" className="rounded-lg shadow-md w-full max-w-md mx-auto" loading="lazy" />
        </div>
      </motion.section>

      {/* Wireframes — integrated with text */}
      <motion.section {...fade} className="py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">Wireframes</h2>
              <p className="text-muted-foreground font-body font-light leading-relaxed text-base md:text-lg">
                The sketches were translated into digital wireframes in Figma, refining layout, spacing, and user flow before applying visual design.
              </p>
            </div>
            <div className="flex gap-3">
              <img src={bfcWireframeHome} alt="Home wireframe" className="rounded-lg shadow-md w-28 md:w-32" loading="lazy" />
              <img src={bfcWireframeAbout} alt="About wireframe" className="rounded-lg shadow-md w-28 md:w-32" loading="lazy" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final Designs — integrated with text */}
      <motion.section {...fade} className="py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">Final Designs</h2>
          <p className="text-muted-foreground font-body font-light leading-relaxed text-base md:text-lg mb-6">
            The final mobile screens brought together clear hierarchy, accessible content, and a cohesive visual language that builds trust with the clinic's audience.
          </p>
          <div className="flex justify-center gap-3">
            <img src={bfcHome} alt="Home page" className="rounded-lg shadow-md w-32 md:w-36" loading="lazy" />
            <img src={bfcVolunteer} alt="Volunteer page" className="rounded-lg shadow-md w-32 md:w-36" loading="lazy" />
            <img src={bfcAbout} alt="About page" className="rounded-lg shadow-md w-32 md:w-36" loading="lazy" />
          </div>
        </div>
      </motion.section>

      {/* Outcome */}
      <Section title="From confusion to clarity in six weeks">
        <p>
          Within a tight timeline, we delivered a website that made the clinic's mission and services significantly easier to understand and access. The final product clearly communicates who the clinic serves, improves accessibility through a mobile-first approach, and provides users with a more intuitive path toward care.
        </p>
        <p>
          Beyond the product itself, the project strengthened collaboration across design, development, and stakeholders, allowing us to move quickly without losing alignment. It also established a foundation that the clinic can continue to build on as their needs evolve.
        </p>
      </Section>

      {/* My Role */}
      <Section title="Designing while leading">
        <p>
          In addition to leading UX design, I managed timelines, facilitated communication across the team, and worked directly with stakeholders to translate their needs into clear design decisions. I also collaborated closely with developers throughout the process to ensure feasibility and maintain momentum under a tight deadline.
        </p>
      </Section>

      {/* Process */}
      <Section title="Balancing speed with thoughtful design">
        <p>
          We began by aligning closely with the clinic to understand their audience, constraints, and goals. From there, I led mobile-first ideation, focusing on clarity, hierarchy, and accessibility. Once the core experience was established, we scaled the design into desktop formats and worked collaboratively to bring it to life in development, ultimately launching the site within six weeks.
        </p>
      </Section>

      {/* Reflection */}
      <Section title="What this project reinforced">
        <p>
          Working under a tight timeline pushed me to prioritize what mattered most. Mobile-first thinking helped create focus, while strong communication ensured the team stayed aligned across disciplines. The constraints didn't limit the work — they clarified it.
        </p>
        <p>
          This project also reinforced the importance of balancing design execution with leadership. I had to make quick decisions, advocate for users, and keep the team moving forward, all while ensuring the final experience remained thoughtful and effective.
        </p>
      </Section>

      {/* Back CTA */}
      <motion.section {...fade} className="py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-primary font-body text-sm group"
          >
            ← Back to all projects
          </button>
        </div>
      </motion.section>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section {...fade} className="py-12">
    <div className="max-w-3xl mx-auto px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">{title}</h2>
      <div className="space-y-4 text-muted-foreground font-body font-light leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </div>
  </motion.section>
);

export default CaseStudyBFC;
