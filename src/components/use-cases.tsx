import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useCases as useCasesData } from '../mock';



const UseCases: React.FC = () => {
  const getIcon = (iconName: keyof typeof LucideIcons) => {
    const Icon = LucideIcons[iconName] as React.ComponentType<LucideProps>;
    return <Icon className="w-8 h-8 text-white" />;
  };

  return (
    // <section className="py-24 bg-gradient-to-b from-sand-100 to-white">
    <section className="py-24 relative overflow-hidden bg-sand-50 text-ink-500">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sand-50 via-sand-50/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-ink-500 mb-4">
            Solutions Across Industries
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCasesData.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-sand-200 hover:border-sand-500 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-sand-500 to-sand-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {getIcon(useCase.icon as keyof typeof LucideIcons)}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-sand-100 text-[12px] text-ink-500 hover:bg-sand-200 rounded-[4px]"
                    >
                      {useCase.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-ink-500">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-ink-400 text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-sand-50" />
    </section>
  );
};

export default UseCases;
