"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";

export default function Projects() {
  const { t } = useTranslations();

  const projects = [
    {
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      tech: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
      github: "https://github.com/StarlineImports/Starline_App",
    },
    {
      title: t("projects.taskManager.title"),
      description: t("projects.taskManager.description"),
      tech: [
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: ".NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        },
      ],
      github: "https://github.com/GustQueiroz/SistemaDeTarefas",
      live: "https://sistema-de-tarefas.vercel.app",
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

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-8 px-8"
    >
      <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
        <motion.h2
          className="text-3xl font-bold mb-12 text-gradient text-center"
          variants={fadeInUp}
        >
          {t("projects.title")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={container}
        >
          <motion.div className="relative h-[500px] w-full" variants={fadeInUp}>
            <div className="absolute right-0 bottom-0 w-[100%] h-auto">
              <Image
                src="/macdocremasco.png"
                alt="Desktop View"
                width={800}
                height={450}
                className="object-contain"
              />
            </div>
            <div className="absolute right-[50%] top-[50%] w-[100%] h-auto z-10">
              <Image
                src="/celldocremasco.png"
                alt="Mobile View"
                width={700}
                height={1400}
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div className="relative h-[500px] w-full" variants={fadeInUp}>
            <div className="absolute right-0 bottom-0 w-[100%] h-auto">
              <Image
                src="/macentrevistaperfeita.png"
                alt="Desktop View"
                width={800}
                height={450}
                className="object-contain"
              />
            </div>
            <div className="absolute left-[50%] top-[50%] w-[100%] h-auto z-10">
              <Image
                src="/cellentrevistaperfeita.png"
                alt="Mobile View"
                width={700}
                height={1400}
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={container}
        >
          <motion.div className="relative h-[500px] w-full" variants={fadeInUp}>
            <div className="absolute right-0 bottom-0 w-[100%] h-auto">
              <Image
                src="/macmaxcrypto.png"
                alt="Desktop View"
                width={800}
                height={450}
                className="object-contain"
              />
            </div>
            <div className="absolute right-[50%] top-[50%] w-[100%] h-auto z-10">
              <Image
                src="/cellmaxcrypto.png"
                alt="Mobile View"
                width={700}
                height={1400}
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div className="relative h-[500px] w-full" variants={fadeInUp}>
            <div className="absolute right-0 bottom-0 w-[100%] h-auto">
              <Image
                src="/mactotemhub.png"
                alt="Desktop View"
                width={800}
                height={450}
                className="object-contain"
              />
            </div>
            <div className="absolute left-[50%] top-[50%] w-[100%] h-auto z-10">
              <Image
                src="/celltotemhub.png"
                alt="Mobile View"
                width={700}
                height={1400}
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="grid gap-8" variants={container}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-border hover-scale bg-card"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {project.tech.map((tech, idx) => (
                    <div key={idx} className="relative w-6 h-6">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
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
                      {t("projects.buttons.github")}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
