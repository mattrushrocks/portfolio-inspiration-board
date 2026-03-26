import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import turnorderHero from "@/assets/turnorder-hero.png";
import turnorderEcosystem from "@/assets/turnorder-ecosystem.png";
import turnorderComponents from "@/assets/turnorder-components.png";
import turnorderHome from "@/assets/turnorder-home.png";
import turnorderDetail from "@/assets/turnorder-detail.png";
import turnorderAdd from "@/assets/turnorder-add.png";
import turnorderPodcast from "@/assets/turnorder-podcast.png";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
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

const CaseStudyTurnOrder = () => {
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
              Turn Order
            </h1>
            <p className="text-xl md:text-2xl font-body font-light text-muted-foreground max-w-2xl leading-relaxed">
              It's your turn, are you ready to play?
            </p>
          </motion.div>

          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 flex flex-wrap gap-6 text-sm font-body text-muted-foreground">
            <div><span className="block text-foreground font-medium">Role</span>UX Designer & Brand</div>
            <div><span className="block text-foreground font-medium">Tools</span>Figma, Branding</div>
            <div><span className="block text-foreground font-medium">Focus</span>Product · Ecosystem Design</div>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <motion.section {...fade} className="pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <img src={turnorderHero} alt="Turn Order — It's Your Turn, Are You Ready to Play?" className="rounded-lg shadow-lg w-full" loading="lazy" />
        </div>
      </motion.section>

      {/* Not everyone shows up the same way */}
      <Section title="Not everyone shows up to the table the same way">
        <p>
          As I started thinking about Turn Order, I realized the problem wasn't just about learning games. It was about how people enter them.
        </p>
        <p>
          Some players want quick answers in the middle of a game. Others want to sit down and really understand the systems. Some prefer listening, some prefer watching, and some just want to explore at their own pace. And a lot of people never get started at all because there isn't an easy way in.
        </p>
        <p>
          That shifted how I approached the project.
        </p>
        <p className="italic text-foreground">
          Instead of designing a single product, I started designing a system that could meet people wherever they already are.
        </p>
      </Section>

      {/* A brand that lives in different spaces */}
      <Section title="A brand that lives in different spaces">
        <p>
          Turn Order became less about one experience and more about creating multiple ways to engage.
        </p>
        <p>
          The app handles the moment when you are at the table and need help right now. The content breaks down games into something approachable. The podcast creates space for conversation and discovery. The mystery boxes bring that experience into the physical world.
        </p>
        <p>
          Each piece exists for a different reason, but they all connect back to the same goal. Helping people feel more comfortable stepping into games.
        </p>
      </Section>

      {/* Ecosystem image */}
      <motion.section {...fade} className="py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <img src={turnorderEcosystem} alt="Turn Order ecosystem — app, podcast, and merchandise" className="rounded-lg w-full object-contain" loading="lazy" />
        </div>
      </motion.section>

      {/* Mobile screens row */}
      <motion.section {...fade} className="py-4">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-wrap justify-center items-start gap-6">
          <img src={turnorderHome} alt="Turn Order — home screen" className="w-40 md:w-52 rounded-lg object-contain" loading="lazy" />
          <img src={turnorderDetail} alt="Turn Order — game detail screen" className="w-40 md:w-52 rounded-lg object-contain" loading="lazy" />
          <img src={turnorderAdd} alt="Turn Order — add game screen" className="w-40 md:w-52 rounded-lg object-contain" loading="lazy" />
        </div>
      </motion.section>

      {/* Letting people engage */}
      <Section title="Letting people engage on their own terms">
        <p>
          Not everyone wants the same level of involvement, and that is something I wanted the system to respect.
        </p>
        <p>
          Some people will open the app once and just use it when they need it. Some will follow the content and learn new games regularly. Some will listen, engage, and become part of the community.
        </p>
        <p>
          Turn Order is designed to support all of those paths without forcing users into one way of interacting.
        </p>
      </Section>

      {/* Components + Podcast row */}
      <motion.section {...fade} className="py-4">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex justify-center gap-6">
          <img src={turnorderComponents} alt="Turn Order — mobile UI components" className="rounded-lg shadow-md flex-1 max-w-sm object-contain" loading="lazy" />
          <img src={turnorderPodcast} alt="Turn Order — podcast management" className="rounded-lg shadow-md flex-1 max-w-sm object-contain" loading="lazy" />
        </div>
      </motion.section>

      {/* Making space */}
      <Section title="Making space for people to belong">
        <p>
          A lot of tabletop gaming can feel intimidating. Rules are complex, communities can feel closed off, and getting started often depends on already knowing someone.
        </p>
        <p>
          I wanted Turn Order to lower that barrier.
        </p>
        <p>
          By spreading the experience across different spaces, it creates more opportunities for people to find a way in that feels comfortable to them. Whether that is quickly scanning a game, listening to a podcast, or discovering something new through a physical product.
        </p>
      </Section>

      {/* More than a product */}
      <Section title="More than a product">
        <p>
          At a certain point, it stopped feeling like I was designing an app.
        </p>
        <p className="italic text-foreground">
          It felt like I was designing an entry point.
        </p>
        <p>
          Turn Order is not just about helping people learn games faster. It is about making it easier for people to show up, understand what is going on, and feel like they are part of it.
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

export default CaseStudyTurnOrder;
