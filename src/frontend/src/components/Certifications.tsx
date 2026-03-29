import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { CERTIFICATIONS } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
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
            Credentials
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 uppercase tracking-wide text-foreground">
            Certifications & Achievements
          </h2>
          <div className="mt-3 mx-auto w-16 h-0.5 bg-teal" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-slate-card border border-border rounded-lg p-5 hover:border-teal/40 hover:shadow-teal transition-all duration-300 flex flex-col"
              data-ocid={`certifications.item.${i + 1}`}
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <div className="inline-block text-xs font-bold text-teal border border-teal/30 rounded px-2 py-0.5 mb-3 w-fit">
                {cert.year}
              </div>
              <h3 className="font-display font-bold text-sm uppercase tracking-wide text-foreground group-hover:text-teal transition-colors mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground font-semibold mb-2">
                {cert.issuer}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                {cert.description}
              </p>
              {cert.pdfUrl && (
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-teal border border-teal/30 rounded px-3 py-1.5 hover:bg-teal/10 transition-colors w-fit"
                >
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
