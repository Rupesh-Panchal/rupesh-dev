import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickStats from "./components/QuickStats";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

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
			</main>
		</>
	);
}

export default App;
