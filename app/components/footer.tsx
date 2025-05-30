import { ViewCounter } from './ViewCounter'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-8 pb-8 text-sm text-center text-gray-600 dark:text-gray-400">
      <p className="mt-2">
        © {new Date().getFullYear()} Irineu Brito. Todos os direitos reservados.
      </p>
      <div className="flex justify-center items-center gap-1">
        <span>•</span>
        <ViewCounter />
        <span>•</span>
      </div>
    </footer>
  )
}