import { FiServer, FiMonitor, FiDatabase, FiCode } from "react-icons/fi";

function Skills() {
    const tabs = [
        {
            id: "backend",
            number: "01 —",
            label: "Backend & APIs",
            icon: FiServer,
            iconColor: "var(--accent-primary)",
            title: "Backend & APIs",
            description: "Building REST APIs, backend business logic, authentication and production workflows.",
            category: "Core Frameworks & Architecture",
            skills: ["Node.js", "Express.js", "Django REST", "Laravel", "PHP MVC", "JWT / RBAC", "Celery"],
        },
        {
            id: "frontend",
            number: "02 —",
            label: "Frontend",
            icon: FiMonitor,
            iconColor: "#a9ccda",
            title: "Frontend Development",
            description: "Building responsive admin portals and production web interfaces.",
            category: "UI Layer & Interactive Workflows",
            skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"],
        },
        {
            id: "databases",
            number: "03 —",
            label: "Databases",
            icon: FiDatabase,
            iconColor: "#dec29e",
            title: "Databases & Data Layer",
            description: "Working with relational and document databases, query optimization and ORM-based data access.",
            category: "Data Storage & Optimization",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "SQL", "Django ORM", "Indexing", "Query Optimization"],
        },
        {
            id: "tools",
            number: "04 —",
            label: "Languages & Tools",
            icon: FiCode,
            iconColor: "var(--accent-primary)",
            title: "Languages & Tools",
            description: "Core programming languages and engineering tooling deployed in production environments.",
            category: "Programming Languages",
            skills: ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "Git", "GitHub", "Postman", "Redis"],
        },
    ];

    return (
        <section id="skills" className="relative max-w-[1240px] mx-auto px-5 md:px-12 py-16">
            {/* Section Header */}
            <div className="flex flex-col space-y-2 mb-10">
                <span className="text-[11px] uppercase tracking-wider font-mono" style={{ color: "#dec29e" }}>
                    02 // TECHNICAL CAPABILITIES
                </span>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                    Skills & Technologies
                </h2>

                <p className="text-base max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    Focused on backend engineering, APIs, databases, and modern full-stack development.
                </p>
            </div>

            {/* Skills Rows */}
            <div className="w-full border-t" style={{ borderColor: "var(--border-color)" }}>
                {tabs.map((tab) => (
                    <div key={tab.id} className="py-7 border-b flex flex-col md:flex-row md:items-start gap-5 md:gap-10" style={{ borderColor: "var(--border-color)" }}>
                        {/* Category */}
                        <div className="md:w-[32%] shrink-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-mono font-bold uppercase" style={{ color: tab.iconColor }}>
                                    {tab.number} {tab.label}
                                </span>

                                {tab.id === "backend" && (
                                    <span
                                        className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold"
                                        style={{
                                            backgroundColor: "rgba(120, 149, 168, 0.10)",
                                            color: "var(--accent-primary)",
                                            border: "1px solid rgba(120, 149, 168, 0.30)",
                                        }}
                                    >
                                        PRIMARY FOCUS
                                    </span>
                                )}
                            </div>

                            <div className="text-xs font-mono mt-1" style={{ color: "var(--text-muted)" }}>
                                {tab.category}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="md:w-[68%] flex flex-wrap gap-2">
                            {tab.skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 rounded-lg text-[13px] font-medium flex items-center gap-2 transition-all duration-200"
                                    style={{
                                        backgroundColor: "var(--bg-card)",
                                        border: "1px solid var(--border-color)",
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full shrink-0"
                                        style={{
                                            backgroundColor: index % 3 === 2 ? "#dec29e" : tab.iconColor,
                                        }}
                                    />

                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Core Strengths Footer */}
            <div
                className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-3.5 rounded-xl"
                style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                }}
            >
                <div className="text-xs md:text-sm" style={{ color: "var(--text-primary)" }}>
                    <strong className="font-semibold" style={{ color: "var(--accent-primary)" }}>
                        Core Strengths:
                    </strong>{" "}
                    API Development · Backend Logic · Database Optimization · RBAC · Production Systems
                </div>

                <div className="text-xs font-mono shrink-0" style={{ color: "var(--text-muted)" }}>
                    Professional focus: Backend systems · REST APIs · Database-driven applications
                </div>
            </div>
        </section>
    );
}

export default Skills;
