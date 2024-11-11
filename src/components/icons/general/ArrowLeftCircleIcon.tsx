export default function ArrowLeftCircleIcon(props: { className?: string }) {
	return (
		<svg
			className={`arrow-left-circle ${props.className ?? ""}`}
			fill="none"
			height="24"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 8 8 12 12 16" />
			<line x1="16" x2="8" y1="12" y2="12" />
		</svg>
	);
}
