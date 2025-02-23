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
          Sobre Mim
        </motion.h2>

        <motion.p
          className="text-lg mb-6 text-muted-foreground leading-relaxed"
          variants={fadeInUp}
        >
          Sou um Desenvolvedor Full-Stack apaixonado com mais de 4 anos de
          experiência na construção de aplicações web escaláveis e de alta
          performance. Minha expertise está em Node.js, TypeScript, React e
          Vue.js, permitindo-me criar sistemas robustos e experiências frontend
          envolventes.
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed"
          variants={fadeInUp}
        >
          Prospero em ambientes dinâmicos e gosto de levar projetos do conceito
          ao deploy, sempre focando em performance, segurança e experiência do
          usuário. Seja desenvolvendo APIs RESTful, criando UIs responsivas ou
          otimizando queries de banco de dados, estou comprometido em entregar
          soluções de alta qualidade que atendam e superem as expectativas dos
          clientes.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
