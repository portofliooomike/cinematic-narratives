import { motion } from "framer-motion";
import Scene from "@/components/Scene";
import StoryText from "@/components/StoryText";
import VideoSection from "@/components/VideoSection";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main className="bg-background">
      {/* OPENING — STORYTELLING INTRO */}
      <Scene className="relative">
        <StoryText
          lines={[
            "Every story starts before the first image.",
            "With an intention.",
          ]}
          staggerDelay={0.5}
        />
      </Scene>

      {/* HERO — IDENTITY */}
      <Scene minHeight="auto" className="py-24 md:py-32">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <VideoSection youtubeId="ka-2BaOtXD0" />
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mt-16 text-center">
            <p className="text-structure-title mb-6">
              Cinematic storytelling for brands & experiences
            </p>
            <p className="text-structure-body mb-12">
              Concept · Direction · AI Production
            </p>
            <p className="text-structure-name">Mike Noriega</p>
          </ScrollReveal>
        </div>
      </Scene>

      {/* TRANSITION — STORYTELLING TEXT */}
      <Scene>
        <StoryText
          lines={[
            "Images don't matter",
            "unless they mean something.",
          ]}
          staggerDelay={0.4}
        />
      </Scene>

      {/* FEATURED EXPERIENCE — HONEYMOON FILMS */}
      <Scene minHeight="auto" className="py-24 md:py-32">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <VideoSection youtubeId="Wf8zFLWBDr8" />
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="mt-20 max-w-2xl mx-auto">
            <p className="text-structure-title text-center mb-8">
              Honeymoon Experience
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="max-w-xl mx-auto text-center">
            <p className="text-story-large mb-4">Real moments.</p>
            <p className="text-story-large mb-8">Treated like cinema.</p>
            <p className="text-story-italic mt-12">Not to impress.</p>
            <p className="text-story-italic">To remember.</p>
          </ScrollReveal>
        </div>
      </Scene>

      {/* TRANSITION — STORYTELLING TEXT */}
      <Scene>
        <StoryText
          lines={[
            "Storytelling",
            "is not a format.",
            "",
            "It's a way of seeing.",
          ]}
          staggerDelay={0.4}
        />
      </Scene>

      {/* CREATIVE APPLICATION — WEDDING INVITATIONS */}
      <Scene minHeight="auto" className="py-24 md:py-32">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <VideoSection youtubeId="buMCM4uJwyw" />
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mt-20 max-w-xl mx-auto text-center">
            <p className="text-story-large mb-4">Even the smallest details</p>
            <p className="text-story-large">can carry emotion.</p>
          </ScrollReveal>
        </div>
      </Scene>

      {/* TRANSITION — STORYTELLING TEXT */}
      <Scene minHeight="60vh">
        <StoryText
          lines={[
            "And sometimes,",
            "it leaves the screen.",
          ]}
          staggerDelay={0.4}
        />
      </Scene>

      {/* REAL CLIENT PROJECT */}
      <Scene minHeight="auto" className="py-24 md:py-32">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-12 text-center">
            <p className="text-structure-title">
              Client Project — Gual & Gorka
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <VideoSection youtubeId="Tja0eNtZJXA" />
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="mt-20 max-w-xl mx-auto text-center">
            <p className="text-story-large mb-4">A real project.</p>
            <p className="text-story-large mb-8">For real people.</p>
            <p className="text-story-italic mt-8">Quiet. Honest.</p>
          </ScrollReveal>
        </div>
      </Scene>

      {/* EPILOGUE — AUTHOR'S NOTE */}
      <Scene>
        <div className="max-w-2xl mx-auto text-center">
          <StoryText
            lines={[
              "I care about rhythm.",
              "About intention.",
              "About every detail.",
              "",
              "Because stories deserve it.",
            ]}
            staggerDelay={0.5}
          />
        </div>
      </Scene>

      {/* CONTACT */}
      <Scene minHeight="60vh" className="py-24">
        <ScrollReveal className="text-center">
          <p className="text-structure-title mb-16">
            Available for creative & marketing collaborations
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
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
            transition={{ delay: 0.8, duration: 1 }}
            className="text-structure-name mt-24"
          >
            Mike Noriega
          </motion.p>
        </ScrollReveal>
      </Scene>

      {/* Final fade to black */}
      <div className="h-32 bg-background" />
    </main>
  );
};

export default Index;
