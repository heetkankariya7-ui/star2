import { ProjectCard } from '../ProjectCard'
import cosmicCanvasImg from "@assets/generated_images/Cosmic_Canvas_project_screenshot_2df27d41.png";

export default function ProjectCardExample() {
  return (
    <div className="bg-gradient-to-b from-[#0B3D91] to-[#1C1C3C] p-8">
      <div className="max-w-sm mx-auto">
        <ProjectCard
          title="Cosmic Canvas"
          description="A creative drawing web app where users paint swirling constellations on a virtual night sky."
          image={cosmicCanvasImg}
          github="https://github.com/heetkankariya/cosmic-canvas"
          demo="https://cosmic-canvas-demo.netlify.app/"
          index={0}
        />
      </div>
    </div>
  )
}
