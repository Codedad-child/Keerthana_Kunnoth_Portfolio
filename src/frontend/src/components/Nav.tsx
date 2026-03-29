import { Button } from "@/components/ui/button";
import { Cpu, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-card-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-ocid="nav.link"
        >
          <div className="w-8 h-8 rounded bg-teal flex items-center justify-center teal-glow group-hover:bg-teal-bright transition-colors">
            <Cpu className="w-4 h-4 text-background" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-sm tracking-widest text-foreground uppercase">
              MES
            </span>
            <span className="font-display text-[10px] tracking-wider text-teal uppercase">
              Portfolio
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-teal transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded border border-border text-muted-foreground hover:text-teal hover:border-teal transition-colors"
            aria-label="Toggle theme"
            data-ocid="nav.toggle"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <Button
            type="button"
            className="hidden sm:flex bg-teal hover:bg-teal-bright text-background font-bold text-xs uppercase tracking-wider px-4 teal-glow transition-all"
            onClick={() => handleNavClick("#contact")}
            data-ocid="nav.primary_button"
          >
            Get In Touch
          </Button>

          <button
            type="button"
            className="lg:hidden w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-teal transition-colors py-2 border-b border-border/50"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Button
                  type="button"
                  className="w-full bg-teal hover:bg-teal-bright text-background font-bold text-xs uppercase tracking-wider mt-2"
                  onClick={() => handleNavClick("#contact")}
                  data-ocid="nav.primary_button"
                >
                  Get In Touch
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
