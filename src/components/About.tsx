import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        <h2 className="font-serif text-5xl font-bold mb-12 text-center">
          About Me
        </h2>
        <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/90">
          <p className="text-lg md:text-xl text-card-foreground leading-relaxed">
            I'm Heet Shripal Kankariya, a student at Father Agnel Institute, Bandra. 
            I believe making mistakes is an essential part of learning, and I enjoy 
            turning that learning into creative, web-based projects that blend design 
            and code. My passion lies in creating digital experiences that are both 
            beautiful and functional, inspired by art and driven by technology.
          </p>
        </Card>
      </motion.div>
    </section>
  );
}
