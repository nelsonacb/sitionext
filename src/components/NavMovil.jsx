"use client";
import Link from "next/link";

const NavMovil = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="block rounded-md px-3 py-2 text-slate-500
        transition-colors hover:bg-sky-500 hover:text-white"
    >
      {children}
    </Link>
  );
};

export default NavMovil;
