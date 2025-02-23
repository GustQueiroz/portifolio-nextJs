"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with React and Firebase, featuring a responsive design and real-time updates.",
    tech: ["React", "Firebase", "Tailwind CSS", "Bootstrap", "ApexCharts"],
    github: "https://github.com/StarlineImports/Starline_App",
    live: "https://starline-imports.vercel.app",
  },
  {
    title: "Task Management System",
    description:
      "A robust task management system built with C# and .NET, featuring CRUD operations and user management.",
    tech: ["C#", ".NET", "SQL Server", "Entity Framework"],
    github: "https://github.com/GustQueiroz/SistemaDeTarefas",
    live: null,
  },
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
                <Button
                  variant="outline"
                  size="sm"
                  className="hover-scale"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.live && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover-scale"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
