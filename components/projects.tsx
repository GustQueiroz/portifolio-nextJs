"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Plataforma E-commerce",
    description:
      "Uma solução e-commerce full-stack construída com Node.js, React e MongoDB.",
    tech: ["Node.js", "React", "MongoDB", "Express.js"],
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    title: "App de Gerenciamento de Tarefas",
    description:
      "Uma aplicação de gerenciamento de tarefas com Vue.js e Firebase com atualizações em tempo real.",
    tech: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    github: "https://github.com/yourusername/task-management-app",
    live: "https://task-app-demo.vercel.app",
  },
  // Add more projects as needed
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

const container = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
        <motion.h2
          className="text-3xl font-bold mb-12 text-gradient text-center"
          variants={fadeInUp}
        >
          Projetos
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover-scale"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="hover-scale">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="hover-scale">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
