"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

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

export default function Contact() {
  const { t } = useTranslations();

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
          {t("contact.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp}>
            <motion.p
              className="mb-8 text-muted-foreground contact-info"
              variants={fadeInUp}
            >
              {t("contact.description")}
            </motion.p>

            <motion.div className="space-y-6" variants={container}>
              <motion.div
                className="flex items-center space-x-4 text-muted-foreground contact-info"
                variants={fadeInUp}
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span>contato.gustavoqlima@gmail.com</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 text-muted-foreground contact-info"
                variants={fadeInUp}
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span>+55 (11) 99999-9999</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 text-muted-foreground contact-info"
                variants={fadeInUp}
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>São Paulo, SP</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.form className="space-y-6" variants={fadeInUp}>
            <motion.div variants={fadeInUp}>
              <Input
                placeholder={t("contact.form.name")}
                className="bg-card border-border"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Input
                type="email"
                placeholder={t("contact.form.email")}
                className="bg-card border-border"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Textarea
                placeholder={t("contact.form.message")}
                rows={4}
                className="bg-card border-border"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button type="submit" className="w-full hover-scale">
                {t("contact.form.submit")}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
}
