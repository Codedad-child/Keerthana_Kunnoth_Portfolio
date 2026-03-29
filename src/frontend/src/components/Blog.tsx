import { motion } from "motion/react";

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 bg-slate-card/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal text-xs font-bold uppercase tracking-widest">
            Knowledge Sharing
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 uppercase tracking-wide text-foreground">
            Blog &amp; Insights
          </h2>
          <div className="mt-3 mx-auto w-16 h-0.5 bg-teal" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
            Practical insights on MES implementation, industrial automation, and
            Industry 4.0 from the field.
          </p>
        </motion.div>

        <div className="text-center py-16" data-ocid="blog.empty_state">
          <p className="text-muted-foreground text-sm">
            Articles coming soon — focused on MES implementation, MES
            integration, and industrial automation from real-world deployments.
          </p>
        </div>
      </div>
    </section>
  );
}
