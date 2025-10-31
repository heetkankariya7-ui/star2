import { ProjectCard } from "./ProjectCard";
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

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl font-bold mb-16 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
