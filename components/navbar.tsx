"use client";

import { Moon, Sun, Languages, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/language-context";
import { useCustomTheme } from "@/contexts/theme-context";

const languages = [
  { code: "en", name: "English" },
  { code: "pt", name: "Português" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "it", name: "Italiano" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { currentLang, setLanguage } = useLanguage();
  const { isCyberpunk, toggleCyberpunk, disableCyberpunk } = useCustomTheme();

  const handleThemeChange = () => {
    disableCyberpunk();
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handleThemeChange}
          className="rounded-full"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={toggleCyberpunk}
          className={`rounded-full ${
            isCyberpunk ? "border-cyan-500 text-cyan-500" : ""
          }`}
        >
          <Zap className="h-5 w-5" />
          <span className="sr-only">Toggle cyberpunk theme</span>
        </Button>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Languages className="h-5 w-5" />
            <span className="sr-only">Change language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`cursor-pointer ${
                currentLang === lang.code ? "bg-primary/10" : ""
              }`}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
