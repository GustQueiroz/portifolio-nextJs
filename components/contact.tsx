"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    emailjs.init("EhOvEQ7civa6kTQua");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_pzkty5f",
        "template_jfvh2ng",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "EhOvEQ7civa6kTQua"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

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
                <span>+55 (11) 94495-3562</span>
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

          <motion.form
            className="space-y-6"
            variants={fadeInUp}
            onSubmit={handleSubmit}
          >
            <motion.div variants={fadeInUp}>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form.name")}
                className="bg-card border-border"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.email")}
                className="bg-card border-border"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.message")}
                rows={4}
                className="bg-card border-border"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                type="submit"
                className="w-full hover-scale"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("contact.form.sending") || "Enviando..."
                  : t("contact.form.submit")}
              </Button>

              {submitStatus === "success" && (
                <p className="mt-2 text-green-500 text-center">
                  {t("contact.form.success") || "Mensagem enviada com sucesso!"}
                </p>
              )}

              {submitStatus === "error" && (
                <p className="mt-2 text-red-500 text-center">
                  {t("contact.form.error") ||
                    "Erro ao enviar mensagem. Tente novamente."}
                </p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
}
