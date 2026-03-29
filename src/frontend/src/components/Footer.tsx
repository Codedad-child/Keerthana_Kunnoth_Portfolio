import { Cpu, Linkedin, Mail } from "lucide-react";

const SITE_MAP = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const MORE_LINKS = [
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Download CV", href: "/resume.pdf" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-teal flex items-center justify-center teal-glow">
                <Cpu className="w-4 h-4 text-background" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-sm tracking-widest text-foreground uppercase">
                  Adarsh P
                </span>
                <span className="font-display text-[10px] tracking-wider text-teal uppercase">
                  MES Consultant
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              MES specialist with hands-on experience in implementing and
              integrating MES platforms including{" "}
              <span className="text-teal font-medium">
                HydraX MES, Opera MES, Sky MES, and Aveva MES
              </span>{" "}
              across semiconductor, solar, paper, and assembly manufacturing.
              Expertise in MES development, OPC UA / SQL-based system
              integration, shopfloor connectivity, and driving data-driven
              operational efficiency.
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-teal mb-4">
              Site Map
            </h4>
            <ul className="space-y-2">
              {SITE_MAP.map((l) => (
                <li key={l.href}>
                  <button
                    type="button"
                    onClick={() => scroll(l.href)}
                    className="text-xs text-muted-foreground hover:text-teal transition-colors"
                    data-ocid="footer.link"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-teal mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              {MORE_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs text-muted-foreground hover:text-teal transition-colors"
                    data-ocid="footer.link"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-teal mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/adarsh-p-7103701a1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-teal hover:border-teal/50 transition-colors"
                aria-label="LinkedIn"
                data-ocid="footer.link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:adarshpatuathi@gmail.com"
                className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-teal hover:border-teal/50 transition-colors"
                aria-label="Email"
                data-ocid="footer.link"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Adarsh P. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-bright transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
