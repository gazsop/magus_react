export default function SlashIcon(props: { className?: string }) {
	return (
		<svg
			className={`slash ${props.className ?? ""}`}
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
			<line x1="4.93" x2="19.07" y1="4.93" y2="19.07" />
		</svg>
	);
}
