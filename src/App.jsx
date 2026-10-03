import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickStats from "./components/QuickStats";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function App() {
	return (
		<>
			<Background />
			<Navbar />
			
            <main className="relative z-10 min-h-screen">
				<Hero />
				<QuickStats />
				<AboutMe />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
                <Footer />
            </main>

            <ScrollProgress />
		</>
	);
}

export default App;
