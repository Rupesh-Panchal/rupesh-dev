import { FiMapPin, FiArrowRight, FiDownload, FiTerminal, FiMonitor, FiServer, FiDatabase, } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
	return (
		<section id="about" className="max-w-[1240px] mx-auto px-5 md:px-12 pt-24 md:pt-20 pb-20 relative">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* LEFT COLUMN */}
				<div className="lg:col-span-7 flex flex-col space-y-6">
					{/* Main Heading */}
					<div className="space-y-3">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
							Hi, I'm{" "}
							<span className="text-[var(--accent-hover)] font-extrabold">
								Rupesh Panchal
							</span>
							.
						</h1>

						<p className="text-[22px] md:text-[26px] font-semibold text-[var(--text-secondary)] tracking-tight leading-snug">
							I build reliable web applications and backend
							systems.
						</p>
					</div>

					{/* Description */}
                    <div className="max-w-xl text-[var(--text-secondary)]">
                        <p className="text-[18px] leading-7">
                            Full Stack Developer with{" "}
                            <strong className="text-[var(--text-primary)] font-semibold">
                                1+ year of professional experience
                            </strong>{" "}
                            building production web applications, robust REST
                            APIs, enterprise business logic, and database-driven
                            systems.
                        </p>
                    </div>

					{/* Location + Availability */}
					<div className="flex items-center gap-3 py-2 flex-wrap">
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] shadow-sm">
							<FiMapPin className="w-4 h-4 text-[var(--accent-hover)] shrink-0" />
							<span className="text-[12px] leading-4 text-[var(--text-primary)] font-mono">
								Mumbai, India
							</span>
						</div>

						<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] shadow-sm">
							<span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
							<span className="text-[12px] leading-4 text-[#a9ccda] font-mono">
								Open to Full-Stack & Backend Roles
							</span>
						</div>
					</div>

                    {/* Action Buttons */}
                    <div className="pt-4">
                        <div className="grid grid-cols-2 gap-3 md:flex md:flex-nowrap md:items-center">
                            {/* View My Work */}
                            <a href="#projects" className="col-span-2 md:col-span-1 md:flex-1 min-w-0 h-11 px-5 md:px-6 rounded bg-[var(--accent-primary)] text-[var(--accent-text)] font-semibold text-[13px] shadow-md hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center gap-2 md:whitespace-nowrap">
                                <span>View My Work</span>
                                <FiArrowRight className="w-4 h-4 shrink-0" />
                            </a>

                            {/* Get In Touch */}
                            <a href="#contact" className="md:flex-1 min-w-0 h-11 px-3 md:px-4 rounded bg-[var(--bg-hover)] text-[var(--text-primary)] font-medium text-[13px] hover:bg-[var(--bg-secondary)] transition-all shadow-sm flex items-center justify-center md:whitespace-nowrap">
                                Get In Touch
                            </a>

                            {/* Resume */}
                            <a href="https://docs.google.com/document/d/1Bm0HV1IlATl0gAZNY3-efCHe6_e9I8qz4xg0nLYy45c/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="md:flex-1 min-w-0 h-11 px-3 md:px-4 rounded bg-[var(--bg-hover)] text-[var(--text-primary)] font-medium text-[13px] hover:bg-[var(--bg-secondary)] transition-all shadow-sm flex items-center justify-center gap-2 md:whitespace-nowrap">
                                <span>Resume</span>
                                <FiDownload className="w-4 h-4 shrink-0" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/Rupesh-Panchal" target="_blank" rel="noopener noreferrer" className="md:flex-1 min-w-0 h-11 px-3 md:px-4 rounded bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--accent-hover)] transition-colors text-[13px] font-medium flex items-center justify-center gap-2 md:whitespace-nowrap">
                                <FaGithub className="w-4 h-4 shrink-0" />
                                <span>GitHub</span>
                            </a>

                            {/* LinkedIn */}
                            <a href="https://linkedin.com/in/rupesh-panchal-528716261" target="_blank" rel="noopener noreferrer" className="md:flex-1 min-w-0 h-11 px-3 md:px-4 rounded bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--accent-hover)] transition-colors text-[13px] font-medium flex items-center justify-center gap-2 md:whitespace-nowrap">
                                <FaLinkedin className="w-4 h-4 shrink-0" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
				</div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-5">
                    <div className="rounded-xl bg-[var(--bg-secondary)] p-5 shadow-xl border border-[var(--border-color)]">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#93000a]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#dec29e]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)]"></span>

                                <span className="ml-2 text-[11px] text-[var(--text-muted)] font-mono">
                                    system.architecture.spec
                                </span>
                            </div>

                            <span className="px-2 py-0.5 rounded bg-[var(--bg-card)] text-[#dec29e] text-[11px] font-mono">
                                BUILD FLOW
                            </span>
                        </div>

                        {/* Layers */}
                        <div className="space-y-3 pt-4">
                            {/* Layer 1 */}
                            <div className="p-4 rounded-lg bg-[var(--bg-card)]">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[var(--bg-hover)] flex items-center justify-center shrink-0">
                                        <FiMonitor className="w-4.5 h-4.5 text-[var(--accent-hover)]" />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-[13px] text-[var(--text-primary)]">
                                            User Interface
                                        </h4>

                                        <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                                            Clean, responsive, and intuitive experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="flex justify-center text-[var(--text-muted)] text-[12px]">
                                ↓
                            </div>

                            {/* Layer 2 */}
                            <div className="p-4 rounded-lg bg-[var(--bg-hover)]">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[var(--bg-card)] flex items-center justify-center shrink-0">
                                        <FiServer className="w-4.5 h-4.5 text-[#a9ccda]" />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-[13px] text-[var(--text-primary)]">
                                            Application Logic
                                        </h4>

                                        <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                                            Reliable APIs, business rules, and integrations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="flex justify-center text-[var(--text-muted)] text-[12px]">
                                ↓
                            </div>

                            {/* Layer 3 */}
                            <div className="p-4 rounded-lg bg-[var(--bg-card)]">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[var(--bg-hover)] flex items-center justify-center shrink-0">
                                        <FiDatabase className="w-4.5 h-4.5 text-[#dec29e]" />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-[13px] text-[var(--text-primary)]">
                                            Data & Systems
                                        </h4>

                                        <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                                            Structured data, performance, and scalable systems.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
			</div>
		</section>
	);
}

export default Hero;
