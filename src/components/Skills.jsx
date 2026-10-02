import { useState } from "react";
import { FiServer, FiMonitor, FiDatabase, FiCode } from "react-icons/fi";

function Skills() {
	const [activeTab, setActiveTab] = useState("backend");

	const tabs = [
		{
			id: "backend",
			number: "01 —",
			label: "Backend & APIs",
			icon: FiServer,
			iconColor: "var(--accent-primary)",
			title: "Backend & APIs",
			description:
				"Building REST APIs, backend business logic, authentication and production workflows.",
			category: "Core Frameworks & Architecture",
			skills: [
				"Node.js",
				"Express.js",
				"Django REST",
				"Laravel",
				"PHP MVC",
				"JWT / RBAC",
				"Celery",
			],
		},
		{
			id: "frontend",
			number: "02 —",
			label: "Frontend",
			icon: FiMonitor,
			iconColor: "#a9ccda",
			title: "Frontend Development",
			description:
				"Building responsive admin portals and production web interfaces.",
			category: "UI Layer & Interactive Workflows",
			skills: [
				"React.js",
				"Next.js",
				"TypeScript",
				"JavaScript",
				"Tailwind CSS",
				"Bootstrap",
			],
		},
		{
			id: "databases",
			number: "03 —",
			label: "Databases",
			icon: FiDatabase,
			iconColor: "#dec29e",
			title: "Databases & Data Layer",
			description:
				"Working with relational and document databases, query optimization and ORM-based data access.",
			category: "Data Storage & Optimization",
			skills: [
				"PostgreSQL",
				"MySQL",
				"MongoDB",
				"Mongoose",
				"SQL",
				"Django ORM",
				"Query Optimization",
			],
		},
		{
			id: "tools",
			number: "04 —",
			label: "Languages & Tools",
			icon: FiCode,
			iconColor: "var(--accent-primary)",
			title: "Languages & Tools",
			description:
				"Core programming languages and engineering tooling deployed in production environments.",
			category: "Programming Languages",
			skills: [
				"JavaScript",
				"TypeScript",
				"Python",
				"PHP",
				"SQL",
				"Git",
				"GitHub",
				"Postman",
				"Redis",
			],
		},
	];

	const activeSkill = tabs.find((tab) => tab.id === activeTab);
	const ActiveIcon = activeSkill.icon;

	return (
		<section
			id="skills"
			className="relative max-w-[1240px] mx-auto px-5 md:px-12 py-16"
		>
			{/* Section Header */}
			<div className="flex flex-col space-y-2 mb-8">
				<span
					className="text-[11px] uppercase tracking-wider font-mono"
					style={{ color: "#dec29e" }}
				>
					02 // TECHNICAL CAPABILITIES
				</span>

				<h2
					className="text-3xl md:text-4xl font-semibold tracking-tight"
					style={{ color: "var(--text-primary)" }}
				>
					Skills & Technologies
				</h2>

				<p
					className="text-base max-w-2xl leading-relaxed"
					style={{ color: "var(--text-secondary)" }}
				>
					Focused on backend engineering, APIs, databases, and modern
					full-stack development.
				</p>
			</div>

			{/* Main Skills Card */}
			<div
				className="rounded-xl overflow-hidden transition-all duration-300"
				style={{
					backgroundColor: "var(--bg-card)",
					border: "1px solid var(--border-color)",
					boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.45)",
				}}
			>
				{/* Tabs Header */}
				<div
					className="border-b px-4 md:px-6 pt-3 overflow-x-auto"
					style={{
						borderColor: "var(--border-color)",
						backgroundColor: "var(--bg-secondary)",
					}}
				>
					<div className="flex items-center gap-2 min-w-max">
						{tabs.map((tab) => {
							const isActive = activeTab === tab.id;

							return (
								<button
									key={tab.id}
									type="button"
									onClick={() => setActiveTab(tab.id)}
									className="shrink-0 px-4 md:px-5 py-3 rounded-t-lg text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 flex items-center gap-2"
									style={{
										borderColor: isActive
											? "var(--accent-primary)"
											: "transparent",
										color: isActive
											? "var(--text-primary)"
											: "var(--text-secondary)",
										backgroundColor: isActive
											? "var(--bg-card)"
											: "transparent",
									}}
								>
									<span
										className="font-mono text-[11px] md:text-xs font-normal"
										style={{
											color: isActive
												? "var(--accent-primary)"
												: "var(--text-muted)",
										}}
									>
										{tab.number}
									</span>

									<span>{tab.label}</span>
								</button>
							);
						})}
					</div>
				</div>

				{/* Active Tab Content */}
				<div className="p-6 md:p-8 min-h-[220px]">
					<div className="space-y-6">
						{/* Content Heading */}
						<div>
							<div className="flex items-center gap-2.5">
								<ActiveIcon
									className="w-[22px] h-[22px]"
									style={{
										color: activeSkill.iconColor,
									}}
								/>

								<h3
									className="text-xl md:text-2xl font-semibold tracking-tight"
									style={{
										color: "var(--text-primary)",
									}}
								>
									{activeSkill.title}
								</h3>
							</div>

							<p
								className="text-sm md:text-base mt-2 leading-relaxed max-w-3xl"
								style={{
									color: "var(--text-secondary)",
								}}
							>
								{activeSkill.description}
							</p>
						</div>

						{/* Skills */}
						<div>
							<span
								className="text-[11px] uppercase tracking-wider font-mono block mb-3"
								style={{
									color: "var(--text-muted)",
								}}
							>
								{activeSkill.category}
							</span>

							<div className="flex flex-wrap gap-2.5">
								{activeSkill.skills.map((skill, index) => (
									<span
										key={skill}
										className="px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200"
										style={{
											backgroundColor:
												"var(--bg-secondary)",
											border: "1px solid var(--border-color)",
											color: "var(--text-primary)",
										}}
									>
										<span
											className="w-1.5 h-1.5 rounded-full"
											style={{
												backgroundColor:
													index % 3 === 2
														? "#dec29e"
														: activeSkill.iconColor,
											}}
										/>

										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Core Strengths Footer */}
			<div
				className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-3.5 rounded-xl"
				style={{
					backgroundColor: "var(--bg-secondary)",
					border: "1px solid var(--border-color)",
				}}
			>
				<div
					className="text-xs md:text-sm"
					style={{ color: "var(--text-primary)" }}
				>
					<strong
						className="font-semibold"
						style={{ color: "var(--accent-primary)" }}
					>
						Core Strengths:
					</strong>{" "}
					API Development · Backend Logic · Database Optimization ·
					RBAC · Production Systems
				</div>

				<div
					className="text-xs font-mono shrink-0"
					style={{ color: "var(--text-muted)" }}
				>
					Professional focus: Backend systems · REST APIs ·
					Database-driven applications
				</div>
			</div>
		</section>
	);
}

export default Skills;
