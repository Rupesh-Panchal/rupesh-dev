function Background() {
	return (
		<div id="ambient-grid-container" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
			<div className="technical-grid-layer"></div>
			<div className="ambient-radial-glow-blue absolute inset-0"></div>
			<div className="ambient-radial-glow-warm absolute inset-0"></div>
		</div>
	);
}

export default Background;
