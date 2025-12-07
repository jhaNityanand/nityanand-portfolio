import Header from "../../components/Header";
import ProjectsGrid from "../../components/ProjectsGrid";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Projects — Nityanand Jha",
};

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
