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

      {/* The Problem */}
      <Section title="Getting into games shouldn't feel like homework">
        <p>
          Tabletop games are growing fast, but getting into them is still harder than it should be.
        </p>
        <p>
          New players often face friction before they even start playing. Rulebooks are dense, learning is time-consuming, and onboarding depends heavily on someone else already knowing the game. Even experienced players struggle to remember rules or re-learn games after time away.
        </p>
        <p>
          At the same time, discovery is fragmented. Content lives across YouTube, forums, podcasts, and rulebooks, making it difficult to find what you need in the moment.
        </p>
        <p className="italic text-foreground">
          The barrier is not interest. It is access, clarity, and timing.
        </p>
      </Section>

      {/* The Concept */}
      <Section title="What if learning started the moment you saw the game">
        <p>
          Turn Order is a content-driven ecosystem designed to make tabletop games more accessible. It connects physical games to digital learning, allowing users to instantly access the information they need, when they need it.
        </p>
        <p>
          The goal was to create a system that supports players at every stage, from discovery to mastery, without overwhelming them.
        </p>
      </Section>

      {/* Scan it. Save it. Play it. */}
      <motion.section {...fade} className="py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">Scan it. Save it. Play it.</h2>
              <div className="space-y-4 text-muted-foreground font-body font-light leading-relaxed text-base md:text-lg">
                <p>
                  Turn Order is built around a simple interaction. Take a photo of a board game or TTRPG. It gets added to your personal library. From there, you instantly access curated content that helps you learn and play.
                </p>
                <p>The experience includes:</p>
                <ul className="space-y-2 ml-1">
                  <li>A collection app that tracks your games</li>
                  <li>Guided learning content that simplifies rules and onboarding</li>
                  <li>A podcast that builds community and discovery</li>
                  <li>Mystery box merchandise that extends the brand into physical space</li>
                </ul>
                <p className="italic text-foreground">
                  Instead of separating content, tools, and community, Turn Order brings them together into one system.
                </p>
              </div>
            </div>
            <img src={turnorderEcosystem} alt="Turn Order ecosystem — app, podcast, and merchandise" className="rounded-lg w-full object-contain" loading="lazy" />
          </div>
        </div>
      </motion.section>

      {/* Mobile screens row */}
      <motion.section {...fade} className="py-4">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex justify-center items-start gap-4">
          <div className="w-40 md:w-52 flex-shrink-0 overflow-hidden rounded-lg">
            <img src={turnorderHome} alt="Turn Order — home screen" className="w-full" loading="lazy" />
          </div>
          <div className="w-40 md:w-52 flex-shrink-0 overflow-hidden rounded-lg">
            <img src={turnorderDetail} alt="Turn Order — game detail screen" className="w-full" loading="lazy" />
          </div>
          <div className="w-40 md:w-52 flex-shrink-0 overflow-hidden rounded-lg">
            <img src={turnorderAdd} alt="Turn Order — add game screen" className="w-full" loading="lazy" />
          </div>
        </div>
      </motion.section>

      {/* Designed for the moment */}
      <Section title="Designed for the moment you need it">
        <p>
          The brand and product were designed to appeal to a wide audience, from beginners to experienced players.
        </p>
        <p>I focused on:</p>
        <ul className="space-y-2 ml-1">
          <li>Reducing cognitive load by breaking complex rules into digestible formats</li>
          <li>Designing for in-the-moment use, supporting players during gameplay</li>
          <li>Creating a cohesive brand system across digital, audio, and physical touchpoints</li>
          <li>Blending utility with identity to make the experience feel both helpful and culturally relevant</li>
        </ul>
        <p>
          The mobile experience acts as the entry point into the ecosystem and the core of interaction.
        </p>
      </Section>

      {/* Components + Podcast row */}
      <motion.section {...fade} className="py-4">
        <div className="max-w-3xl mx-auto px-6 md:px-12 flex justify-center gap-4">
          <img src={turnorderComponents} alt="Turn Order — mobile UI components" className="rounded-lg shadow-md w-64 md:w-80" loading="lazy" />
          <img src={turnorderPodcast} alt="Turn Order — podcast management" className="rounded-lg shadow-md w-64 md:w-80" loading="lazy" />
        </div>
      </motion.section>

      {/* More than an app */}
      <Section title="More than an app, a system">
        <p>
          Turn Order is not just a product. It is a connected experience. Each part of the system reinforces the others:
        </p>
        <ul className="space-y-2 ml-1">
          <li>The app drives content consumption</li>
          <li>Content builds trust and retention</li>
          <li>The podcast expands reach and community</li>
          <li>Physical products create tangible engagement</li>
        </ul>
        <p>
          This creates a loop where discovery leads to learning, learning leads to play, and play feeds back into the system.
        </p>
      </Section>

      {/* From confusion to play */}
      <Section title="From confusion to play">
        <p>
          Turn Order lowers the barrier to entry for tabletop games by making learning faster, easier, and more accessible. It shifts the experience from:
        </p>
        <ul className="space-y-2 ml-1">
          <li>Searching → to immediate access</li>
          <li>Confusion → to guided understanding</li>
          <li>Passive content → to active play</li>
        </ul>
        <p>
          By meeting users in the moment they need help, it supports both new and experienced players in a way traditional resources do not.
        </p>
      </Section>

      {/* Reflection */}
      <Section title="Designing for how people actually play">
        <p>
          This project pushed me to think beyond a single product and design at the level of a system and brand.
        </p>
        <p>
          I had to consider not just how users interact with an interface, but how they move between content, community, and physical experiences. It reinforced the importance of designing ecosystems, not just screens.
        </p>
        <p className="italic text-foreground">
          Turn Order is about more than learning games. It is about making it easier for people to play together.
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
