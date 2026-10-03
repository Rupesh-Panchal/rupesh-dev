import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

            setProgress(Math.min(currentProgress, 100));
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button type="button" aria-label="Back to top" onClick={scrollToTop} className="fixed right-6 bottom-6 md:right-8 md:bottom-8 z-40 w-14 h-14 rounded-full p-[2px] cursor-pointer"
            style={{
                background: `conic-gradient(var(--accent-primary) ${progress}%, var(--border-color) ${progress}% 100%)`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            }}
        >
            <div className="w-full h-full rounded-full flex items-center justify-center"
                style={{
                    backgroundColor: "var(--bg-card)",
                    color: "var(--text-primary)",
                }}
            >
                <FiArrowUp className="w-5 h-5" />
            </div>
        </button>
    );
}

export default ScrollProgress;
