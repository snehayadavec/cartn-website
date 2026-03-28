import React from "react";
import { motion } from "framer-motion";
import { howItWorksSteps } from "../mock";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const HowItWorks: React.FC = () => {
    const getIcon = (iconName: string) => {
      const Icon =
        LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<{
          className?: string;
        }>;
  
      return Icon ? <Icon className="w-6 h-6" /> : null;
    };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-sand-900 mb-4">
            How It Works
          </h2>
          <p className="text-2xl text-sand-900 max-w-3xl mx-auto">
            From asset tagging to real-time analytics - a seamless workflow
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden md:flex items-center justify-between">
          {(howItWorksSteps as Step[]).map((step, index) => (
            <React.Fragment key={step.id}>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center flex-1"
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-sand-500 to-sand-700 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {getIcon(step.icon)}
                    </div>
                  </div>

                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-sand-200 text-sand-700 rounded-full flex items-center justify-center text-lg font-extrabold">
                    {step.id}
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-sand-900">
                  {step.title}
                </h3>
                <p className="text-base text-sand-900 mt-1">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow */}
              {index < howItWorksSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  className="flex-shrink-0 mx-4"
                >
                  <ArrowRight className="w-14 h-14 text-sand-400" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Flow */}
        <div className="md:hidden space-y-6">
          {(howItWorksSteps as Step[]).map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start space-x-4"
            >
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-sand-500 to-sand-700 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-white">
                    {getIcon(step.icon)}
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 w-6 h-6 bg-sand-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {step.id}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-sand-900">
                  {step.title}
                </h3>
                <p className="text-sm text-sand-900 mt-1">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-sand-50 to-sand-50 rounded-2xl border-2 border-sand-100"
        >
          <div className="text-center">
            <p className="text-sand-700 text-xl font-medium mb-2">End Result</p>
            <h4 className="text-xl font-bold text-sand-900">
              Complete Asset Visibility & Control
            </h4>
            <p className="text-sand-900 mt-2 text-lg">
              Real-time tracking, analytics, and reporting at your fingertips
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
