"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";

export default function Hero() {
  const { t } = useTranslations();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="text-blue-500">Gustavo Queiroz</span>
      </h1>
      <h2 className="text-2xl md:text-3xl mb-6">{t("hero.role")}</h2>
      <p className="text-xl mb-8 max-w-2xl">{t("hero.description")}</p>
      <div className="flex space-x-4">
        <Button
          variant="outline"
          size="icon"
          asChild
          className="rounded-full border-blue-500 hover:bg-blue-500/10 hover:border-blue-600 transition-colors duration-300 p-4 h-14 w-14"
        >
          <a
            href="https://github.com/GustQueiroz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-8 w-8 text-blue-500" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          asChild
          className="rounded-full border-blue-500 hover:bg-blue-500/10 hover:border-blue-600 transition-colors duration-300 p-4 h-14 w-14"
        >
          <a
            href="https://www.linkedin.com/in/gust-queiroz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-8 w-8 text-blue-500" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          asChild
          className="rounded-full border-blue-500 hover:bg-blue-500/10 hover:border-blue-600 transition-colors duration-300 p-4 h-14 w-14"
        >
          <a href="mailto:contato.gustavoqlima@gmail.com">
            <Mail className="h-8 w-8 text-blue-500" />
          </a>
        </Button>
      </div>
    </section>
  );
}
