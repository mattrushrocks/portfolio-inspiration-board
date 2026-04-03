import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bridgeHero from "@/assets/bridge-hero.png";
import bridgeProtoLanding from "@/assets/bridge-proto-landing.png";
import bridgeProtoLobby from "@/assets/bridge-proto-lobby.png";
import bridgeProtoPaper from "@/assets/bridge-proto-paper.png";
import bridgeInsight from "@/assets/bridge-research-insight.png";
import bridgePatterns from "@/assets/bridge-patterns.png";
import bridgeTheory from "@/assets/bridge-theory-of-change.jpg";
import bridgeHmw from "@/assets/bridge-hmw.jpg";
import bridgeTestingPhoto from "@/assets/bridge-testing-photo.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseStudyBridge = () => {
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
              Bridge Civic Collaboration
            </h1>
            <p className="text-xl md:text-2xl font-body font-light text-muted-foreground max-w-2xl leading-relaxed">
              Designing for collaboration in a system built for conflict
            </p>
          </motion.div>

          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 flex flex-wrap gap-6 text-sm font-body text-muted-foreground">
            <div><span className="block text-foreground font-medium">Role</span>UX Designer & Researcher</div>
            <div><span className="block text-foreground font-medium">Tools</span>Figma, Research</div>
            <div><span className="block text-foreground font-medium">Focus</span>Civic Tech · Collaboration</div>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <motion.section {...fade} className="pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <img src={bridgeHero} alt="Bridge - Exploring Digital Interventions to Political Polarization" className="rounded-lg shadow-lg w-full" loading="lazy" />
        </div>
      </motion.section>

      {/* The Problem */}
      <Section title="The Problem">
        <p>
          Political polarization is no longer just about disagreement. It has become emotional, identity-driven, and reinforced by the systems where these interactions take place.
        </p>
        <p>
          Through research and interviews, we found that online environments reward speed, reaction, and conflict. These conditions make meaningful dialogue difficult and often push people to disengage entirely. At the same time, participants consistently expressed a desire for empathy, understanding, and more human conversation.
        </p>
        <p>
          The issue was not a lack of information. It was the structure of interaction itself.
        </p>
      </Section>

      {/* Research insight image */}
      <motion.section {...fade} className="py-4">
        <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-4">
          <img src={bridgeInsight} alt="Research insight - social media as driver of polarization" className="rounded-lg shadow-md w-64 md:w-80" loading="lazy" />
          <img src={bridgePatterns} alt="Connecting patterns from research" className="rounded-lg shadow-md w-64 md:w-80" loading="lazy" />
        </div>
      </motion.section>

      {/* The Shift */}
      <Section title="The Shift">
        <p>
          We reframed the problem from fixing disagreement to redesigning interaction.
        </p>
        <p>
          Instead of asking how to help people argue better, we asked how to create environments where people must work together.
        </p>
        <p>
          This shift moved our focus from individual beliefs to system-driven behavior.
        </p>
      </Section>

      {/* Theory of change */}
      <motion.section {...fade} className="py-4">
        <div className="max-w-3xl mx-auto px-6 md:px-12 flex justify-center">
          <img src={bridgeTheory} alt="Theory of change framework" className="rounded-lg shadow-md w-full max-w-2xl" loading="lazy" />
        </div>
      </motion.section>

      {/* The Concept */}
      <motion.section {...fade} className="py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">The Concept</h2>
              <div className="space-y-4 text-muted-foreground font-body font-light leading-relaxed text-base md:text-lg">
                <p>
                  We began with Pods, a gamified experience where participants worked in small groups to solve civic challenges using shared information.
                </p>
                <p>
                  Early testing revealed a critical flaw. The system introduced friction without clarity. Users were confused about their roles, how to progress, and how their input contributed to the group.
                </p>
                <p>
                  Rather than supporting collaboration, the experience disrupted it. This led to Bridge.
                </p>
                <p>
                  Bridge is a structured, role-based experience where participants collaborate to reach a shared decision. Each person holds unique information, making interdependence necessary. The system is intentionally designed to slow interaction, introduce meaningful friction, and require collaboration to succeed.
                </p>
                <p>
                  We also used AI to enhance our workflow, allowing us to rapidly translate our paper prototypes into a digital space. This freed up time to focus on refining the experience rather than rebuilding it from scratch.
                </p>
                <p className="italic text-foreground">
                  The principle is simple. If systems require collaboration, users collaborate.
                </p>
              </div>
            </div>
            <img src={bridgeHmw} alt="How Might We ideation board" className="rounded-lg w-full" loading="lazy" />
          </div>
        </div>
      </motion.section>
      <Section title="Testing">
        <p>
          We tested the experience across three iterations, moving from paper to digital prototypes.
        </p>
        <p>
          Participants naturally shifted away from debate and toward collaboration. They discussed tradeoffs, negotiated decisions, and engaged with perspectives they would not normally consider.
        </p>
        <p>
          However, behavior proved fragile. When usability broke down, so did collaboration. Confusion around instructions or system feedback pulled attention away from the group and back to the interface.
        </p>
        <p className="italic text-foreground">
          This reinforced a key insight. Clarity is what enables behavior change.
        </p>
      </Section>

      {/* All prototypes + testing photo in one row */}
      <motion.section {...fade} className="py-4">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-wrap justify-center items-center gap-4">
          <div className="w-36 md:w-44 flex-shrink-0 overflow-hidden rounded-lg">
            <img src={bridgeTestingPhoto} alt="User testing Bridge prototype" className="w-full scale-105" loading="lazy" />
          </div>
          <div className="w-36 md:w-44 flex-shrink-0 overflow-hidden rounded-lg">
            <img src={bridgeProtoPaper} alt="Paper prototype sketches" className="w-full scale-105" loading="lazy" />
          </div>
          <div className="w-36 md:w-44 flex-shrink-0 overflow-hidden rounded-lg">
            <img src={bridgeProtoLobby} alt="Digital prototype - lobby view" className="w-full scale-105" loading="lazy" />
          </div>
          <div className="w-36 md:w-44 flex-shrink-0 overflow-hidden rounded-lg">
            <img src={bridgeProtoLanding} alt="Digital prototype - landing page" className="w-full scale-105" loading="lazy" />
          </div>
        </div>
      </motion.section>

      {/* What Changed */}
      <Section title="What Changed">
        <p>
          This project challenged core UX assumptions. Design patterns that prioritize speed and simplicity can create shallow interaction. In this context, they actively contribute to the problem.
        </p>
        <p>
          We shifted toward deliberation over speed, structure over openness, and interaction quality over engagement. Instead of removing friction, we designed it with intention.
        </p>
      </Section>

      {/* Impact */}
      <Section title="Impact">
        <p>
          Bridge introduces a different model for civic interaction. It creates conditions where collaboration is required, not optional.
        </p>
        <p>
          In testing, participants demonstrated increased empathy, perspective-taking, and cooperative behavior. The experience showed strong potential to support more thoughtful dialogue and a greater sense of shared understanding.
        </p>
        <p className="italic text-foreground">
          It does not solve polarization. It changes how people engage within it.
        </p>
      </Section>

      {/* Reflection */}
      <Section title="Reflection">
        <p>
          This project expanded how I think about design. We were not designing a product. We were designing within a complex system shaped by behavior, identity, and environment.
        </p>
        <p>
          It reinforced that meaningful design is not always about making things easier. It is about making better interaction possible.
        </p>
        <p>
          For a deeper look at the research, process, and framework behind Bridge, you can{" "}
          <a
            href="/documents/Design_for_Impact_Bridge.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
          >
            view the full project document here
          </a>.
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

export default CaseStudyBridge;
