import type { ReactElement } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

type HeroProps = {
  title: string;
  subtitle?: string;
  highlight?: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  stats: {
    value: string;
    label: string;
  }[];
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Background */}
        <svg className="absolute inset-0 w-full h-full opacity-40">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#D6D3CE"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Map Background */}
        <div className="absolute inset-0 -translate-y-20 z-10">
          <img
            src="/world-map.svg"
            className="absolute inset-0 w-full h-full object-contain opacity-50 contrast-125"
          />
        </div>

        {/* Location Pulse Points */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[
            { top: "28%", left: "22%" },
            { top: "38%", left: "48%" },
            { top: "22%", left: "32%" },
            { top: "25%", left: "82%" },
            { top: "27%", left: "83%" },
            { top: "42%", left: "62%" },
            { top: "44%", left: "29%" },
            { top: "77%", left: "31%" },
            { top: "74%", left: "31%" },
            { top: "55%", left: "35%" },
            { top: "18%", left: "69%" },
            { top: "32%", left: "72%" },
            { top: "52%", left: "80%" },
          ].map((point, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: point.top,
                left: point.left,
                transform: "translate(-50%, -50%)",
                width: 40,
                height: 40,
                position: "absolute",
              }}
            >
              {/* Pulse — sand-900 hex */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "rgba(87, 83, 78, 0.25)", // sand-900 at low opacity
                }}
                animate={{ scale: [1, 4], opacity: [0.5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeOut",
                  repeatDelay: 0.5,
                }}
              />

              {/* Dot — sand-900 #57534E */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#57534E",
                  zIndex: 10,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h1 className="hero-title text-6xl md:text-5xl lg:text-8xl font-normal text-sand-900 mb-5 leading-[1.15]">
            {title.split(highlight || "").map((part, index, arr) => (
              <span key={index}>
                {part}
                {index < arr.length - 1 && (
                  <span className="text-sand-700">{highlight}</span>
                )}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl font-normal text-sand-900 mb-12 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Primary CTA */}
            <Button
              onClick={() => onRequestDemo?.()}
              size="lg"
              className="group bg-sand-900/90 text-base font-extralight hover:bg-sand-900 text-sand-50 p-4 transition-all duration-200 rounded-[6px]"
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
              className="group border-2 border-sand-700 hover:border-sand-800 text-base font-normal text-sand-700 hover:text-sand-800 p-4 transition-all duration-200 rounded-[6px]"
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
            {stats.map(
              (stat: { value: string; label: string }, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-normal text-sand-700">
                    {stat.value}
                  </div>
                  <div className="text-sand-900 font-normal text-lg">{stat.label}</div>
                </div>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand-50 to-transparent" />
    </section>
  );
};

export default Hero;
