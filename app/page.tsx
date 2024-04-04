import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 lg:px-[5rem]">
      <Intro />
      <Projects />
      <Experience />
      <Skills />
    </main>
  );
}
