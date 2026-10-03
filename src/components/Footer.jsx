import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            className="relative z-10 w-full"
            style={{
                backgroundColor: "var(--bg-primary)",
                borderTop: "1px solid var(--border-color)",
            }}
        >
            {/* Main Footer Content */}
            <div className="max-w-[1240px] mx-auto px-5 md:px-12 py-14 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* COLUMN 1 — BRAND */}
                    <div className="lg:col-span-1">
                        {/* Brand */}
                        <a
                            href="#about"
                            className="group inline-flex items-center gap-3"
                        >
                            {/* RP Monogram */}
                            <div
                                className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 transition-all duration-200 group-hover:-translate-y-0.5"
                                style={{
                                    backgroundColor: "var(--bg-card)",
                                    border: "1px solid var(--border-color)",
                                    boxShadow:
                                        "0 0 0 1px rgba(120, 149, 168, 0.16)",
                                }}
                            >
                                <span
                                    className="font-bold text-[13px] tracking-tight"
                                    style={{
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    RP
                                </span>
                            </div>

                            {/* Name */}
                            <div className="flex flex-col">
                                <span
                                    className="font-semibold text-[16px] leading-tight transition-colors duration-200 group-hover:text-[var(--accent-primary)]"
                                    style={{
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    Rupesh Panchal
                                </span>

                                <span
                                    className="text-[11px] mt-0.5"
                                    style={{
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    Full Stack Developer
                                </span>
                            </div>
                        </a>

                        {/* Description */}
                        <p
                            className="mt-6 max-w-[330px] text-[14px] leading-6"
                            style={{
                                color: "var(--text-secondary)",
                            }}
                        >
                            Full Stack Developer building production web
                            applications, REST APIs, backend systems, and
                            database-driven solutions.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-7">
                            <a
                                href="https://github.com/Rupesh-Panchal"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                                style={{
                                    backgroundColor: "var(--bg-card)",
                                    border: "1px solid var(--border-color)",
                                    color: "var(--text-secondary)",
                                }}
                            >
                                <FaGithub className="w-[17px] h-[17px]" />
                            </a>

                            <a
                                href="https://linkedin.com/in/rupesh-panchal-528716261"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                                style={{
                                    backgroundColor: "var(--bg-card)",
                                    border: "1px solid var(--border-color)",
                                    color: "var(--text-secondary)",
                                }}
                            >
                                <FaLinkedin className="w-[17px] h-[17px]" />
                            </a>

                            <a
                                href="mailto:rupeshpanchal509@gmail.com"
                                aria-label="Email Rupesh Panchal"
                                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                                style={{
                                    backgroundColor: "var(--bg-card)",
                                    border: "1px solid var(--border-color)",
                                    color: "var(--text-secondary)",
                                }}
                            >
                                <FiMail className="w-[17px] h-[17px]" />
                            </a>
                        </div>
                    </div>

                    {/* COLUMN 2 — NAVIGATE */}
                    <div>
                        <h3
                            className="font-semibold text-[14px] tracking-wide uppercase"
                            style={{
                                color: "var(--text-primary)",
                            }}
                        >
                            Navigate
                        </h3>

                        <div className="flex flex-col gap-4 mt-6">
                            <a
                                href="#about"
                                className="text-[14px] transition-colors duration-200 hover:text-[var(--accent-primary)]"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                About
                            </a>

                            <a
                                href="#skills"
                                className="text-[14px] transition-colors duration-200 hover:text-[var(--accent-primary)]"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Skills
                            </a>

                            <a
                                href="#experience"
                                className="text-[14px] transition-colors duration-200 hover:text-[var(--accent-primary)]"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Experience
                            </a>

                            <a
                                href="#education"
                                className="text-[14px] transition-colors duration-200 hover:text-[var(--accent-primary)]"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Education
                            </a>
                        </div>
                    </div>

                    {/* COLUMN 3 — MORE */}
                    <div>
                        <h3
                            className="font-semibold text-[14px] tracking-wide uppercase"
                            style={{
                                color: "var(--text-primary)",
                            }}
                        >
                            More
                        </h3>

                        <div className="flex flex-col gap-4 mt-6">
                            <a
                                href="#projects"
                                className="text-[14px] transition-colors duration-200 hover:text-[var(--accent-primary)]"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Projects
                            </a>

                            <a
                                href="#contact"
                                className="text-[14px] transition-colors duration-200 hover:text-[var(--accent-primary)]"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* COLUMN 4 — GET IN TOUCH */}
                    <div>
                        <h3
                            className="font-semibold text-[14px] tracking-wide uppercase"
                            style={{
                                color: "var(--text-primary)",
                            }}
                        >
                            Get In Touch
                        </h3>

                        <div className="mt-6 space-y-4">
                            <a
                                href="mailto:rupeshpanchal509@gmail.com"
                                className="flex items-center gap-2 text-[14px] transition-colors duration-200 hover:text-[var(--accent-primary)]"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                <span>
                                    rupeshpanchal509@gmail.com
                                </span>

                                <span className="text-[14px]">
                                    ↗
                                </span>
                            </a>

                            <div
                                className="text-[14px]"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Mumbai, India
                            </div>

                            {/* Availability */}
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium"
                                style={{
                                    backgroundColor:
                                        "rgba(120, 149, 168, 0.10)",
                                    color: "var(--accent-primary)",
                                    border:
                                        "1px solid rgba(120, 149, 168, 0.16)",
                                }}
                            >
                                <span
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            "var(--accent-primary)",
                                    }}
                                />
                                Open to opportunities
                            </div>

                            {/* CTA */}
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    backgroundColor:
                                        "var(--accent-primary)",
                                    color: "var(--accent-text)",
                                    boxShadow:
                                        "0 8px 20px rgba(120, 149, 168, 0.16)",
                                }}
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Bar */}
            <div
                className="border-t"
                style={{
                    borderColor: "var(--border-color)",
                    backgroundColor: "var(--bg-primary)",
                }}
            >
                <div className="max-w-[1240px] mx-auto px-5 md:px-12 pt-5 pb-22 flex flex-col md:flex-row items-center justify-between gap-5">

                    {/* Copyright */}
                    <span
                        className="text-[12px] font-mono"
                        style={{
                            color: "var(--text-muted)",
                        }}
                    >
                        © 2026 Rupesh Panchal. All rights reserved.
                    </span>

                    <span
                        className="text-[13px] font-medium pr-25"
                        style={{
                            color: "var(--accent-primary)",
                        }}
                    >
                        Back to top
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;