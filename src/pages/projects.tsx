import { motion } from "framer-motion";
import { StarryBackground } from "@/components/StarryBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import cosmicCanvasImg from "@assets/generated_images/Cosmic_Canvas_project_screenshot_2df27d41.png";
import lunaTrackerImg from "@assets/generated_images/LunaTracker_app_interface_203ad520.png";
import auroraBlogImg from "@assets/generated_images/Aurora_Blog_interface_f6ca8259.png";

const projects = [
  {
    title: "Cosmic Canvas",
    description: "A creative drawing web app where users paint swirling constellations on a virtual night sky.",
    image: cosmicCanvasImg,
    github: "https://github.com/heetkankariya/cosmic-canvas",
    demo: "https://cosmic-canvas-demo.netlify.app/",
  },
  {
    title: "LunaTracker",
    description: "A React-based moon phase and stargazing planner showing real-time lunar data.",
    image: lunaTrackerImg,
    github: "https://github.com/heetkankariya/lunatracker",
    demo: "https://lunatracker.netlify.app/",
  },
  {
    title: "Aurora Blog",
    description: "A minimalist personal blog engine where posts glow like northern lights.",
    image: auroraBlogImg,
    github: "https://github.com/heetkankariya/aurora-blog",
    demo: "https://aurorablog.vercel.app/",
  },
];

export default function Projects() {
  return (
    <>
      <StarryBackground />
      <Navbar />
      <main className="min-h-screen px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl font-bold mb-16 text-center"
          >
            Featured Projects
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
          >
            A collection of my creative explorations in web development, where art meets code
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
