import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { motion } from "motion/react";

const CV_URL =
  "/assets/uploads/adarsh_p_resume-30-03-2026-019d3afb-b5e9-70e3-ae75-f8997dcdcdf6-1.pdf";

export default function ResumeDownload() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-teal/5 via-teal/10 to-teal/5 border-y border-border">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center">
              <FileText className="w-6 h-6 text-teal" />
            </div>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-wide text-foreground mb-3">
            Download My CV
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Get a comprehensive overview of my experience, projects,
            certifications, and technical skills in a single document.
          </p>
          <a href={CV_URL} download="Adarsh_P_CV.pdf">
            <Button
              className="bg-teal hover:bg-teal-bright text-background font-bold uppercase tracking-wider text-sm px-8 py-5 teal-glow transition-all"
              data-ocid="resume.primary_button"
            >
              <Download className="mr-2 w-4 h-4" />
              Download CV (PDF)
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
