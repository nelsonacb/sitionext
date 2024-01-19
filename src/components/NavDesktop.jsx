"use client";
import Link from "next/link";

const NavDesktop = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="block rounded-md px-3 py-2 text-slate-500
        transition-colors hover:text-sky-500"
    >
      {children}
    </Link>
  );
};

export default NavDesktop;
