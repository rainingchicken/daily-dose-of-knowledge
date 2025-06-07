"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/math", text: "Math Problem" },
  { href: "/english", text: "English Problem" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          DDK Home
        </Link>
      </div>
      <div className="dropdown dropdown-hover dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {navLinks &&
            navLinks.map((link) => {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`btn btn-block ${
                      pathname === link.href ? "btn-info" : ""
                    }`}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
