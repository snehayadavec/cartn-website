import type { ComponentType, ReactElement } from 'react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2 } from 'lucide-react';
import { services, deploymentOptions } from '../mock';

type ServiceItem = (typeof services)[number];
type DeploymentOptionItem = (typeof deploymentOptions)[number];

const getIcon = (iconName: string): ReactElement | null => {
  const iconKey = iconName as keyof typeof LucideIcons;
  const Icon = LucideIcons[iconKey] as ComponentType<LucideProps> | undefined;
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

const ServicesDeployment = (): ReactElement => {
  const deploymentSteps: string[] = [
    'Plan & Design',
    'Deploy Infrastructure',
    'Integrate Systems',
    'Track & Monitor',
    'Support & Optimize',
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Turnkey Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-sand-900 mb-4">
            Turnkey Services & Deployment
          </h2>
          <p className="text-xl text-sand-900 max-w-3xl mx-auto">
            End-to-end implementation and support for seamless asset tracking deployment
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-sand-200 hover:border-sand-500 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-sand-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-sand-500 transition-colors">
                    <div className="text-sand-900 group-hover:text-white transition-colors">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-sand-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sand-900 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Deployment Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-sand-900 text-center mb-12">
            Deployment Process
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {deploymentSteps.map((step, index) => (
              <Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center flex-1"
                >
                  <div className="w-14 h-14 text-lg bg-gradient-to-br from-sand-500 to-sand-700 rounded-full flex items-center justify-center text-white font-bold mb-3 shadow-lg">
                    {index + 1}
                  </div>
                  <p className="text-center text-base text-sand-700 font-medium">{step}</p>
                </motion.div>
                {index < deploymentSteps.length - 1 && (
                  <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-sand-300 to-sand-500" />
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>

        {/* Deployment Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-sand-900 text-center mb-12">
            Flexible Deployment Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deploymentOptions.map((option: DeploymentOptionItem, index: number) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-sand-50 to-sand-50 rounded-xl p-8 border-2 border-sand-200 hover:border-sand-500 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sand-500 transition-colors shadow-md">
                  <div className="text-sand-900 group-hover:text-white transition-colors">
                    {getIcon(option.icon)}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-sand-900 mb-2">{option.name}</h4>
                <p className="text-sand-900 text-base">{option.description}</p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center text-base text-sand-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    Secure & Compliant
                  </div>
                  <div className="flex items-center justify-center text-base text-sand-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    Scalable Solution
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDeployment;
