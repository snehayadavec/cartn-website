import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";

type FooterLinks = {
  [key: string]: string[];
};

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const footerLinks: FooterLinks = {
    Platform: ['Features', 'Technologies', 'Integrations'],
    Solutions: ['Warehouse', 'Healthcare', 'Manufacturing'],
    Company: ['About Us', 'Contact'],
    Resources: ['Documentation', 'Support', 'FAQs']
  };

  return (
    <footer className="bg-sand-50 text-ink-500 pt-16 pb-8 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-ink-500">CARTN</h3>
            <p className="text-ink-400 mb-6 leading-relaxed">
              Enterprise-grade asset tracking platform.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center hover:bg-sand-200 transition-colors"
              >
                <FaLinkedin className="w-5 h-5 text-ink-500" />
              </a>
              <a
                href="mailto:contact@cartn.com"
                className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center hover:bg-sand-200 transition-colors"
              >
                <Mail className="w-5 h-5 text-ink-500" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-ink-500 mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link: string) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-ink-400 hover:text-ink-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-sand-200 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-ink-400 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-ink-400 mb-1">Email</div>
                <a
                  href="mailto:contact@xfinion.com"
                  className="text-ink-500 hover:text-ink-600 transition-colors"
                >
                  contact@xfinion.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-ink-400 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-ink-400 mb-1">Phone</div>
                <a
                  href="tel:+13018014897"
                  className="text-ink-500 hover:text-ink-600 transition-colors"
                >
                  +1 (301) 801-4897
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-ink-400 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-ink-400 mb-1">Address</div>
                <p className="text-ink-500">
                  123 Innovation Drive, Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sand-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-ink-400 text-sm">
            © {currentYear} CARTN. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#privacy"
              className="text-ink-400 hover:text-ink-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-ink-400 hover:text-ink-600 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-ink-400 hover:text-ink-600 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 pt-8 border-t border-sand-200 flex flex-wrap justify-center gap-4 text-xs text-ink-400"
        >
          {/* <span className="px-3 py-1 bg-white/10 rounded-full border border-sand-200">
            ISO 27001 Certified
          </span>
          <span className="px-3 py-1 bg-white/10 rounded-full border border-sand-200">
            SOC 2 Compliant
          </span>
          <span className="px-3 py-1 bg-white/10 rounded-full border border-sand-200">
            GDPR Ready
          </span>
          <span className="px-3 py-1 bg-white/10 rounded-full border border-sand-200">
            Government Approved
          </span> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
