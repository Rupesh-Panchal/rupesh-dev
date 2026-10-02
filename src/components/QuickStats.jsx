function QuickStats() {
	return (
		<section className="max-w-[1240px] mx-auto px-5 md:px-12 pb-16">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-[var(--bg-secondary)] shadow-lg border border-[var(--border-color)]">
				{/* Experience */}
				<div className="flex flex-col p-3">
					<span className="text-4xl font-light text-[var(--accent-hover)] tracking-tight">
						1+
					</span>

					<span className="font-semibold text-[13px] text-[var(--text-primary)] mt-1">
						Year Experience
					</span>

					<span className="text-[11px] text-[var(--text-muted)] mt-0.5 font-mono">
						Professional Production
					</span>
				</div>

				{/* Production Systems */}
				<div className="flex flex-col p-3">
					<span className="text-4xl font-light text-[#dec29e] tracking-tight">
						4+
					</span>

					<span className="font-semibold text-[13px] text-[var(--text-primary)] mt-1">
						Production Systems
					</span>

					<span className="text-[11px] text-[var(--text-muted)] mt-0.5 font-mono">
						Client & Enterprise Deployments
					</span>
				</div>

				{/* Backend */}
				<div className="flex flex-col p-3">
					<span className="text-4xl font-light text-[#a9ccda] tracking-tight">
						REST APIs
					</span>

					<span className="font-semibold text-[13px] text-[var(--text-primary)] mt-1">
						Backend Focus
					</span>

					<span className="text-[11px] text-[var(--text-muted)] mt-0.5 font-mono">
						Scalable Architecture & RBAC
					</span>
				</div>

				{/* Location */}
				<div className="flex flex-col p-3">
					<span className="text-4xl font-light text-[var(--text-primary)] tracking-tight">
						Mumbai
					</span>

					<span className="font-semibold text-[13px] text-[var(--text-primary)] mt-1">
						India
					</span>

					<span className="text-[11px] text-[var(--text-muted)] mt-0.5 font-mono">
						Open to Remote / Relocation
					</span>
				</div>
			</div>
		</section>
	);
}

export default QuickStats;
