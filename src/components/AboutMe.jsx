import { FiMapPin, FiCode, FiDatabase, FiShield, FiLayers, FiGitBranch, FiServer, } from "react-icons/fi";

function AboutMe() {
	const strengths = [
		{
			icon: FiCode,
			title: "REST API Development",
			description: "Building structured and reliable APIs.",
			color: "var(--accent-primary)",
		},
		{
			icon: FiDatabase,
			title: "Database Optimization",
			description: "Writing efficient SQL and improving database workflows.",
			color: "#dec29e",
		},
		{
			icon: FiShield,
			title: "Authentication & RBAC",
			description: "Implementing secure authentication and role-based access.",
			color: "var(--accent-primary)",
		},
		{
			icon: FiLayers,
			title: "Backend Architecture",
			description: "Designing maintainable backend systems and business logic.",
			color: "#dec29e",
		},
		{
			icon: FiGitBranch,
			title: "Full-Stack Integration",
			description: "Connecting frontend interfaces with reliable backend APIs.",
			color: "var(--accent-primary)",
		},
		{
			icon: FiServer,
			title: "Production Systems",
			description: "Building practical applications for real-world workflows.",
			color: "#dec29e",
		},
	];

	return (
		<section id="about-narrative" className="relative max-w-[1240px] mx-auto px-5 md:px-12 py-16">
			<div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,32%)_1fr] gap-8 lg:gap-12 items-stretch">
				{/* LEFT — PROFILE CARD */}
				<div className="w-full flex flex-col">
					<div className="w-full h-full flex flex-col justify-between rounded-xl p-4 sm:p-5 relative overflow-hidden transition-all duration-300 group"
						style={{
							backgroundColor: "var(--bg-card)",
							border: "1px solid var(--border-color)",
							boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
						}}
					>
						{/* Profile image area */}
						<div>
							<div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--bg-hover)", }}>
                                {/* Dark mode image */}
                                <img src="/rupesh-profile-dark-mode.png" alt="Rupesh Panchal - Full Stack Developer" className="profile-image-dark w-full h-full object-cover object-center" />

                                {/* Light mode image */}
                                <img src="/rupesh-profile-light-mode.png" alt="Rupesh Panchal - Full Stack Developer" className="profile-image-light hidden w-full h-full object-cover object-center" />

								{/* Bottom image information */}
								<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg backdrop-blur-md" style={{ backgroundColor: "rgba(13, 16, 20, 0.72)", border: "1px solid rgba(255,255,255,0.05)", }}>
									<span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "var(--accent-primary)", }}>
										<span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-primary)", }} />
										Open to work
									</span>

									<span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
										Mumbai, IN
									</span>
								</div>
							</div>

							{/* Profile information */}
							<div className="pt-5 space-y-3">
								<div className="space-y-1">
									<h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: "var(--text-primary)" }}>
										RUPESH PANCHAL
									</h3>

									<p className="text-sm font-medium" style={{ color: "var(--accent-primary)", }}>
										Full Stack Developer
									</p>
								</div>

								<div className="flex flex-wrap items-center gap-2 pt-1">
									<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
										style={{
											backgroundColor:
												"var(--bg-secondary)",
											color: "var(--text-secondary)",
											border: "1px solid var(--border-color)",
										}}
									>
										<FiMapPin className="w-3.5 h-3.5" style={{ color: "var(--accent-primary)", }} />
										Mumbai, India
									</div>
								</div>
							</div>
						</div>

						{/* Bottom metadata */}
						<div className="pt-4 mt-4 flex flex-wrap gap-2 text-xs font-mono" style={{ borderTop: "1px solid var(--border-color)", }}>
							<span className="px-2.5 py-1 rounded"
								style={{
									backgroundColor: "var(--bg-secondary)",
									color: "#dec29e",
									border: "1px solid rgba(222,194,158,0.2)",
								}}
							>
								Backend Focus
							</span>

							<span className="px-2.5 py-1 rounded"
								style={{
									backgroundColor: "var(--bg-secondary)",
									color: "var(--text-secondary)",
									border: "1px solid var(--border-color)",
								}}
							>
								Production Web Applications
							</span>
						</div>
					</div>
				</div>

				{/* RIGHT — ABOUT CONTENT */}
				<div className="w-full flex flex-col justify-start">
					<span className="text-[11px] uppercase tracking-wider font-mono" style={{ color: "#dec29e" }}>
						01. ABOUT ME
					</span>

					<h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-snug mt-3 mb-5" style={{ color: "var(--text-primary)" }}>
						I build production web applications with a backend-first
						mindset.
					</h2>

					<p className="text-[15px] leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
						I'm a Full Stack Developer with{" "}
						<strong style={{ color: "var(--text-primary)" }}>
							1+ year of professional experience
						</strong>{" "}
						working on production applications at{" "}
						<strong style={{ color: "var(--accent-primary)" }}>
							ENATS Technology LLP
						</strong>
						. My work focuses on building clean business logic, REST
						APIs, database-driven systems, admin interfaces, and
						reliable backend workflows.
					</p>

					<p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
						I work across the stack, with a stronger focus on
						backend engineering, database optimization,
						authentication, and API development while building
						practical and maintainable web applications.
					</p>

					{/* CORE STRENGTHS */}
					<span className="text-xs font-semibold tracking-wider uppercase font-mono block mb-4" style={{ color: "var(--text-muted)" }}>
						CORE STRENGTHS
					</span>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
						{strengths.map((strength) => {
							const Icon = strength.icon;

							return (
								<div key={strength.title} className="p-4 rounded-xl flex flex-col justify-between space-y-2 min-h-[110px] transition-all duration-200"
									style={{
										backgroundColor: "var(--bg-card)",
										border: "1px solid var(--border-color)",
									}}
								>
									<div className="flex items-center gap-2">
										<Icon className="w-5 h-5 shrink-0" style={{ color: strength.color }} />

										<h4 className="text-sm font-semibold" style={{ color: "var(--text-primary)", }}>
											{strength.title}
										</h4>
									</div>

									<p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)", }}>
										{strength.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
