import { motion } from "framer-motion";
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  index: number;
}

export function ProjectCard({ title, description, image, github, demo, index }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card 
        className="overflow-hidden h-full flex flex-col hover-elevate backdrop-blur-sm bg-card/90"
        data-testid={`card-project-${index}`}
      >
        <div className="aspect-video overflow-hidden relative group">
          <motion.img
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-4"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="text-white font-semibold"
            >
              Click to explore
            </motion.p>
          </motion.div>
        </div>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto gap-4 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              asChild
              data-testid={`button-github-${index}`}
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              data-testid={`button-demo-${index}`}
            >
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
