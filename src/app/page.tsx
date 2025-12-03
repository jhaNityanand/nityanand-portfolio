import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectsGrid from "../components/ProjectsGrid";
import HobbiesLanguages from "../components/HobbiesLanguages";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <ProjectsGrid />
        <HobbiesLanguages />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
