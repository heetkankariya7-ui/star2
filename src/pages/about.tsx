import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { StarryBackground } from "@/components/StarryBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Code, Palette, Lightbulb, Rocket } from "lucide-react";

const skills = [
  { icon: Code, title: "Web Development", description: "Building responsive, modern web applications" },
  { icon: Palette, title: "Design", description: "Creating beautiful user interfaces" },
  { icon: Lightbulb, title: "Creative Problem Solving", description: "Turning ideas into reality" },
  { icon: Rocket, title: "Innovation", description: "Pushing boundaries with new technologies" },
];

export default function About() {
  return (
    <>
      <StarryBackground />
      <Navbar />
      <main className="min-h-screen px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl font-bold mb-16 text-center"
          >
            About Me
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-12 backdrop-blur-sm bg-card/90 mb-16">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl leading-relaxed mb-6"
              >
                I'm Heet Shripal Kankariya, a student at Father Agnel Institute, Bandra. 
                I believe making mistakes is an essential part of learning, and I enjoy 
                turning that learning into creative, web-based projects that blend design 
                and code.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl leading-relaxed"
              >
                My passion lies in creating digital experiences that are both 
                beautiful and functional, inspired by art and driven by technology.
              </motion.p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-8 backdrop-blur-sm bg-card/90 h-full hover-elevate">
                  <skill.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
