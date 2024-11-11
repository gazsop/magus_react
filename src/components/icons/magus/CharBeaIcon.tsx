{
  /*<svg style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect fill="#000000" fill-opacity="0.01" stroke="#000000" stroke-opacity="1" stroke-width="4" height="504" width="504" rx="32" ry="32"></rect><g class="" style="" transform="translate(0,0)"><path d="M257.688 20.375c-38.528 0-74.835 12.49-107.282 34.813h-54.25V460.5H150.063c32.555 22.454 69.036 35.063 107.625 35.063 38.588 0 75.044-12.61 107.593-35.063h53.908V55.188h-54.219c-32.447-22.323-68.754-34.812-107.283-34.812zM123.155 84.28H392.28V432.157H123.157V84.28zm18.688 18.69v108.718l126.844-108.72H141.844zm200.437 0L141.845 274.78v56.626l231.75-198.687v-29.75H342.28zm31.314 140.093L174.53 413.469h46.532l152.532-128.376v-42.03zm0 66.468l-123.5 103.94h123.5V309.53z" fill="#020202" fill-opacity="1"></path></g></svg>*/
}

function CharBeaIcon(props: { className?: string }) {
  return (
    <svg
      className={`char-beauty ${props.className ?? ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        fill="#000000"
        fill-opacity="0.01"
        stroke="#000000"
        stroke-opacity="1"
        stroke-width="4"
        height="504"
        width="504"
        rx="32"
        ry="32"
      ></rect>
      <g class="" style="" transform="translate(0,0)">
        <path
          d="M257.688 20.375c-38.528 0-74.835 12.49-107.282 34.813h-54.25V460.5H150.063c32.555 22.454 69.036 35.063 107.625 35.063 38.588 0 75.044-12.61 107.593-35.063h53.908V55.188h-54.219c-32.447-22.323-68.754-34.812-107.283-34.812zM123.155 84.28H392.28V432.157H123.157V84.28zm18.688 18.69v108.718l126.844-108.72H141.844zm200.437 0L141.845 274.78v56.626l231.75-198.687v-29.75H342.28zm31.314 140.093L174.53 413.469h46.532l152.532-128.376v-42.03zm0 66.468l-123.5 103.94h123.5V309.53z"
          fill="#020202"
          fill-opacity="1"
        ></path>
      </g>
    </svg>
  );
}

export default CharBeaIcon;