import { Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { EXPERIENCE } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-slate-card/30">
      <div className="absolute inset-0 circuit-pattern opacity-15" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal text-xs font-bold uppercase tracking-widest">
            Career Journey
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 uppercase tracking-wide text-foreground">
            Work Experience
          </h2>
          <div className="mt-3 mx-auto w-16 h-0.5 bg-teal" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 timeline-line">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-10 last:mb-0"
                data-ocid={`experience.item.${i + 1}`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-teal border-2 border-background teal-glow" />

                <div className="bg-slate-card border border-border rounded-lg p-6 hover:border-teal/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-base text-foreground uppercase tracking-wide">
                        {exp.role}
                      </h3>
                      <p className="text-teal font-semibold text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-teal mt-1.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
