import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-500">Gustavo Queiroz</span>
      </h1>
      <h2 className="text-2xl md:text-3xl mb-6">
        Full-Stack Developer & Designer
      </h2>
      <p className="text-xl mb-8 max-w-2xl">
        I specialize in building scalable web applications using Node.js,
        TypeScript, React, and Vue.js.
      </p>
      <div className="flex space-x-4">
        <Button variant="outline" size="icon">
          <Github className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Mail className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
