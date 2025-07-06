interface FoodIllustrationProps {
  type: "noodles" | "dumpling" | "tea" | "rice"
  className?: string
}

export function FoodIllustration({ type, className = "" }: FoodIllustrationProps) {
  const illustrations = {
    noodles: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M60 20C40 20 25 35 25 55C25 75 40 100 60 100C80 100 95 75 95 55C95 35 80 20 60 20Z"
          fill="#FFF1E6"
          stroke="#E5383B"
          strokeWidth="2"
        />
        <path d="M40 45C40 45 50 65 60 65C70 65 80 45 80 45" stroke="#E5383B" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 55C35 55 50 85 60 85C70 85 85 55 85 55" stroke="#E5383B" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 65C30 65 50 95 60 95C70 95 90 65 90 65" stroke="#E5383B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="40" r="5" fill="#FFD166" />
        <circle cx="45" cy="50" r="3" fill="#FFD166" />
        <circle cx="75" cy="50" r="3" fill="#FFD166" />
      </svg>
    ),
    dumpling: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M40 60C40 46.7 50.7 36 64 36H76C89.3 36 100 46.7 100 60V60C100 73.3 89.3 84 76 84H64C50.7 84 40 73.3 40 60V60Z"
          fill="#FFF1E6"
          stroke="#E5383B"
          strokeWidth="2"
        />
        <path d="M40 60C40 60 55 70 70 70C85 70 100 60 100 60" stroke="#E5383B" strokeWidth="2" />
        <path d="M70 36C70 36 65 50 70 50C75 50 70 36 70 36Z" stroke="#E5383B" strokeWidth="2" />
        <path d="M80 36C80 36 85 50 80 50C75 50 80 36 80 36Z" stroke="#E5383B" strokeWidth="2" />
      </svg>
    ),
    tea: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M40 50H80V90C80 95.5 75.5 100 70 100H50C44.5 100 40 95.5 40 90V50Z"
          fill="#FFF1E6"
          stroke="#E5383B"
          strokeWidth="2"
        />
        <path d="M35 50H85V60H35V50Z" fill="#FFD166" stroke="#E5383B" strokeWidth="2" />
        <path d="M50 30C50 30 50 20 60 20C70 20 70 30 70 30" stroke="#E5383B" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 30H70V50H50V30Z" fill="#FFD166" stroke="#E5383B" strokeWidth="2" />
        <path d="M45 70C45 70 60 80 75 70" stroke="#E5383B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    rice: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M40 50C40 39 49 30 60 30C71 30 80 39 80 50V90C80 95.5 75.5 100 70 100H50C44.5 100 40 95.5 40 90V50Z"
          fill="#FFF1E6"
          stroke="#E5383B"
          strokeWidth="2"
        />
        <path d="M45 60C45 60 55 70 60 70C65 70 75 60 75 60" stroke="#E5383B" strokeWidth="2" strokeLinecap="round" />
        <path d="M45 70C45 70 55 80 60 80C65 80 75 70 75 70" stroke="#E5383B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="45" r="5" fill="#FFD166" />
        <circle cx="50" cy="50" r="3" fill="#FFD166" />
        <circle cx="70" cy="50" r="3" fill="#FFD166" />
      </svg>
    ),
  }

  return illustrations[type]
}
