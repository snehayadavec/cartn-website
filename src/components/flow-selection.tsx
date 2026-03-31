import { motion } from "framer-motion";
import { Database, Cpu, Radar, BarChart3, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Assets & Inputs",
    desc: "RFID, GPS, IoT sensors collect asset data",
    icon: Database,
  },
  {
    title: "Data Processing",
    desc: "Real-time ingestion and normalization",
    icon: Cpu,
  },
  {
    title: "Tracking Engine",
    desc: "Continuous location + status monitoring",
    icon: Radar,
  },
  {
    title: "Dashboard",
    desc: "Visualize assets across systems",
    icon: BarChart3,
  },
  {
    title: "Insights & Actions",
    desc: "Make faster, data-driven decisions",
    icon: Sparkles,
  },
];

export default function FlowSection() {
  return (
    <section className="py-28 bg-sand-50 relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-agedGold-200/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-medium text-ink-500 mb-6"
        >
          How Cartn Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-ink-400 max-w-2xl mx-auto mb-20 text-lg"
        >
          From physical assets to real-time insights — Cartn connects every part
          of your tracking ecosystem into one unified platform.
        </motion.p>

        {/* Flow line */}
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-agedGold-400 to-transparent origin-left"
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group flex flex-col items-center max-w-[200px] relative"
                >
                  {/* glow ring */}
                  <div className="absolute w-20 h-20 rounded-full bg-agedGold-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* icon container */}
                  <div className="relative w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-ink-400 group-hover:text-agedGold-500 transition-colors duration-300" />
                  </div>

                  <h3 className="text-ink-500 font-medium mb-2">
                    {step.title}
                  </h3>

                  <p className="text-ink-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  {/* pulse dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="hidden md:block absolute top-1/2 w-3 h-3 rounded-full bg-agedGold-500 shadow-[0_0_12px_rgba(138,106,40,0.6)]"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
