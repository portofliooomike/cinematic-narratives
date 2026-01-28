import { motion } from "framer-motion";
import Scene from "@/components/Scene";
import StoryText from "@/components/StoryText";
import VideoSection from "@/components/VideoSection";
import ScrollReveal from "@/components/ScrollReveal";

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
          <VideoSection youtubeId="Wf8zFLWBDr8" />

          <ScrollReveal delay={0.3} className="mt-24 max-w-2xl mx-auto">
            <p className="text-structure-title text-center mb-10">
              Honeymoon Experience
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="max-w-xl mx-auto text-center">
            <p className="text-story-large mb-6">Real moments.</p>
            <p className="text-story-large mb-12">Treated like cinema.</p>
            <p className="text-story-italic mt-16">Not to impress.</p>
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

      {/* CONTACT */}
      <Scene minHeight="70vh" className="py-28" variant="dark">
        <ScrollReveal className="text-center">
          <p className="text-structure-title mb-20">
            Available for creative & marketing collaborations
          </p>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center">
            <motion.a
              href="mailto:hello@mikenoriega.com"
              className="cinema-link text-structure-body"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Email
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cinema-link text-structure-body"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Instagram
            </motion.a>
            <motion.a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cinema-link text-structure-body"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Vimeo
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.2 }}
            className="text-structure-name mt-28"
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
