export default function PlusSquareIcon(props: { className?: string }) {
  return (
    <svg
      className={`plus-square ${props.className ?? ""}`}
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
      <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
      <line x1="12" x2="12" y1="8" y2="16" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  );
}