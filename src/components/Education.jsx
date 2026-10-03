import { FiBookOpen } from "react-icons/fi";

function Education() {
    return (
        <section id="education" className="relative max-w-[1240px] mx-auto px-5 md:px-12 py-16">
            {/* SECTION HEADER */}
            <div className="flex flex-col space-y-2 mb-8">
                <span className="text-[11px] uppercase tracking-wider font-mono" style={{ color: "#dec29e" }}>
                    05 // Academic Foundation
                </span>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                    Education
                </h2>
            </div>

            {/* EDUCATION CARD */}
            <div className="p-6 md:p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.35)",
                }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* DEGREE INFORMATION */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded flex items-center justify-center shrink-0"
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                color: "var(--accent-primary)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <FiBookOpen className="w-6 h-6" />
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold"
                                style={{
                                    color: "var(--text-primary)",
                                }}
                            >
                                B.Sc. in Information Technology
                            </h3>

                            <p className="text-lg mt-0.5 font-medium"
                                style={{
                                    color: "var(--accent-primary)",
                                }}
                            >
                                University of Mumbai
                            </p>

                            <p className="text-[13px] leading-5 mt-1 max-w-3xl"
                                style={{
                                    color: "var(--text-muted)",
                                }}
                            >
                                Core coursework: Data Structures, Database Systems, Software Engineering, Computer Networks, and Object-Oriented Programming.
                            </p>
                        </div>
                    </div>

                    {/* CGPA */}
                    <div className="flex flex-col md:items-end shrink-0 pl-16 md:pl-0">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl md:text-4xl font-bold" style={{ color: "#dec29e" }}>
                                8.9
                            </span>

                            <span className="text-[12px] font-mono"
                                style={{
                                    color: "var(--text-muted)",
                                }}
                            >
                                / 10 CGPA
                            </span>
                        </div>

                        <span className="text-[11px] uppercase tracking-wider mt-1 font-mono"
                            style={{
                                color: "var(--text-secondary)",
                            }}
                        >
                            Distinction Grade
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
