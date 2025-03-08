import Link from "next/link";

interface Button3dProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  text?: string;
  href?: string;
}

export default function Button3d({
  children,
  onClick,
  className = "",
  text,
  href,
}: Button3dProps) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block px-4 py-2 font-medium group ${className}`}
    >
      <Link href={href || ""}>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0" />
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black" />
        <span className="relative text-black group-hover:text-white transition-colors">
          {text}
        </span>
      </Link>
    </button>
  );
}
