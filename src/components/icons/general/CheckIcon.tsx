export default function CheckIcon(props: { className?: string }) {
        return (<svg className={`check ${props.className ?? ""}`} fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>);
      }