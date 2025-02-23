"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <motion.div className="max-w-4xl mx-auto space-y-8" variants={fadeInUp}>
        <motion.h2
          className="text-3xl font-bold mb-8 text-gradient"
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg mb-6 text-muted-foreground leading-relaxed"
          variants={fadeInUp}
        >
          I'm a passionate Full-Stack Developer with over 4 years of experience
          building scalable and high-performance web applications. My expertise
          lies in Node.js, TypeScript, React, and Vue.js, enabling me to create
          robust systems and engaging frontend experiences.
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed"
          variants={fadeInUp}
        >
          I thrive in dynamic environments and enjoy taking projects from
          concept to deployment, always focusing on performance, security, and
          user experience. Whether developing RESTful APIs, creating responsive
          UIs, or optimizing database queries, I'm committed to delivering
          high-quality solutions that meet and exceed client expectations.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
