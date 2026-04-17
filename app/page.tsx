import Header from "./components/Header";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />
      <Banner />
      <Stats />
      <Experience />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
