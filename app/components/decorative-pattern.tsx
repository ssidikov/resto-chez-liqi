interface DecorativePatternProps {
  className?: string
  color?: string
}

export function DecorativePattern({ className = "", color = "text-red-200" }: DecorativePatternProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={color}
      >
        <path
          d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM50 90C27.9 90 10 72.1 10 50C10 27.9 27.9 10 50 10C72.1 10 90 27.9 90 50C90 72.1 72.1 90 50 90Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path
          d="M50 20C33.4 20 20 33.4 20 50C20 66.6 33.4 80 50 80C66.6 80 80 66.6 80 50C80 33.4 66.6 20 50 20ZM50 70C39 70 30 61 30 50C30 39 39 30 50 30C61 30 70 39 70 50C70 61 61 70 50 70Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  )
}
