import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiCopy, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";

function Contact() {
    const formRef = useRef(null);

    const [copied, setCopied] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const email = "rupeshpanchal509@gmail.com";
    const phone = "+91 7045773441";

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2400);
        } catch (error) {
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2400);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formRef.current) {
            return;
        }

        setSending(true);
        setSubmitted(false);

        emailjs.sendForm("service_v093htb", "template_sdxpusf", formRef.current, "PlnRZ2Z2D-Au2ONv4").then(() => {
            setSending(false);
            setSubmitted(true);
            formRef.current.reset();
        }, (error) => {
            console.error("EmailJS error:", error);
            setSending(false);
            setSubmitted(false);
            alert("Something went wrong while sending the message.");
        });
    };

    return (
        <section id="contact" className="relative max-w-[1240px] mx-auto px-5 md:px-12 pt-16 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* LEFT CONTACT INFORMATION */}
                <div className="lg:col-span-5 flex flex-col space-y-6">
                    {/* HEADER */}
                    <div className="space-y-2">
                        <span className="text-[11px] uppercase tracking-wider font-mono" style={{ color: "#dec29e" }}>
                            06. Connect
                        </span>

                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                            Let's Build Something Useful.
                        </h2>

                        <p className="text-[15px] leading-6" style={{ color: "var(--text-secondary)" }}>
                            I'm actively interested in full-stack engineering roles, backend API architecture opportunities, and production software teams. Let's discuss how my experience can
                            contribute to your engineering goals.
                        </p>
                    </div>

                    {/* CONTACT DETAILS */}
                    <div className="space-y-3 pt-2">
                        {/* EMAIL */}
                        <div className="p-4 rounded-lg flex items-center justify-between group"
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <FiMail className="w-5 h-5 shrink-0"
                                    style={{
                                        color: "var(--accent-primary)",
                                    }}
                                />

                                <div className="min-w-0">
                                    <span className="text-[11px] uppercase tracking-wider block font-mono"
                                        style={{
                                            color: "var(--text-muted)",
                                        }}
                                    >
                                        EMAIL ME DIRECTLY
                                    </span>

                                    <a href={`mailto:${email}`} className="font-semibold text-[15px] truncate block transition-colors"
                                        style={{
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        {email}
                                    </a>
                                </div>
                            </div>

                            <button type="button" onClick={handleCopyEmail} aria-label="Copy email address" className="px-3 py-1.5 rounded flex items-center gap-1.5 text-[11px] font-mono transition-all shrink-0 ml-3"
                                style={{
                                    backgroundColor: "var(--bg-hover)",
                                    color: "var(--text-secondary)",
                                    border: "1px solid var(--border-color)",
                                }}
                            >
                                {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}

                                <span>{copied ? "Copied!" : "Copy"}</span>
                            </button>
                        </div>

                        {/* PHONE */}
                        <div className="p-4 rounded-lg flex items-center gap-3"
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <FiPhone className="w-5 h-5 shrink-0" style={{ color: "#dec29e" }} />

                            <div>
                                <span className="text-[11px] uppercase tracking-wider block font-mono"
                                    style={{
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    DIRECT TELEPHONE
                                </span>

                                <a href={`tel:${phone.replace(/\s/g, "")}`} className="font-semibold text-[15px] transition-colors"
                                    style={{
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    {phone}
                                </a>
                            </div>
                        </div>

                        {/* LOCATION */}
                        <div className="p-4 rounded-lg flex items-center gap-3"
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <FiMapPin className="w-5 h-5 shrink-0"
                                style={{
                                    color: "#86a8b5",
                                }}
                            />

                            <div>
                                <span className="text-[11px] uppercase tracking-wider block font-mono"
                                    style={{
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    LOCATION
                                </span>

                                <span className="font-semibold text-[15px]"
                                    style={{
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    Mumbai, India • Open to Remote Work
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a href="https://github.com/Rupesh-Panchal" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="px-4 py-2 rounded flex items-center gap-2 text-[12px] font-mono transition-all"
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <FiGithub className="w-4 h-4 shrink-0" />
                            <span>github.com/Rupesh-Panchal</span>
                        </a>

                        <a href="https://linkedin.com/in/rupesh-panchal-528716261" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="px-4 py-2 rounded flex items-center gap-2 text-[12px] font-mono transition-all"
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <FiLinkedin className="w-4 h-4 shrink-0" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* RIGHT CONTACT FORM */}
                <div className="lg:col-span-7 p-6 md:p-8 rounded-lg lg:translate-y-4"
                    style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-color)",
                        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.35)",
                    }}
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        {/* NAME + EMAIL */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="contact-name" className="text-[11px] uppercase tracking-wider block font-mono"
                                    style={{
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    Your Name
                                </label>

                                <input id="contact-name" name="name" type="text" placeholder="e.g. Maya Chen" required className="w-full px-4 py-2.5 rounded text-[13px] outline-none transition-all"
                                    style={{
                                        backgroundColor: "var(--bg-primary)",
                                        color: "var(--text-primary)",
                                        border: "1px solid var(--border-color)",
                                    }}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="contact-email" className="text-[11px] uppercase tracking-wider block font-mono"
                                    style={{
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    Your Email
                                </label>

                                <input id="contact-email" name="email" type="email" placeholder="e.g. maya@company.com" required className="w-full px-4 py-2.5 rounded text-[13px] outline-none transition-all"
                                    style={{
                                        backgroundColor: "var(--bg-primary)",
                                        color: "var(--text-primary)",
                                        border: "1px solid var(--border-color)",
                                    }}
                                />
                            </div>
                        </div>

                        {/* SUBJECT */}
                        <div className="space-y-1.5">
                            <label htmlFor="contact-subject" className="text-[11px] uppercase tracking-wider block font-mono"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Subject / Role Opportunity
                            </label>

                            <input id="contact-subject" name="subject" type="text" placeholder="Full Stack Developer Role / Project Discussion" required className="w-full px-4 py-2.5 rounded text-[13px] outline-none transition-all"
                                style={{
                                    backgroundColor: "var(--bg-primary)",
                                    color: "var(--text-primary)",
                                    border: "1px solid var(--border-color)",
                                }}
                            />
                        </div>

                        {/* MESSAGE */}
                        <div className="space-y-1.5">
                            <label htmlFor="contact-message" className="text-[11px] uppercase tracking-wider block font-mono"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Message Details
                            </label>

                            <textarea id="contact-message" name="message" rows="5" placeholder="Tell me about the engineering scope, tech stack, or opportunity..." required className="w-full px-4 py-2.5 rounded text-[13px] outline-none transition-all resize-none"
                                style={{
                                    backgroundColor: "var(--bg-primary)",
                                    color: "var(--text-primary)",
                                    border: "1px solid var(--border-color)",
                                }}
                            />
                        </div>

                        {/* SUBMIT */}
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                            <button type="submit" disabled={sending} className="px-6 py-2.5 rounded flex items-center gap-2 text-[13px] font-semibold transition-all disabled:opacity-60"
                                style={{
                                    backgroundColor: "var(--accent-primary)",
                                    color: "var(--accent-text)",
                                }}
                            >
                                {submitted ? (
                                    <>
                                        <span>Message Sent</span>
                                        <FiCheck className="w-4 h-4" />
                                    </>
                                ) : sending ? (
                                    <>
                                        <span>Transmitting...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <FiSend className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            {submitted && (
                                <span className="text-[11px] font-mono"
                                    style={{
                                        color: "var(--accent-primary)",
                                    }}
                                >
                                    Message recorded! I will reply shortly.
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
