import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl font-bold mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent inline-block"
          >
            Heet Shripal
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent inline-block"
          >
            Kankariya
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 font-serif italic"
        >
          Crafting art-meets-code web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link href="/projects">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg"
                style={{
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.2)",
                }}
                data-testid="button-view-work"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </Link>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
