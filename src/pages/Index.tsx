import { motion } from "framer-motion";
import Scene from "@/components/Scene";
import StoryText from "@/components/StoryText";
import VideoSection from "@/components/VideoSection";
import ScrollReveal from "@/components/ScrollReveal";
import barcelonaWeddingLogo from "@/assets/barcelona-wedding-logo.png";

const Index = () => {
  return (
    <main className="bg-background">
      {/* OPENING — STORYTELLING INTRO */}
      <Scene className="relative" variant="dark">
        <StoryText
          lines={[
            "Every story starts before the first image.",
            "With an intention.",
          ]}
          staggerDelay={0.6}
        />
      </Scene>

      {/* HERO — IDENTITY */}
      <Scene minHeight="auto" className="py-28 md:py-40" variant="subtle">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <VideoSection youtubeId="ka-2BaOtXD0" />

          <ScrollReveal delay={0.4} className="mt-20 text-center">
            <p className="text-structure-title mb-8">
              Cinematic storytelling for brands & experiences
            </p>
            <p className="text-structure-body mb-16">
              Concept · Direction · AI Production
            </p>
            <p className="text-structure-name">Mike Noriega</p>
          </ScrollReveal>
        </div>
      </Scene>

      {/* NEW SECTION — ETERNAL FRAMES */}
      <Scene minHeight="auto" className="py-28 md:py-40" variant="dark">
        <div className="w-full max-w-3xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-structure-title mb-4">ETERNAL FRAMES</p>
            <p className="text-story-italic mb-12">Building Cinema for Everyone</p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-structure-body leading-relaxed mb-16 max-w-2xl mx-auto">
              Eternal Frames uses AI to create cinematic experiences for weddings, 
              honeymoons, and memories that couldn't be recorded. Every project is 
              built from scratch—personalized narratives, cinematic aesthetics, 
              emotional intention.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="flex flex-col items-center gap-4">
              <motion.a
                href="https://barcelonawedding.com/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 px-8 py-5 rounded-2xl cursor-pointer inline-block"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1), 0 8px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <img 
                  src={barcelonaWeddingLogo} 
                  alt="Barcelona Wedding" 
                  className="h-10 md:h-12 w-auto"
                />
              </motion.a>
              <p className="text-xs tracking-[0.15em] uppercase" style={{ color: 'hsl(30 5% 45%)' }}>
                Trusted by Barcelona's premium wedding planners
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Scene>

      {/* TRANSITION — STORYTELLING TEXT (Light background) */}
      <Scene variant="light">
        <StoryText
          lines={[
            "Images don't matter",
            "unless they mean something.",
          ]}
          staggerDelay={0.5}
          variant="light"
        />
      </Scene>

      {/* FEATURED EXPERIENCE — HONEYMOON FILMS */}
      <Scene minHeight="auto" className="py-28 md:py-40" variant="dark">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-8 text-center">
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: 'hsl(30 5% 50%)' }}>
              HONEYMOON EXPERIENCE
            </p>
          </ScrollReveal>

          <VideoSection youtubeId="Wf8zFLWBDr8" />

          <ScrollReveal delay={0.5} className="mt-24 max-w-xl mx-auto text-center">
            <p className="text-story-large mb-6">Real moments.</p>
            <p className="text-story-large mb-12">Treated like cinema.</p>
            <p className="text-story-italic mt-12">Not to impress.</p>
            <p className="text-story-italic">To remember.</p>
          </ScrollReveal>
        </div>
      </Scene>

      {/* TRANSITION — STORYTELLING TEXT */}
      <Scene variant="light-subtle">
        <StoryText
          lines={[
            "Storytelling",
            "is not a format.",
            "",
            "It's a way of seeing.",
          ]}
          staggerDelay={0.5}
          variant="light"
        />
      </Scene>

      {/* CREATIVE APPLICATION — WEDDING INVITATIONS */}
      <Scene minHeight="auto" className="py-28 md:py-40" variant="subtle">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-8 text-center">
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: 'hsl(30 5% 50%)' }}>
              WEDDING INVITATIONS
            </p>
          </ScrollReveal>

          <VideoSection youtubeId="buMCM4uJwyw" />

          <ScrollReveal delay={0.4} className="mt-24 max-w-xl mx-auto text-center">
            <p className="text-story-large mb-6">Even the smallest details</p>
            <p className="text-story-large">can carry emotion.</p>
          </ScrollReveal>
        </div>
      </Scene>

      {/* TRANSITION — STORYTELLING TEXT */}
      <Scene minHeight="70vh" variant="light">
        <StoryText
          lines={[
            "And sometimes,",
            "it leaves the screen.",
          ]}
          staggerDelay={0.5}
          variant="light"
        />
      </Scene>

      {/* REAL CLIENT PROJECT */}
      <Scene minHeight="auto" className="py-28 md:py-40" variant="dark">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-structure-title">
              Client Project — Gual & Gorka
            </p>
          </ScrollReveal>

          <VideoSection youtubeId="Tja0eNtZJXA" />

          <ScrollReveal delay={0.5} className="mt-24 max-w-xl mx-auto text-center">
            <p className="text-story-large mb-6">A real project.</p>
            <p className="text-story-large mb-12">For real people.</p>
            <p className="text-story-italic mt-12">Quiet. Honest.</p>
          </ScrollReveal>
        </div>
      </Scene>

      {/* EPILOGUE — AUTHOR'S NOTE */}
      <Scene variant="light-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <StoryText
            lines={[
              "I care about rhythm.",
              "About intention.",
              "About every detail.",
              "",
              "Because stories deserve it.",
            ]}
            staggerDelay={0.6}
            variant="light"
          />
        </div>
      </Scene>

      {/* NEW SECTION — ABOUT */}
      <Scene minHeight="auto" className="py-28 md:py-40" variant="light">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <p className="text-structure-body leading-relaxed mb-8 text-story-dark">
              I'm someone who executes, not just ideates.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-structure-body leading-relaxed mb-8 text-story-dark opacity-80">
              Building Eternal Frames taught me that great creative work comes from 
              relentless iteration and caring about the smallest details. That learning 
              fast matters more than knowing everything. That creativity is a tool for 
              solving problems—emotional, strategic, human problems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-structure-body leading-relaxed text-story-dark opacity-80">
              I care about intention over aesthetics. Impact over impressions. 
              Work that people return to, not just scroll past.
            </p>
          </ScrollReveal>
        </div>
      </Scene>

      {/* CONTACT */}
      <Scene minHeight="70vh" className="py-28" variant="dark">
        <ScrollReveal className="text-center">
          <p className="text-structure-title mb-16">
            I'M OPEN TO NEW OPPORTUNITIES.
          </p>

          <p className="text-story-large mb-12">Let's talk.</p>

          <motion.a
            href="mailto:mikenoriegachaves@gmail.com"
            className="cinema-link text-structure-body inline-block mb-28"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            mikenoriegachaves@gmail.com
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.2 }}
            className="text-structure-name"
          >
            Mike Noriega
          </motion.p>
        </ScrollReveal>
      </Scene>

      {/* Final fade */}
      <div className="h-24 bg-cinema-charcoal" />
    </main>
  );
};

export default Index;
