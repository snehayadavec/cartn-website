import type { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { ClockFading, Trash2 } from "lucide-react";

import {
  Laptop,
  Tag,
  ScanLine,
  Server,
  Database,
  Radio,
  Smartphone,
  Barcode,
  RadioReceiver,
  ScanBarcode,
} from "lucide-react";

type NodeProps = {
  icon: ReactNode;
  label: string;
};

type LineProps = {
  height?: string;
  width?: string;
};

const MainNode = ({ icon, label }: NodeProps) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-sand-100 border border-sand-200 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <p className="text-sm mt-3 text-ink-500 font-medium text-center">{label}</p>
  </div>
);

const BranchNode = ({ icon, label }: NodeProps) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 bg-sand-50 border border-sand-200 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <p className="text-xs mt-2 text-ink-400 text-center w-12 leading-tight">
      {label}
    </p>
  </div>
);

const VLine = ({ height = "h-6" }: LineProps) => (
  <div className={`w-px ${height} bg-sand-300`} />
);

const HLine = ({ width = "w-[160px]" }: LineProps) => (
  <div className={`h-px ${width} bg-sand-300`} />
);

const Arrow = () => (
  <div className="flex items-center justify-center">
    <div className="w-10 h-px bg-sand-300" />
    <div
      style={{
        borderTop: "5px solid transparent",
        borderBottom: "5px solid transparent",
        borderLeft: "6px solid #c8bfaa",
      }}
    />
  </div>
);

export default function HowItWorks() {
  const controls = useAnimation();

  return (
    <section className="py-28 bg-sand-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-agedGold-200/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-ink-500 mb-6">
            How the System Works
          </h2>
          <p className="text-xl text-ink-400 text-start max-w-3xl mx-auto">
            Assets are tagged, detected, and monitored using RFID, NFC, and
            barcode technologies, feeding real‑time tracking and analytics that
            deliver visibility and control across your inventory and facilities.
          </p>
        </div>

        {/* Flowchart + Table Side by Side */}
        <div className="flex justify-center items-start gap-16 relative">
          {/* Flowchart */}
          <div
            className="grid justify-center items-center"
            style={{
              gridTemplateColumns:
                "100px 50px 100px 50px 100px 50px 100px 50px 100px",
              gridTemplateRows: "auto auto auto auto",
            }}
          >
            {/* Flowchart content (scaled nodes accordingly) */}
            <div className="col-start-3 flex flex-col items-center">
              <div className="w-[160px] flex justify-between">
                <BranchNode icon={<Radio />} label="RFID" />
                <BranchNode icon={<Smartphone />} label="NFC" />
                <BranchNode icon={<Barcode />} label="Barcode" />
              </div>

              <div className="w-[120px] flex justify-between mt-1">
                <VLine />
                <VLine />
                <VLine />
              </div>

              <HLine width="w-[120px]" />

              <VLine />
            </div>

            <div className="col-start-1 flex justify-center">
              <MainNode icon={<Laptop />} label="Asset" />
            </div>

            <div className="col-start-2">
              <Arrow />
            </div>

            <div className="col-start-3 flex justify-center">
              <MainNode icon={<Tag />} label="Tag" />
            </div>

            <div className="col-start-4">
              <Arrow />
            </div>

            <div className="col-start-5 row-start-2 flex justify-center items-center">
              <MainNode icon={<ScanLine />} label="Detection" />
            </div>

            <div className="col-start-6">
              <Arrow />
            </div>

            <div className="col-start-7 flex justify-center">
              <MainNode icon={<Server />} label="Server" />
            </div>

            <div className="col-start-8">
              <Arrow />
            </div>

            <div className="col-start-9 flex justify-center">
              <MainNode icon={<Database />} label="Database" />
            </div>

            <div className="col-start-5 flex flex-col items-center mt-2">
              <VLine />
              <HLine width="w-[120px]" />

              <div className="w-[120px] flex justify-between">
                <VLine />
                <VLine />
                <VLine />
              </div>

              <div className="w-[160px] flex justify-between mt-1">
                <BranchNode icon={<RadioReceiver />} label="RFID Reader" />
                <BranchNode icon={<Smartphone />} label="Mobile NFC" />
                <BranchNode icon={<ScanBarcode />} label="Scanner" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-start">
            {/* Arrow aligned with flowchart center */}
            {/* Arrow aligned with flowchart center, pointing to table */}
            <div
              className="absolute -left-16"
              style={{
                top: "50%", // align vertically with flowchart arrows
                transform: "translateY(-50%)", // center the arrow
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Horizontal line */}
              <div className="w-10 h-px bg-sand-300" />

              {/* Arrowhead pointing right toward the table */}
              <div
                style={{
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderLeft: "6px solid #c8bfaa", // left border points arrow right
                }}
              />
            </div>

            <h3 className="text-2xl font-semibold text-ink-500 mb-4 text-left">
              Assets Report
            </h3>

            <div className="border rounded-xl overflow-hidden shadow-md bg-white w-[500px]">
              {/* Table Header */}
              <div className="grid grid-cols-5 bg-sand-100 text-ink-400 text-sm font-semibold px-3 py-2 border-b">
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
                      className="grid grid-cols-5 px-3 py-2 text-xs border-b items-center hover:bg-sand-50"
                    >
                      <div className="font-medium text-ink-500">
                        Asset {i + 1}
                      </div>
                      <div className="text-ink-400">00028{i + 20}</div>
                      <div className="text-ink-500">
                        Warehouse {(i % 3) + 1}
                      </div>

                      <div>
                        <span
                          className={`text-xs font-medium px-2 ${
                            i % 2 === 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {i % 2 === 0 ? "Active" : "Inactive"}
                        </span>
                      </div>

                      <div className="flex gap-1">
                        <div className="w-5 h-5 bg-sand-100 rounded flex items-center justify-center text-ink-500 text-xs">
                          <ClockFading className="w-3.5 h-3.5" />
                        </div>
                        <div className="w-5 h-5 bg-red-100 rounded flex items-center justify-center text-red-600 text-xs">
                          <Trash2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
