import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/heetkankariya", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/heetkankariya", label: "LinkedIn" },
    { icon: Mail, href: "mailto:heetkankariya7@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t backdrop-blur-md bg-card/80 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                size="icon"
                variant="ghost"
                asChild
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm text-muted-foreground text-center"
        >
          Inspired by Van Gogh's Starry Night
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted-foreground"
        >
          © 2025 Heet Shripal Kankariya. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
