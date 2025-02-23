"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  "Node.js",
  "TypeScript",
  "React",
  "Vue.js",
  "Express.js",
  "NestJS",
  "GraphQL",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Skills() {
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
          Habilidades
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center p-4 rounded-lg border border-border hover-scale bg-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span className="text-card-foreground">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
