import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCheck, FiArrowRight } from "react-icons/fi";

function Projects() {
    const projects = [
        {
            number: "01",
            label: "INTUCATE · Client Production · ENATS",
            title: "Intucate — Education Management Platform",
            description: "Large education management platform with backend APIs and a Next.js administrative application supporting multiple roles and workflows.",
            points: [
                "REST API development using Python & Django",
                "Django ORM and PostgreSQL database schema modeling",
                "Next.js / TypeScript admin portal with granular RBAC",
                "Celery background task processing for automated alerts and summaries",
            ],
            technologies: ["Next.js", "TypeScript", "Python", "Django", "PostgreSQL", "Celery", "Tailwind CSS"],
            visualType: "image",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKo4SQP8847TBjxN1KhS4jK2HQOpicVSXTdlXA-ZGwXsGnuwpudsu1FrRenD4aKU_OwlZlWBmVxiSwj0NGunMKrp4YAtGNdmp73uNqljyZPr0R3b4VVxoFsmoQ9WmW_oJZvRd-JHOdK6cor8UeF_zcA4qk9mEyU6iQtRPen-nGOw7LHl5-NVR18wJUtVwrs7zVpEJpqdjf4HyoIeNAVwwYcOsaImBqmxV64ziHToVJOxVdGGoyffGLlg",
            visualTitle: "INTUCATE ARCHITECTURE",
            visualLabel: "ASYNC PIPELINE",
            telemetry1: "> CeleryWorker[1]: task_generate_student_report.delay()",
            telemetry2: "> Execution status: 200 OK (Postgres ORM: 31ms)",
            featured: true,
        },
        {
            number: "02",
            label: "WELLKNOWN · Client Production · ENATS",
            title: "Wellknown — HRMS & Attendance Management System",
            description: "HRMS platform handling employee attendance, companies, departments, locations and role-based access.",
            points: [
                "React.js frontend development with modular state workflows",
                "PHP/MySQL backend logic governing complex multi-tier approval hierarchies",
                "Attendance business logic and shift schedule recalculations",
                "Granular RBAC and strict isolation across business units",
            ],
            technologies: ["React.js", "JavaScript", "PHP", "MySQL", "Bootstrap", "REST Endpoints"],
            visualType: "image",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV6L3H-owUMzG4-MYghZjYvorWGcr5fOff3cWNs0O7xtkrcZCIivcLiyb8VKJk0sHPM0fhqNPDDI1BcCyk-XtW1kCt4rjfpWRKTzL8C_pk7JRViVA5wFqqWRX5XaenJt0Acnd3kENmkzCl7c3yX220II4xf6lXPVu7TJxFsHYt7J-CBRbdRdjBuxsHRXmCj6CVUMAlbLJb0n6qX9ZfEvRD1LvD3IYtZgtDwLKk8gs5uvF-aNyY9mDoBg",
            visualTitle: "HRMS ATTENDANCE ENGINE",
            visualLabel: "BUSINESS LOGIC",
            telemetry1: "> AttendanceSync: 1,420 employee records mapped",
            telemetry2: "> Holiday rules applied: shifts recalculated in 120ms",
        },
    ];

    const otherProjects = [
        {
            number: "03",
            label: "BEYONDSKOOL · Client Production · ENATS",
            title: "BeyondSkool — Education Management Platform",
            description: "Large education management system covering schools, principals, teachers, students, parents and administrative workflows.",
            points: [
                "Backend development and database-driven core business logic",
                "PHP and MySQL data modeling connecting 5 institutional user roles",
                "Education management workflows and curriculum tracking modules",
                "Dynamic PDF report and transcript compilation via FPDF engine",
            ],
            technologies: ["PHP", "MySQL", "FPDF", "Education Architecture", "Relational Schema"],
            visualType: "beyond",
            visualTitle: "BEYONDSKOOL ARCHITECTURE",
            visualLabel: "DOCUMENT GENERATION",
        },
        {
            number: "04",
            label: "LARSSIE · Client Production · ENATS",
            title: "Larssie — Passion for Sports",
            description: "Sports event management system built on OpenCart with customized MVC functionality and optimized database workflows.",
            points: [
                "Customized OpenCart MVC architecture engineered for large-scale sports bookings",
                "Admin CRUD and custom controller/model handlers for slot scheduling",
                "MySQL query optimization eliminating repeated queries and reducing latency",
                "Programmed automated email dispatch queues and dynamic modal interactions",
            ],
            technologies: ["OpenCart", "PHP", "MySQL", "JavaScript", "MVC Architecture"],
            visualType: "larssie",
            visualTitle: "LARSSIE MVC ENGINE",
            visualLabel: "QUERY OPTIMIZATION",
        },
    ];

    return (
        <section id="projects" className="relative max-w-[1240px] mx-auto px-5 md:px-12 py-16">
            {/* SECTION HEADER */}
            <div className="flex flex-col space-y-2 mb-12">
                <span className="text-[11px] uppercase tracking-wider font-mono" style={{ color: "#dec29e" }}>
                    04. Portfolio & Case Studies
                </span>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                    Featured Projects
                </h2>

                <p className="text-[15px] leading-6 max-w-xl" style={{ color: "var(--text-secondary)" }}>
                    Real production systems developed for enterprise clients alongside selected full-stack architecture builds.
                </p>
            </div>

            {/* FIRST TWO PROJECTS */}
            <div className="space-y-10">
                {projects.map((project) => (
                    <div key={project.number} className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 p-6 md:p-8 rounded-lg items-stretch transition-all duration-300 hover:-translate-y-1"
                        style={{
                            backgroundColor: "var(--bg-card)",
                            border: "1px solid var(--border-color)",
                            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.35)",
                        }}
                    >
                        {/* LEFT CONTENT */}
                        <div className="flex flex-col justify-between space-y-5">
                            <div>
                                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                                    <span className="px-2 py-0.5 rounded text-[11px] font-mono"
                                        style={{
                                            backgroundColor: "var(--bg-secondary)",
                                            color: "#dec29e",
                                            border: "1px solid rgba(180, 154, 120, 0.20)",
                                        }}
                                    >
                                        {project.number}. {project.label}
                                    </span>

                                    {project.featured && (
                                        <span className="px-2 py-0.5 rounded text-[11px] font-mono"
                                            style={{
                                                backgroundColor: "var(--bg-secondary)",
                                                color: "var(--accent-primary)",
                                                border: "1px solid var(--border-color)",
                                            }}
                                        >
                                            FLAGSHIP
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight"
                                    style={{
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <p className="text-[15px] leading-6 mt-3"
                                    style={{
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    {project.description}
                                </p>

                                <div className="space-y-2 mt-4">
                                    {project.points.map((point) => (
                                        <div key={point} className="flex items-start gap-2">
                                            <FiArrowRight className="w-[18px] h-[18px] shrink-0 mt-0.5"
                                                style={{
                                                    color: "var(--accent-primary)",
                                                }}
                                            />

                                            <span className="text-[13px] leading-5"
                                                style={{
                                                    color: "var(--text-secondary)",
                                                }}
                                            >
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* TECHNOLOGIES */}
                            <div className="flex flex-wrap gap-1.5 pt-3"
                                style={{
                                    borderTop: "1px solid var(--border-color)",
                                }}
                            >
                                {project.technologies.map((technology) => (
                                    <span key={technology} className="px-2.5 py-1 rounded text-[11px] font-mono"
                                        style={{
                                            backgroundColor: "var(--bg-secondary)",
                                            color: "var(--text-primary)",
                                            border: "1px solid var(--border-color)",
                                        }}
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="flex flex-col justify-center">
                            <div className="w-full aspect-[16/10] rounded-lg overflow-hidden p-4 shadow-inner flex flex-col justify-between"
                                style={{
                                    backgroundColor: "var(--bg-secondary)",
                                    border: "1px solid var(--border-color)",
                                }}
                            >
                                <div className="flex items-center justify-between pb-1 text-[11px] font-mono"
                                    style={{
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    <span>{project.visualTitle}</span>

                                    <span
                                        style={{
                                            color: project.featured ? "#dec29e" : "var(--accent-primary)",
                                        }}
                                    >
                                        {project.visualLabel}
                                    </span>
                                </div>

                                <div className="relative w-full flex-1 my-1.5 rounded overflow-hidden">
                                    <img src={project.image} alt={`${project.title} technical preview`} className="w-full h-full object-cover rounded" />
                                </div>

                                <div className="p-2.5 rounded text-[11px] font-mono space-y-0.5"
                                    style={{
                                        backgroundColor: "var(--bg-primary)",
                                        border: "1px solid var(--border-color)",
                                    }}
                                >
                                    <p className="truncate"
                                        style={{
                                            color: "var(--accent-primary)",
                                        }}
                                    >
                                        {project.telemetry1}
                                    </p>

                                    <p className="truncate"
                                        style={{
                                            color: "var(--text-muted)",
                                        }}
                                    >
                                        {project.telemetry2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* PROJECTS 03 + 04 */}
                {otherProjects.map((project) => (
                    <div key={project.number} className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 p-6 md:p-8 rounded-lg items-stretch transition-all duration-300 hover:-translate-y-1"
                        style={{
                            backgroundColor: "var(--bg-card)",
                            border: "1px solid var(--border-color)",
                            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.35)",
                        }}
                    >
                        {/* LEFT CONTENT */}
                        <div className="flex flex-col justify-between space-y-5">
                            <div>
                                <div className="mb-2.5">
                                    <span className="px-2 py-0.5 rounded text-[11px] font-mono"
                                        style={{
                                            backgroundColor: "var(--bg-secondary)",
                                            color: "#dec29e",
                                            border: "1px solid rgba(180, 154, 120, 0.20)",
                                        }}
                                    >
                                        {project.number}. {project.label}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight"
                                    style={{
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <p className="text-[15px] leading-6 mt-3"
                                    style={{
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    {project.description}
                                </p>

                                <div className="space-y-2 mt-4">
                                    {project.points.map((point) => (
                                        <div key={point} className="flex items-start gap-2">
                                            <FiArrowRight className="w-[18px] h-[18px] shrink-0 mt-0.5"
                                                style={{
                                                    color: "var(--accent-primary)",
                                                }}
                                            />

                                            <span className="text-[13px] leading-5"
                                                style={{
                                                    color: "var(--text-secondary)",
                                                }}
                                            >
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-3"
                                style={{
                                    borderTop: "1px solid var(--border-color)",
                                }}
                            >
                                {project.technologies.map((technology) => (
                                    <span key={technology} className="px-2.5 py-1 rounded text-[11px] font-mono"
                                        style={{
                                            backgroundColor: "var(--bg-secondary)",
                                            color: "var(--text-primary)",
                                            border: "1px solid var(--border-color)",
                                        }}
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT TECHNICAL VISUAL */}
                        <div className="flex flex-col justify-center">
                            <div className="w-full aspect-[16/10] rounded-lg overflow-hidden p-4 flex flex-col justify-between"
                                style={{
                                    backgroundColor: "var(--bg-secondary)",
                                    border: "1px solid var(--border-color)",
                                }}
                            >
                                <div className="flex items-center justify-between pb-1 text-[11px] font-mono"
                                    style={{
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    <span>{project.visualTitle}</span>

                                    <span
                                        style={{
                                            color: project.number === "04" ? "var(--accent-primary)" : "#dec29e",
                                        }}
                                    >
                                        {project.visualLabel}
                                    </span>
                                </div>

                                <div className="w-full flex-1 my-1.5 rounded p-3 flex flex-col justify-between"
                                    style={{
                                        backgroundColor: "var(--bg-primary)",
                                        border: "1px solid var(--border-color)",
                                    }}
                                >
                                    {project.visualType === "beyond" ? (
                                        <>
                                            <div className="space-y-1.5">
                                                <span className="text-[10px] uppercase font-mono block tracking-wider"
                                                    style={{
                                                        color: "var(--text-muted)",
                                                    }}
                                                >
                                                    Role Hierarchy & Access Matrix
                                                </span>

                                                <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                                                    {["Schools", "Principals", "Teachers", "Students", "Parents"].map((role) => (
                                                        <span key={role} className="px-2 py-0.5 rounded flex items-center gap-1"
                                                            style={{
                                                                backgroundColor: "var(--bg-secondary)",
                                                                color: "var(--accent-primary)",
                                                            }}
                                                        >
                                                            <FiCheck className="w-3 h-3" />
                                                            {role}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="py-1 px-2.5 rounded flex items-center justify-between font-mono text-[11px]"
                                                style={{
                                                    backgroundColor: "var(--bg-hover)",
                                                    border: "1px solid var(--border-color)",
                                                    color: "var(--text-secondary)",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: "var(--accent-primary)",
                                                    }}
                                                >
                                                    PHP 8
                                                </span>
                                                
                                                <span>→</span>
                                                
                                                <span
                                                    style={{
                                                        color: "#dec29e",
                                                    }}
                                                >
                                                    MySQL Query
                                                </span>
                                                <span>→</span>
                                                <span
                                                    style={{
                                                        color: "var(--text-secondary)",
                                                    }}
                                                >
                                                    FPDF Engine
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between text-[11px] font-mono pt-0.5"
                                                style={{
                                                    color: "var(--text-muted)",
                                                }}
                                            >
                                                <span className="flex items-center gap-1"
                                                    style={{
                                                        color: "var(--accent-primary)",
                                                    }}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                                                        style={{
                                                            backgroundColor: "var(--accent-primary)",
                                                        }}
                                                    />
                                                    Document Pipeline
                                                </span>

                                                <span>5 Roles · Multi-Tenant</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="space-y-1.5">
                                                <span className="text-[10px] uppercase font-mono block tracking-wider"
                                                    style={{
                                                        color: "var(--text-muted)",
                                                    }}
                                                >
                                                    Live Event Telemetry
                                                </span>

                                                <div className="grid grid-cols-3 gap-2 text-center">
                                                    {[
                                                        ["24", "Events Active", "var(--accent-primary)"],
                                                        ["186", "Registrations", "#86a8b5"],
                                                        ["420", "Participants", "#dec29e"],
                                                    ].map(([value, label, color]) => (
                                                        <div key={label} className="p-1.5 rounded"
                                                            style={{
                                                                backgroundColor: "var(--bg-secondary)",
                                                                border: "1px solid var(--border-color)",
                                                            }}
                                                        >
                                                            <span className="text-xs font-mono font-semibold block"
                                                                style={{
                                                                    color,
                                                                }}
                                                            >
                                                                {value}
                                                            </span>

                                                            <span className="text-[10px] uppercase font-mono"
                                                                style={{
                                                                    color: "var(--text-muted)",
                                                                }}
                                                            >
                                                                {label}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-1 font-mono text-[11px]">
                                                <div className="flex items-center gap-1.5"
                                                    style={{
                                                        color: "var(--accent-primary)",
                                                    }}
                                                >
                                                    <FiCheck className="w-3 h-3" />
                                                    OpenCart MVC Custom Controllers
                                                </div>

                                                <div className="flex items-center gap-1.5"
                                                    style={{
                                                        color: "#86a8b5",
                                                    }}
                                                >
                                                    <FiCheck className="w-3 h-3" />
                                                    Optimized MySQL Joins
                                                </div>

                                                <div className="flex items-center gap-1.5"
                                                    style={{
                                                        color: "#dec29e",
                                                    }}
                                                >
                                                    <FiCheck className="w-3 h-3" />
                                                    Automated Reminder Dispatch
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="p-2.5 rounded text-[11px] font-mono space-y-0.5"
                                    style={{
                                        backgroundColor: "var(--bg-primary)",
                                        border: "1px solid var(--border-color)",
                                    }}
                                >
                                    {project.number === "03" ? (
                                        <>
                                            <p className="truncate"
                                                style={{
                                                    color: "#dec29e",
                                                }}
                                            >
                                                &gt; Batch report: 480 transcripts compiled (142ms)
                                            </p>
                                            <p className="truncate"
                                                style={{
                                                    color: "var(--text-muted)",
                                                }}
                                            >
                                                &gt; Status: PDF binary streamed • 200 OK
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="truncate"
                                                style={{
                                                    color: "#86a8b5",
                                                }}
                                            >
                                                &gt; Event scheduler: 186 reminders dispatched
                                            </p>
                                            <p className="truncate"
                                                style={{
                                                    color: "var(--text-muted)",
                                                }}
                                            >
                                                &gt; Query overhead reduced: -44% server latency
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* PROJECT 05 — INSIDERJOBS */}
                <div className="p-6 md:p-8 rounded-lg transition-all duration-300 hover:-translate-y-1"
                    style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-color)",
                        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.35)",
                    }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-8 flex flex-col space-y-3">
                            <div>
                                <span
                                    className="px-2 py-0.5 rounded text-[11px] font-mono"
                                    style={{
                                        backgroundColor: "var(--bg-secondary)",
                                        color: "#86a8b5",
                                        border: "1px solid rgba(134, 168, 181, 0.20)",
                                    }}
                                >
                                    PERSONAL PROJECT · MERN STACK
                                </span>
                            </div>

                            <h3
                                className="text-2xl md:text-3xl font-bold tracking-tight"
                                style={{
                                    color: "var(--text-primary)",
                                }}
                            >
                                InsiderJobs — Full-Stack Job Portal
                            </h3>

                            <p
                                className="text-[15px] leading-6"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Full-featured job discovery platform featuring role-based candidate and recruiter authentication, complete CRUD operations for listings, resume submissions, and keyword
                                search filters.
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"].map((technology) => (
                                    <span
                                        key={technology}
                                        className="px-2.5 py-1 rounded text-[11px] font-mono"
                                        style={{
                                            backgroundColor: "var(--bg-secondary)",
                                            color: "var(--text-primary)",
                                            border: "1px solid var(--border-color)",
                                        }}
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-3 justify-end">
                            <a
                                href="https://github.com/Rupesh-Panchal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 rounded flex items-center justify-center gap-2 text-[13px] font-medium transition-all"
                                style={{
                                    backgroundColor: "var(--bg-hover)",
                                    color: "var(--text-primary)",
                                    border: "1px solid var(--border-color)",
                                }}
                            >
                                <FaGithub className="w-4 h-4 shrink-0" />
                                <span>GitHub Repository</span>
                            </a>

                            <a
                                href="#contact"
                                className="px-5 py-2.5 rounded flex items-center justify-center gap-2 text-[13px] font-semibold transition-all"
                                style={{
                                    backgroundColor: "var(--accent-primary)",
                                    color: "var(--accent-text)",
                                }}
                            >
                                <FiExternalLink className="w-[18px] h-[18px]" />
                                <span>Inquire Demo / Details</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
