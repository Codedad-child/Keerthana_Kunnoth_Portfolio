import { motion } from "motion/react";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-card/30">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal text-xs font-bold uppercase tracking-widest">
            Technical Arsenal
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 uppercase tracking-wide text-foreground">
            Skills & Technologies
          </h2>
          <div className="mt-3 mx-auto w-16 h-0.5 bg-teal" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
            A comprehensive toolkit spanning MES platforms, industrial
            protocols, databases, and software development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-slate-card border border-border rounded-lg p-6 hover:border-teal/40 hover:shadow-teal transition-all duration-300"
              data-ocid="skills.card"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-2xl">{skill.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-foreground group-hover:text-teal transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-background/50 border border-border rounded px-2 py-0.5 text-muted-foreground group-hover:border-teal/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
