"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export default function About() {
  const { t } = useTranslations();

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
          {t("about.title")}
        </motion.h2>

        <motion.p
          className="text-lg mb-6 text-muted-foreground leading-relaxed"
          variants={fadeInUp}
        >
          {t("about.description1")}
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed"
          variants={fadeInUp}
        >
          {t("about.description2")}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
