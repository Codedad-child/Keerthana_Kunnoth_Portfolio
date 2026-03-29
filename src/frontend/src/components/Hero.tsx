import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";

const EXPERTISE_CHIPS = [
  "HydraX MES",
  "Opera MES",
  "Sky MES",
  "Aveva MES",
  "Schneider EcoStruxure",
  "Emerson Movicon",
  "OPC UA",
  "BMS / SCADA",
];

const CV_URL =
  "/assets/uploads/adarsh_p_resume-30-03-2026-019d3afb-b5e9-70e3-ae75-f8997dcdcdf6-1.pdf";

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90" />
      <div className="absolute inset-0 circuit-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

      {/* Industrial image — right side */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
        <img
          src="/assets/generated/hero-industrial.dim_900x700.jpg"
          alt="Industrial automation control room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-8 h-0.5 bg-teal" />
              <span className="text-teal text-xs font-bold uppercase tracking-widest">
                Looking for Jobs
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-foreground mb-4"
          >
            <span className="text-teal">Adarsh P</span>
            <br />
            MES Consultant
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg"
          >
            Results-driven MES professional with proven experience in delivering
            successful implementations across multiple manufacturing domains.
            Skilled in system integration using SQL and OPC UA, enabling
            seamless data flow and supporting data-driven decision-making to
            improve operational efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {EXPERTISE_CHIPS.map((chip) => (
              <Badge
                key={chip}
                className="bg-teal/10 border border-teal/30 text-teal hover:bg-teal/20 transition-colors text-xs font-semibold px-3 py-1"
              >
                {chip}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-teal hover:bg-teal-bright text-background font-bold uppercase tracking-wider text-sm px-6 py-5 teal-glow transition-all"
              data-ocid="hero.primary_button"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a href={CV_URL} download="Adarsh_P_CV.pdf">
              <Button
                variant="outline"
                className="border-border text-foreground hover:border-teal hover:text-teal font-bold uppercase tracking-wider text-sm px-6 py-5 transition-all"
                data-ocid="hero.secondary_button"
              >
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-slate-card/80 backdrop-blur-sm border-t border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Years Experience", value: "6+" },
            { label: "Major Projects", value: "5+" },
            { label: "Certifications", value: "7" },
            { label: "Languages Spoken", value: "4" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl text-teal">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
