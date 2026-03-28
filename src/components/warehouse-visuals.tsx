import type { ReactElement } from "react";
import { motion, useAnimation } from "framer-motion";
import { ClockFading, Trash2 } from "lucide-react";
import { assetTimeline } from "@/mock";

type WarehouseFeature = {
  iconPath: string;
  title: string;
  description: string;
  accent: string;
};

const features: WarehouseFeature[] = [
  {
    iconPath:
      "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    title: "RFID Tracking",
    description:
      "Leveraging advanced RFID, NFC, and Barcode technology, CARTN ensures accurate and instant tracking across your facility, enhancing operational efficiency and asset security.",
    accent: "bg-green-500",
  },
  {
    iconPath:
      "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Warehouse Tracking",
    description:
      "With built-in analytics and reporting features, it provides detailed insights into asset flow, including precise records of items entering and exiting your premises.",
    accent: "bg-sand-500",
  },

  {
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Live Analytics",
    description:
      "Whether you're managing high-value equipment, inventory, or tools, our RFID solution empowers you with the data needed to streamline asset management and improve decision-making.",
    accent: "bg-purple-500",
  },
];

const WarehouseVisuals = (): ReactElement => {
  const controls = useAnimation();
  const timelineControls = useAnimation();

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-sand-900 mb-4">
            Real-Time Asset Tracking
          </h2>
          <p className="text-xl text-sand-900 max-w-3xl mx-auto">
            Track every asset across your entire infrastructure with pinpoint
            accuracy
          </p>
        </motion.div>

        {/* Isometric Warehouse Illustration with CSS */}
        <div className="relative mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-stretch">
            {/* Left: Warehouse Visualization */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full bg-white rounded-xl shadow-xl border overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-5 bg-sand-100 text-sand-700 text-lg font-semibold px-4 py-3 border-b">
                  <div>Asset</div>
                  <div>Tag ID</div>
                  <div>Location</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>

                {/* Scrolling Rows */}
                <div className="h-[260px] overflow-hidden relative">
                  <motion.div
                    animate={controls}
                    initial={{ y: "0%" }}
                    onViewportEnter={() =>
                      controls.start({
                        y: ["0%", "-50%"],
                        transition: {
                          duration: 18,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      })
                    }
                    onHoverStart={() => controls.stop()}
                    onHoverEnd={() =>
                      controls.start({
                        y: ["0%", "-50%"],
                        transition: {
                          duration: 18,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      })
                    }
                  >
                    {[...Array(14)].map((_, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-5 px-4 py-3 text-base border-b items-center hover:bg-sand-50"
                      >
                        <div className="font-medium text-sand-700">
                          Asset {i + 1}
                        </div>

                        <div className="text-sand-500">00028{i + 20}</div>

                        <div className="text-sand-900">
                          Warehouse {(i % 3) + 1}
                        </div>

                        {/* Status */}
                        <div>
                          <span
                            className={`text-base font-medium px-4 ${
                              i % 2 === 0 ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {i % 2 === 0 ? "Active" : "Inactive"}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-sand-100 rounded flex items-center justify-center text-sand-900 text-xs">
                            <ClockFading className="w-4 h-4" />
                          </div>
                          <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center text-red-600 text-xs">
                            <Trash2 className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Bottom Fade */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="space-y-6 h-full flex flex-col justify-center"
            >
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${feature.accent} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={feature.iconPath}
                      />
                    </svg>
                  </div>
                  <div>
                    {/* <h3 className="text-lg font-bold text-sand-900 mb-2">
                      {feature.title}
                    </h3> */}
                    <p className="text-sand-900 text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="bg-sand-900 rounded-2xl p-12">
          {/* SCROLL WRAPPER */}
          <div
            className="relative overflow-x-hidden overflow-y-visible py-16"
            onMouseEnter={() => timelineControls.stop()}
            onMouseLeave={() =>
              timelineControls.start({
                x: ["0%", "-50%"],
                transition: {
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                },
              })
            }
          >
            {/* TRACK */}
            <motion.div
              className="flex w-max px-32"
              animate={timelineControls}
              initial={{ x: "0%" }}
              onViewportEnter={() =>
                timelineControls.start({
                  x: ["0%", "-50%"],
                  transition: {
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  },
                })
              }
            >
              {/* TIMELINE*/}
              <div className="relative flex items-center">
                <div className="relative flex items-center h-[118px]">
                  {/* SINGLE CENTER LINE */}
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-sand-600 -translate-y-1/2" />

                  {[...assetTimeline, ...assetTimeline].map((item, i) => (
                    <div
                      key={`${item.id}-${i}`}
                      className="relative w-[260px] h-full flex items-center justify-center"
                    >
                      {/* DOT */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full z-10 shadow-[0_0_8px_#facc15]" />

                      {i % 2 === 0 ? (
                        <>
                          {/* CONNECTOR UP — grows upward from dot center */}
                          <div className="absolute top-[calc(50%-45px)] left-1/2 -translate-x-1/2 w-[2px] h-[45px] bg-sand-600" />

                          {/* TOP CARD — bottom edge sits exactly at top of connector */}
                          <div className="absolute bottom-[calc(50%+45px)] w-56 bg-sand-800 border border-sand-600 rounded-xl p-3 text-start transition-transform duration-300 hover:-translate-y-1">
                            <p className="text-xs text-sand-400">{item.time}</p>
                            <p className="text-sm font-semibold text-white">
                              {item.location}
                            </p>
                            <p className="text-xs text-sand-300">
                              checked in by {item.owner}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* CONNECTOR DOWN — grows downward from dot center */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[2px] h-[45px] bg-sand-600" />

                          {/* BOTTOM CARD — top edge sits exactly at bottom of connector */}
                          <div className="absolute top-[calc(50%+45px)] w-56 bg-sand-800 border border-sand-600 rounded-xl p-3 text-start transition-transform duration-300 hover:translate-y-1">
                            <p className="text-xs text-sand-400">{item.time}</p>
                            <p className="text-sm font-semibold text-white">
                              {item.location}
                            </p>
                            <p className="text-xs text-sand-300">
                              checked in by {item.owner}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* EDGE FADE */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-sand-900 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-sand-900 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseVisuals;
