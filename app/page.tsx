"use client";

import { motion } from "framer-motion";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Journey from "@/components/journey";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background"
    >
      <motion.div
        {...fadeInUp}
        className="space-y-24 px-4 md:px-6 py-8 md:py-12"
      >
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </motion.main>
  );
}
