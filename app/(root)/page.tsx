import About from "@/components/sections/home/About";
import Hero from "@/components/sections/home/Hero";
import Projects from "@/components/sections/home/Projects";
import Tech from "@/components/sections/home/Tech";

export default function Home() {
  return (
    <main>
      <Hero />
      <Tech />
      <About />
      <Projects />
    </main>
  );
}
