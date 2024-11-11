export default function LockIcon(props: { className?: string }) {
	return (
		<svg
			className={`lock ${props.className ?? ""}`}
			fill="none"
			height="72"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
		</svg>
	);
}
