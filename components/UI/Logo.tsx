import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src="/icons/Logo.svg" width={100} height={100} alt="Логотип" />
    </Link>
  );
}

export default Logo;
