import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { mutate, isPending, isSuccess, isError, reset } =
    useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => setForm({ name: "", email: "", message: "" }),
    });
  };

  return (
    <section id="contact" className="relative py-24">
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
            Open to Opportunities
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 uppercase tracking-wide text-foreground">
            Get In Touch
          </h2>
          <div className="mt-3 mx-auto w-16 h-0.5 bg-teal" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — pitch + details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display font-bold text-xl uppercase tracking-wide text-foreground">
              Looking for an MES Consultant or MES Integration Engineer?
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I&apos;m open to opportunities where I can contribute my expertise
              in MES implementation, system integration, and industrial
              automation.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              If you&apos;re hiring or would like to discuss potential roles,
              feel free to connect with me on LinkedIn or reach out directly. I
              typically respond within 24 hours.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href="https://www.linkedin.com/in/adarsh-p-7103701a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-teal transition-colors group"
                data-ocid="contact.link"
              >
                <div className="w-9 h-9 rounded border border-border group-hover:border-teal/50 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>linkedin.com/in/adarsh-p-7103701a1</span>
              </a>
              <a
                href="mailto:adarshpatuathi@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-teal transition-colors group"
                data-ocid="contact.link"
              >
                <div className="w-9 h-9 rounded border border-border group-hover:border-teal/50 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>adarshpatuathi@gmail.com</span>
              </a>
              <a
                href="tel:+918921749345"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-teal transition-colors group"
                data-ocid="contact.link"
              >
                <div className="w-9 h-9 rounded border border-border group-hover:border-teal/50 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 8921749345</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  Adarsh Bhavan, Keezhathur, Mambaram P.O.,
                  <br />
                  Kannur, Kerala, India — 670741
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-card border border-border rounded-lg p-8 space-y-5"
              data-ocid="contact.dialog"
            >
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-name"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Name
                </Label>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={(e) => {
                    reset();
                    setForm((p) => ({ ...p, name: e.target.value }));
                  }}
                  placeholder="Your full name"
                  required
                  className="bg-background border-border focus:border-teal transition-colors"
                  data-ocid="contact.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-email"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    reset();
                    setForm((p) => ({ ...p, email: e.target.value }));
                  }}
                  placeholder="your@email.com"
                  required
                  className="bg-background border-border focus:border-teal transition-colors"
                  data-ocid="contact.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-message"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => {
                    reset();
                    setForm((p) => ({ ...p, message: e.target.value }));
                  }}
                  placeholder="Tell me about the role or opportunity..."
                  rows={5}
                  required
                  className="bg-background border-border focus:border-teal transition-colors resize-none"
                  data-ocid="contact.textarea"
                />
              </div>

              {isSuccess && (
                <div
                  className="flex items-center gap-2 text-teal text-sm"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle className="w-4 h-4" />
                  Message sent! I&apos;ll be in touch within 24 hours.
                </div>
              )}
              {isError && (
                <div
                  className="flex items-center gap-2 text-destructive text-sm"
                  data-ocid="contact.error_state"
                >
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again.
                </div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-teal hover:bg-teal-bright text-background font-bold uppercase tracking-wider text-sm py-5 teal-glow transition-all"
                data-ocid="contact.submit_button"
              >
                {isPending ? (
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                ) : (
                  <Send className="mr-2 w-4 h-4" />
                )}
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
