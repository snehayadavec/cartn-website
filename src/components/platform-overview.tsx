import { motion } from "framer-motion";
import { Database, Cpu, Radar, BarChart3, Sparkles } from "lucide-react";
import { useState } from "react";

type Step = {
  title: string;
  desc: string;
  details: string;
  icon: typeof Database;
};

const steps: Step[] = [
  {
    title: "Asset Identification",
    desc: "RFID, Barcode, and NFC tag assets",
    details:
      "Assets are tagged using RFID, barcode, or NFC to create a unique digital identity for tracking and inventory.",
    icon: Database,
  },
  {
    title: "Data Capture",
    desc: "Scan and capture asset movement data",
    details:
      "Readers, scanners, and mobile devices capture asset movement, location, and status data in real time.",
    icon: Cpu,
  },
  {
    title: "Real-Time Tracking",
    desc: "Continuous asset location and status visibility",
    details:
      "Track asset movement, location, and status across facilities with real-time visibility.",
    icon: Radar,
  },
  {
    title: "Dashboards & Visibility",
    desc: "View assets across locations and systems",
    details:
      "Unified dashboards provide visibility into asset inventory, movement, and utilization.",
    icon: BarChart3,
  },
  {
    title: "Insights & Automation",
    desc: "Reports, alerts, and workflow automation",
    details:
      "Generate reports, trigger alerts, and automate workflows to improve operational efficiency.",
    icon: Sparkles,
  },
];

export default function PlatformOverview() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-28 bg-sand-50 relative overflow-hidden">
      {/* background glow */}
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
          Platform Overview
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-xl text-ink-400 text-start max-w-3xl mx-auto"
        >
          Cartn provides a unified platform to track, manage, and monitor
          physical assets in real time. From inventory visibility to enterprise
          system integration, the platform enables organizations to maintain
          control, reduce loss, and operate efficiently across locations.
        </motion.p>

        {/* Flow line */}

        <div className="relative mt-20">
          {/* LINE ALIGNMENT */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden md:block absolute top-[32px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-agedGold-400 to-transparent origin-left"
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
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  className="group flex flex-col items-center max-w-[200px] relative min-h-[240px]"
                >
                  {/* glow ring */}
                  <div
                    className={`absolute w-20 h-20 rounded-full bg-agedGold-300/20 blur-xl transition-opacity duration-300 ${
                      active === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* icon */}
                  <div className="relative w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      className={`w-7 h-7 transition-colors duration-300 ${
                        active === index ? "text-agedGold-500" : "text-ink-400"
                      }`}
                    />
                  </div>

                  <h3 className="text-ink-500 font-medium mb-2">
                    {step.title}
                  </h3>

                  <p className="text-ink-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  {/* HOVER EXPANSION */}
                  <div className="relative">
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 transition-all duration-300 ${
                        active === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-sand-50 border border-sand-200 rounded-md p-3 text-left shadow-xl">
                        <p className="text-xs text-ink-400 leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* DOT ALIGNMENT */}
                  {/* <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="hidden md:block absolute top-[32px] -translate-y-1/2 w-3 h-3 rounded-full bg-agedGold-500 shadow-[0_0_12px_rgba(138,106,40,0.6)]"
                  /> */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
