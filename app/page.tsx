import Image from "next/image";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 lg:px-96">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </main>
  );
}
