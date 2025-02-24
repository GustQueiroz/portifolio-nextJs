"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";
import { Calendar, CheckCircle } from "lucide-react";

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

export default function Journey() {
  const { t } = useTranslations();

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <motion.div className="max-w-4xl mx-auto space-y-20" variants={fadeInUp}>
        <div>
          <motion.h2
            className="text-3xl font-bold mb-12 text-gradient text-center"
            variants={fadeInUp}
          >
            {t("whyMe.title")}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
          >
            {t("whyMe.items").map((item, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover-scale"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.h2
            className="text-3xl font-bold mb-12 text-gradient text-center"
            variants={fadeInUp}
          >
            {t("journey.title")}
          </motion.h2>

          <motion.div className="space-y-16" variants={container}>
            {t("journey.items").map((item: any, index: number) => (
              <motion.div
                key={index}
                className={`flex gap-4 items-start ${
                  index % 2 === 0 ? "justify-start" : "justify-end text-right"
                }`}
                variants={fadeInUp}
              >
                <div
                  className={`flex gap-4 items-start ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-primary font-medium">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
