import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/image.png";
import { site } from "@/components/data/site";

export default function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} home`}
    >
      <Image
        src={logo}
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10 transition-transform duration-500 ease-spring group-hover:rotate-[8deg] group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-bold tracking-tight ${dark ? "text-white" : "text-ink-900"}`}>
          Source Code
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.22em] ${dark ? "text-white/60" : "text-gray-500"}`}>
          IT Solutions PLC
        </span>
      </span>
    </Link>
  );
}
