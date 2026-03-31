import type { ReactElement } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "./animated-background";

type Stat = {
  value: string;
  label: string;
};

type HeroProps = {
  title: string;
  subtitle?: string;
  highlight?: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  stats: Stat[];
  onRequestDemo?: () => void;
  onContact?: () => void;
};

const Hero = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  onRequestDemo,
  onContact,
  highlight,
}: HeroProps): ReactElement => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sand-100/70">
      {/* Animated Background — fills the entire section, no offset */}
      <div className="absolute inset-0 z-0 opacity-55">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h1 className="hero-title text-6xl md:text-5xl lg:text-8xl font-normal text-ink-500 mb-5 leading-[1.15]">
            {highlight
              ? title.split(highlight).map((part, index, arr) => (
                  <span key={index}>
                    {part}
                    {index < arr.length - 1 && (
                      <span className="text-agedGold-500">{highlight}</span>
                    )}
                  </span>
                ))
              : title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl font-normal text-ink-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Primary CTA */}
            <Button
              onClick={() => onRequestDemo?.()}
              size="lg"
              className="group bg-ink-500 text-base font-extralight hover:bg-ink-500/80 text-sand-50 p-4 transition-all duration-200 rounded-[6px]"
            >
              {primaryCTA}
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
            {/* Ghost CTA */}
            <Button
              onClick={() => onContact?.()}
              size="lg"
              variant="outline"
              className="group border-2 border-agedGold-500 hover:border-warmGold-400 text-base font-normal text-agedGold-500 hover:text-warmGold-400 p-4 transition-all duration-200 rounded-[6px]"
            >
              <Play className="transition-colors" size={20} />
              {secondaryCTA}
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-8"
          >
            {stats.map((stat: Stat, index: number) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-normal text-agedGold-500 hover:text-warmGold-400 transition-colors duration-200">
                  {stat.value}
                </div>
                <div className="text-ink-400 font-normal text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand-50 to-transparent" />
    </section>
  );
};

export default Hero;
