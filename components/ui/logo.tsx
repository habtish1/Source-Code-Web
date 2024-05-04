import Link from "next/link";
import logo from "@/public/images/image.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className="w-14 h-14" src={logo} alt="" />
    </Link>
  );
}
