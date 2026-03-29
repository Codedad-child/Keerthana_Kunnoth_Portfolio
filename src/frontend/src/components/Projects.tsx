import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { PROJECTS } from "../data/portfolio";

type Project = (typeof PROJECTS)[number];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24">
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
            Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 uppercase tracking-wide text-foreground">
            Project Case Studies
          </h2>
          <div className="mt-3 mx-auto w-16 h-0.5 bg-teal" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-card border border-border rounded-lg overflow-hidden hover:border-teal/40 transition-all duration-300 flex flex-col"
              data-ocid={`projects.item.${i + 1}`}
            >
              {/* Image placeholder */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 circuit-pattern opacity-30" />
                <div className="relative z-10 text-center px-4">
                  <div className="font-display font-bold text-xs uppercase tracking-widest text-foreground/60">
                    {project.subtitle}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-card to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-base uppercase tracking-wide text-foreground mb-2 group-hover:text-teal transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.challenge.slice(0, 100)}…
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-teal/10 border border-teal/30 text-teal text-xs px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  size="sm"
                  className="w-full bg-transparent border border-teal text-teal hover:bg-teal hover:text-background font-bold uppercase tracking-wider text-xs transition-all"
                  onClick={() => setSelected(project)}
                  data-ocid="projects.open_modal_button"
                >
                  View Case Study
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project detail dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent
          className="bg-slate-card border-border max-w-2xl max-h-[80vh] overflow-y-auto"
          data-ocid="projects.dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display font-bold uppercase tracking-wide text-foreground">
              {selected?.title}
            </DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-6 mt-2">
              <div className="flex flex-wrap gap-1.5">
                {selected.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-teal/10 border border-teal/30 text-teal text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Technologies Used */}
              {selected.technologies && selected.technologies.length > 0 && (
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-teal mb-3">
                    Technologies Used
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selected.technologies.map((tech) => (
                      <div key={tech.category} className="text-xs">
                        <span className="text-muted-foreground font-semibold">
                          {tech.category}:{" "}
                        </span>
                        <span className="text-foreground/80">{tech.items}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {[
                { label: "Challenge", text: selected.challenge },
                { label: "Solution", text: selected.solution },
                { label: "Result", text: selected.result },
              ].map(({ label, text }) => (
                <div key={label}>
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-teal mb-2">
                    {label}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          )}
          <Button
            variant="outline"
            size="sm"
            className="mt-4 border-border text-muted-foreground hover:text-foreground"
            onClick={() => setSelected(null)}
            data-ocid="projects.close_button"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
