interface WaveDividerProps {
  position: "top" | "bottom"
  color?: string
  className?: string
}

export function WaveDivider({ position, color = "fill-white", className = "" }: WaveDividerProps) {
  return (
    <div className={`absolute w-full overflow-hidden ${position === "top" ? "top-0" : "bottom-0"} left-0 ${className}`}>
      <svg
        className={`relative block w-full h-12 ${color}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {position === "top" ? (
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
        ) : (
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            transform="rotate(180)"
          ></path>
        )}
      </svg>
    </div>
  )
}
