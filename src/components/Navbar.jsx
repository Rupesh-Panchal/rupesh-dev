import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText, FiMoon, FiUser, FiMenu } from "react-icons/fi";

function Navbar() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("rupesh_theme");
        if (savedTheme === "light") {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light-mode");
            setIsDark(false);
        } else {
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light-mode");
            localStorage.setItem("rupesh_theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark");
            localStorage.setItem("rupesh_theme", "dark");
            setIsDark(true);
        }
    };
	
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-card)]/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
			<div className="h-16 max-w-[1240px] mx-auto px-5 md:px-12 flex items-center justify-between">
				{/* Brand */}
				<a href="#about" className="group flex items-center gap-2.5 sm:gap-3 transition-transform duration-200 hover:-translate-y-[1px]">
					{/* RP Logo */}
                    <div className="w-10 h-10 rounded-[11px] bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-sm flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[var(--bg-hover)] group-hover:border-[var(--accent-primary)] ring-1 ring-[var(--accent-primary)]/20">
						<span className="font-bold text-[15px] tracking-tight text-[var(--text-primary)]">
							RP
						</span>
					</div>

					{/* Name + Role */}
					<div className="flex flex-col justify-center">
						<span className="font-bold text-[15px] sm:text-[16px] leading-tight text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-hover)] transition-colors">
							Rupesh Panchal
						</span>

						<span className="flex items-center gap-1.5 text-[11px] sm:text-[12px] font-medium text-[var(--text-muted)]/80 tracking-normal mt-0.5">
							<span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
							Full Stack Developer
						</span>
					</div>
				</a>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center gap-1 p-1 bg-[var(--bg-secondary)]/60 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
					<a href="#about" className="px-4 py-1.5 bg-[var(--accent-primary)] text-[var(--accent-text)] font-semibold text-[13px] rounded-full transition-all">About</a>
					<a href="#skills" className="px-4 py-1.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:bg-[var(--bg-hover)] rounded-full transition-all">Skills</a>
					<a href="#experience" className="px-4 py-1.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:bg-[var(--bg-hover)] rounded-full transition-all">Experience</a>
					<a href="#projects" className="px-4 py-1.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:bg-[var(--bg-hover)] rounded-full transition-all">Projects</a>
					<a href="#education" className="px-4 py-1.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:bg-[var(--bg-hover)] rounded-full transition-all">Education</a>
					<a href="#contact" className="px-4 py-1.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:bg-[var(--bg-hover)] rounded-full transition-all">Contact</a>
				</nav>

				{/* Right Controls */}
				<div className="flex items-center gap-2">
					{/* Resume */}
					<a href="#" aria-label="Download Resume" className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[12px] font-medium text-[var(--accent-text)] bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] hover:text-[var(--accent-text)] transition-all">
						<FiFileText className="w-3.5 h-3.5 mr-1.5" />
						Resume
					</a>

					{/* GitHub */}
					<a href="https://github.com/Rupesh-Panchal" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:bg-[var(--bg-hover)] transition-all">
						<FaGithub className="w-4 h-4" />
					</a>

					{/* LinkedIn */}
					<a href="https://linkedin.com/in/rupesh-panchal-528716261" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:bg-[var(--bg-hover)] transition-all">
						<FaLinkedin className="w-4 h-4" />
					</a>

					{/* Theme Toggle */}
					<button type="button" aria-label="Toggle color mode"  onClick={toggleTheme} className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:bg-[var(--bg-hover)] transition-all">
						<FiMoon className="w-[18px] h-[18px]" />
					</button>

					{/* Profile */}
					<div className="w-8 h-8 rounded-full bg-[var(--accent-primary)] flex items-center justify-center ml-1">
						<FiUser className="w-[18px] h-[18px] text-[var(--accent-text)]" />
					</div>

					{/* Mobile Menu */}
					<button type="button" aria-label="Toggle mobile menu" className="lg:hidden w-9 h-9 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:bg-[var(--bg-hover)] transition-all">
						<FiMenu className="w-5 h-5" />
					</button>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
