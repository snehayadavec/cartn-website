import React from "react";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-sand-900 via-sand-700 to-sand-900 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Ready to Track Your Assets in Real Time?
          </h2>

          {/* Description */}
          <p className="text-xl text-sand-100 mb-8">
            Join leading organizations using CARTN for enterprise-grade asset
            tracking. Schedule a personalized demo and see how we can transform
            your operations.
          </p>

          {/* Button */}
          <div className="mb-10">
            <Button className="bg-white text-sand-700 hover:bg-sand-100 p-6 text-base font-medium">
              Request Demo →
            </Button>
          </div>

          {/* Contact Row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sand-100">
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>contact@xfinion.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+1 (301) 801-4897</span>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>123 Innovation Drive, Tech City</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
