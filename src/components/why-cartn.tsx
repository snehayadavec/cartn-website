import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { whyCartn } from "../mock";

type Reason = {
  id: number;
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
};

const WhyCARTN: React.FC = () => {
  const getIcon = (iconName: keyof typeof LucideIcons) => {
    const Icon = LucideIcons[iconName] as React.ComponentType<LucideProps>;
    return Icon ? <Icon className="w-6 h-6 text-white" /> : null;
  };

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-transparent to-slate-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-sand-900 mb-4">
            Why Choose CARTN?
          </h2>
          <p className="text-xl text-sand-900 max-w-3xl mx-auto">
            Enterprise-grade asset tracking that delivers results from day one
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-y-8">
          {/* Left Column: Icons + Text */}
          <div className="flex-1 space-y-6">
            {(whyCartn as Reason[]).map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sand-500 to-sand-700 rounded-full flex items-center justify-center shadow-md">
                    {getIcon(reason.icon)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sand-900">
                    {reason.title}
                  </h3>
                  <p className="text-sand-900 text-lg">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: End-to-End Solution Provider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex-1 bg-gradient-to-r from-sand-900 to-sand-800 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              End-to-End Solution Provider
            </h3>
            <p className="text-lg text-sand-100 mb-14 max-w-md">
              From hardware selection to software deployment, we handle
              everything. Focus on your business while we manage your asset
              tracking infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sand-100 text-base">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold mb-2">500K+</div>
                <div className="text-sand-100 text-base">Assets Tracked</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sand-100 text-base">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCARTN;
