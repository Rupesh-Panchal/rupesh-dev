import { FiCheckCircle } from "react-icons/fi";

function Experience() {
    const responsibilities = [
        "Engineered end-to-end production web applications utilizing Next.js, React, Node.js, and Python/Django, ensuring high code maintainability and test coverage.",
        "Designed, built, and documented secure RESTful APIs consumed concurrently by Next.js web clients and mobile applications, standardizing request contracts and error envelopes.",
        "Developed comprehensive multi-tenant admin dashboards with Role-Based Access Control (RBAC), permission matrices, dynamic data tables, and batch export facilities.",
        "Optimized complex relational queries and schemas in PostgreSQL and MySQL, introducing strategic indexes that dramatically reduced page rendering latencies.",
        "Implemented background job processing queues using Celery for long-running workflows including automated attendance reconciliation, report compilation, and email broadcasts.",
    ];

    const focusAreas = [
        {
            number: "01",
            title: "Backend Engineering",
            description: "REST APIs, JWT auth flows, business workflows, and granular RBAC.",
        },
        {
            number: "02",
            title: "Database Engineering",
            description: "Schema modeling, relational integrity, joins, indexing, and tuning.",
        },
        {
            number: "03",
            title: "Full-Stack Synthesis",
            description: "Bridging responsive React/Next.js frontends directly to core APIs.",
        },
        {
            number: "04",
            title: "Production Stability",
            description: "Live debugging, error monitoring, server maintenance, and edge-cases.",
        },
    ];

    return (
        <section id="experience" className="relative max-w-[1240px] mx-auto px-5 md:px-12 pt-9 pb-17">
            {/* SECTION HEADER */}
            <div className="mb-12">
                <span className="text-[11px] uppercase tracking-wider font-mono" style={{ color: "#dec29e" }}>
                    03. CAREER PATH
                </span>

                <div className="flex flex-wrap items-center gap-3 mt-2">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                        Professional Experience
                    </h2>

                    <span className="px-2.5 py-0.5 rounded text-xs font-mono"
                        style={{
                            backgroundColor: "var(--bg-hover)",
                            color: "var(--accent-primary)",
                        }}
                    >
                        1+ Year Professional Experience
                    </span>
                </div>

                <p className="text-[15px] leading-6 max-w-xl mt-2" style={{ color: "var(--text-secondary)" }}>
                    Continuous hands-on engineering solving real-world client requirements, shipping reliable code, and maintaining production deployments.
                </p>
            </div>

            {/* EXPERIENCE CARD */}
            <div className="rounded-lg relative overflow-hidden p-6 md:p-8"
                style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.35)",
                }}
            >
                {/* ROLE HEADER */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full shrink-0"
                                style={{
                                    backgroundColor: "var(--accent-primary)",
                                }}
                            />

                            <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
                                Full Stack Developer
                            </h3>
                        </div>

                        <p className="text-lg mt-1 font-medium" style={{ color: "var(--accent-primary)" }}>
                            ENATS Technology LLP
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end">
                        <span className="px-3 py-1 rounded text-xs font-mono"
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                color: "#dec29e",
                            }}
                        >
                            Oct 2024 — Present
                        </span>

                        <span className="text-[11px] mt-1 font-mono" style={{ color: "var(--text-muted)" }}>
                            Full-time · Mumbai, India
                        </span>
                    </div>
                </div>

                {/* RESPONSIBILITIES */}
                <div className="pt-6 space-y-4"
                    style={{
                        borderTop: "1px solid var(--border-color)",
                    }}
                >
                    {responsibilities.map((responsibility) => (
                        <div key={responsibility} className="flex items-start gap-3">
                            <FiCheckCircle className="w-5 h-5 shrink-0 mt-0.5"
                                style={{
                                    color: "var(--accent-primary)",
                                }}
                            />

                            <p className="text-[15px] leading-6"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                {responsibility}
                            </p>
                        </div>
                    ))}
                </div>

                {/* FOCUS AREAS */}
                <div className="mt-7 pt-5"
                    style={{
                        borderTop: "1px solid var(--border-color)",
                    }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {focusAreas.map((area, index) => (
                            <div key={area.number} className={`px-3 md:px-4 ${index !== 0 ? "mt-5 sm:mt-0 lg:border-l" : ""}`}
                                style={{
                                    borderColor: index !== 0 ? "var(--border-color)" : undefined,
                                }}
                            >
                                <span className="text-[10px] uppercase tracking-wider font-mono"
                                    style={{
                                        color: index === 1 ? "#dec29e" : "var(--accent-primary)",
                                    }}
                                >
                                    FOCUS AREA {area.number}
                                </span>

                                <h4 className="text-sm font-semibold mt-1"
                                    style={{
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    {area.title}
                                </h4>

                                <p className="text-[13px] leading-5 mt-1"
                                    style={{
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
