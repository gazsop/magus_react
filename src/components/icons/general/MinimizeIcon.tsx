export default function MinimizeIcon(props: { className?: string }) {
  return (
    <svg
      className={`menu ${props.className ?? ""}`}
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
      <line x1="3" x2="21" y1="12" y2="12" />
    </svg>
  );
}
