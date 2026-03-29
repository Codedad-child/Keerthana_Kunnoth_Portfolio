import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const SPECIALIZATIONS = [
  "MES Implementation (Opera, Sky, Aveva, HydraX)",
  "SCADA Systems (Emerson Movicon)",
  "SAP/ERP Integration (Node-RED, SSIS)",
  "OPC UA / OPC DA / Modbus TCP/IP",
  "SQL Server & PostgreSQL",
  "DevExpress / Telerik / Crystal Reports",
  "Industrial Cybersecurity (Waterfall)",
  "PLC Programming (TIA Portal, RSLogix 500)",
  "BMS Architecture (Schneider EcoStruxure)",
  "Team Leadership & Project Management",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal text-xs font-bold uppercase tracking-widest">
            Who I Am
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 uppercase tracking-wide text-foreground">
            About Me
          </h2>
          <div className="mt-3 mx-auto w-16 h-0.5 bg-teal" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-foreground/90 leading-relaxed text-base">
              I&apos;m <strong className="text-teal">Adarsh P</strong>, a
              results-driven{" "}
              <strong className="text-teal">MES Consultant</strong> with a
              strong track record of leading successful MES implementations
              within the automation sector.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Experienced in guiding cross-functional teams to optimize
              manufacturing processes, ensure seamless system integration and
              drive data-centric decision-making. Adept at managing project
              timelines, mentoring team members, and delivering robust technical
              solutions aligned with business objectives.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Proven leadership in aligning technology with operational goals to
              enhance overall production efficiency. Currently working as an{" "}
              <strong className="text-teal">MES Consultant at Capgemini</strong>
              , implementing the MPDV HydraX MES platform for Infineon
              Technologies (Germany).
            </p>

            <div className="mt-6">
              <h3 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-4">
                Areas of Specialisation
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {SPECIALIZATIONS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-slate-card border border-border rounded-lg p-8 shadow-card-dark">
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-teal mb-8">
                Career Highlights
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    value: "6+",
                    label: "Years in Automation",
                    color: "text-teal",
                  },
                  {
                    value: "5+",
                    label: "Major Projects Delivered",
                    color: "text-teal",
                  },
                  { value: "7", label: "Certifications", color: "text-teal" },
                  { value: "4", label: "MES Platforms", color: "text-teal" },
                  { value: "4", label: "Languages Spoken", color: "text-teal" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-panel/50 rounded border border-border p-4 text-center"
                  >
                    <div
                      className={`font-display font-bold text-3xl ${stat.color}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Industries & Sectors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Semiconductor",
                    "Solar Energy",
                    "Manufacturing",
                    "Paper & Packaging",
                  ].map((ind) => (
                    <span
                      key={ind}
                      className="text-xs bg-teal/10 border border-teal/20 text-teal rounded px-2 py-1"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
