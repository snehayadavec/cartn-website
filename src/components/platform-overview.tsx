import type { ComponentType, ReactElement } from "react";
import { motion } from "framer-motion";
import { platformFeatures } from "../mock";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "./ui/card";

const PlatformOverview = (): ReactElement => {
  const getIcon = (iconName: string): ReactElement | null => {
    const iconKey = iconName as keyof typeof LucideIcons;
    const Icon = LucideIcons[iconKey] as ComponentType<LucideProps> | undefined;
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  return (
    <section id="platform" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-sand-900 mb-4">
            Platform Overview
          </h2>
          <p className="text-xl text-sand-900 max-w-3xl mx-auto">
            Complete asset tracking platform built for
            enterprise scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-sand-200 hover:border-sand-500 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="px-6 pt-6 pb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-sand-50 to-sand-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-sand-500 group-hover:to-sand-900 transition-all duration-300">
                    <div className="text-sand-900 group-hover:text-white transition-colors">
                      {getIcon(feature.icon)}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-sand-900 leading-snug">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pt-3 pb-6">
                  <CardDescription className="text-sand-900 leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
