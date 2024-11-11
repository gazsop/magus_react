export default function MoreVertical(props: { className?: string }) {
  return (
    <svg
      className={`more-vertical ${props.className ?? ""}`}
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}
