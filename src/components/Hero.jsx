import { FiMapPin, FiArrowRight, FiTerminal, FiMonitor, FiServer, FiDatabase, } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
	return (
		<section id="about" className="max-w-[1240px] mx-auto px-5 md:px-12 pt-24 md:pt-20 pb-20 relative">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* LEFT COLUMN */}
				<div className="lg:col-span-7 flex flex-col space-y-6">
					{/* Status */}
					<div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[var(--bg-hover)] shadow-sm">
						<span className="w-2 h-2 rounded-full bg-[#dec29e] animate-pulse"></span>
						<span className="text-[11px] leading-[14px] text-[var(--text-secondary)] uppercase tracking-wider font-mono">
							Full Stack Developer · 1+ Year Experience
						</span>
					</div>

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
					<div className="space-y-3 max-w-xl text-[var(--text-secondary)]">
						<p className="text-[18px] leading-7">
							Full Stack Developer with{" "}
							<strong className="text-[var(--text-primary)] font-semibold">
								1+ year of professional experience
							</strong>{" "}
							building production web applications, robust REST
							APIs, enterprise business logic, and database-driven
							systems.
						</p>

						<p className="text-[15px] leading-6 text-[var(--text-muted)]">
							Specialized in scalable backend architectures,
							database query tuning, and seamless full-stack
							integrations from interactive interfaces down to raw
							database tables.
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

					{/* Technical Stack */}
					<div className="space-y-2 pt-1">
						<span className="text-[11px] leading-[14px] text-[var(--text-muted)] uppercase tracking-wider block font-mono">
							Core Technical Arsenal
						</span>

						<div className="flex flex-wrap gap-1.5">
							{["React.js", "Next.js", "TypeScript", "Node.js", "Python", "Django", "PHP", "Laravel", "PostgreSQL", "MySQL",].map((tech) => (
								<span key={tech} className="px-2.5 py-1 rounded bg-[var(--bg-hover)] text-[var(--text-secondary)] text-[13px] leading-5 font-mono">
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-wrap items-center gap-3 pt-4">
						<a href="#projects" className="px-6 py-2.5 rounded bg-[var(--accent-primary)] text-[var(--accent-text)] font-semibold text-[13px] shadow-md hover:bg-[var(--accent-hover)] transition-all flex items-center gap-2">
							<span>View My Work</span>
							<FiArrowRight className="w-4 h-4" />
						</a>

						<a href="#contact" className="px-6 py-2.5 rounded bg-[var(--bg-hover)] text-[var(--text-primary)] font-medium text-[13px] hover:bg-[var(--bg-secondary)] transition-all shadow-sm">
							Get In Touch
						</a>

						<div className="flex items-center gap-2 ml-auto sm:ml-0">
							<a aria-label="GitHub Profile" href="https://github.com/Rupesh-Panchal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--accent-hover)] flex items-center justify-center transition-colors">
								<FaGithub className="w-4 h-4" />
							</a>

							<a aria-label="LinkedIn Profile" href="https://linkedin.com/in/rupesh-panchal-528716261" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--accent-hover)] flex items-center justify-center transition-colors">
								<FaLinkedin className="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-5 flex flex-col space-y-4">
					{/* Architecture Card */}
					<div className="rounded-xl bg-[var(--bg-secondary)] p-5 shadow-xl relative overflow-hidden border border-[var(--border-color)]">
						{/* Header */}
						<div className="flex items-center justify-between pb-3">
							<div className="flex items-center gap-2">
								<span className="w-2.5 h-2.5 rounded-full bg-[#93000a]"></span>
								<span className="w-2.5 h-2.5 rounded-full bg-[#dec29e]"></span>
								<span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)]"></span>
								<span className="ml-2 text-[11px] leading-[14px] text-[var(--text-muted)] font-mono">
									system.architecture.spec
								</span>
							</div>

							<span className="px-2 py-0.5 rounded bg-[var(--bg-card)] text-[#dec29e] text-[13px] font-mono">
								LIVE MONITOR
							</span>
						</div>

						{/* Architecture Layers */}
						<div className="space-y-3 pt-2">
							{/* Client */}
							<div className="p-3.5 rounded-lg bg-[var(--bg-card)] transition-all hover:bg-[var(--bg-hover)] shadow-sm">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2.5">
										<FiMonitor className="text-[var(--accent-hover)] w-5 h-5" />

										<div>
											<h4 className="font-semibold text-[13px] text-[var(--text-primary)]">
                                                Client & Presentation Tier
                                            </h4>
											<p className="text-[11px] text-[var(--text-secondary)] font-mono">
												Next.js 14 · React 18 ·
												TypeScript · SPA / PWA
											</p>
										</div>
									</div>

									<span className="text-[11px] text-[var(--text-muted)] font-mono">
										SSR / CSR
									</span>
								</div>
							</div>

							{/* Connector */}
							<div className="flex items-center justify-center py-0.5 text-[var(--text-muted)]">
								<span className="text-[11px] text-[#dec29e] font-mono">
									↓ REST API / JSON Tokens (JWT & RBAC)
								</span>
							</div>

							{/* API */}
							<div className="p-3.5 rounded-lg bg-[var(--bg-hover)] shadow-sm relative overflow-hidden">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2.5">
										<FiServer className="text-[#a9ccda] w-5 h-5" />

										<div>
											<h4 className="font-semibold text-[13px] text-[var(--text-primary)]">
												API Gateway & Business Logic
											</h4>

											<p className="text-[11px] text-[var(--text-secondary)] font-mono">
												Django REST · Node.js / Express
												· PHP MVC
											</p>
										</div>
									</div>

									<span className="px-1.5 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--accent-hover)] text-[11px] font-mono">
										Auth + RBAC
									</span>
								</div>
							</div>

							{/* Connector */}
							<div className="flex items-center justify-center py-0.5 text-[var(--text-muted)]">
								<span className="text-[11px] text-[var(--accent-hover)] font-mono">
									↓ Celery Task Queue · Async Workers · ORM
								</span>
							</div>

							{/* Database */}
							<div className="p-3.5 rounded-lg bg-[var(--bg-card)] transition-all hover:bg-[var(--bg-hover)] shadow-sm">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2.5">
										<FiDatabase className="text-[#dec29e] w-5 h-5" />

										<div>
											<h4 className="font-semibold text-[13px] text-[var(--text-primary)]">
												Persistence & Cache Tier
											</h4>

											<p className="text-[11px] text-[var(--text-secondary)] font-mono">
												PostgreSQL · MySQL · Redis ·
												Indexed Queries
											</p>
										</div>
									</div>

									<span className="text-[11px] text-[#dec29e] font-mono">
										ACID
									</span>
								</div>
							</div>
						</div>

						{/* Terminal */}
						<div className="mt-4 pt-3 bg-[var(--bg-primary)] p-3 rounded text-[11px] text-[var(--text-secondary)] font-mono space-y-1.5">
							<div className="flex items-center justify-between text-[var(--text-muted)]">
								<span>$ api-latency-benchmark</span>
								<span className="text-[#dec29e]">
									-38% exec time
								</span>
							</div>

							<div className="flex items-center gap-2 text-[var(--accent-hover)]">
								<span className="inline-block w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-ping"></span>
								<span>
									POST /api/v1/auth/session 200 OK • 24ms
								</span>
							</div>

							<div className="text-[var(--text-muted)]">
								Indexed lookup &gt; SELECT * FROM users WHERE
								role_id = 4 LIMIT 1;
							</div>
						</div>
					</div>

					{/* Engineering Quote */}
					<div className="p-4 rounded-xl bg-[var(--bg-secondary)] shadow-sm flex items-start gap-3 border border-[var(--border-color)]">
						<FiTerminal className="text-[#dec29e] w-[22px] h-[22px] shrink-0 mt-0.5" />

						<p className="text-[13px] leading-5 text-[var(--text-secondary)]">
							“Engineering software that survives scale means
							treating clean data models, explicit error handling,
							and predictable API contracts as first-class
							citizens.”
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
