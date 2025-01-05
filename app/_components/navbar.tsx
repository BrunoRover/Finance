"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flex flex-wrap items-center justify-between border-b border-solid px-6 py-4">
      {/* LOGO */}
      <div className="flex w-full items-center justify-between sm:w-auto">
        <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />
        {/* Botão de menu para dispositivos menores */}
        <div className="sm:hidden">
          <button
            type="button"
            className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* LINKS PRINCIPAIS */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full gap-10 sm:flex sm:w-auto sm:items-center sm:justify-center`}
      >
        <Link
          href="/"
          className={
            pathname === "/"
              ? "block py-2 font-bold text-primary sm:py-0"
              : "block py-2 text-muted-foreground sm:py-0"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "block py-2 font-bold text-primary sm:py-0"
              : "block py-2 text-muted-foreground sm:py-0"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "block py-2 font-bold text-primary sm:py-0"
              : "block py-2 text-muted-foreground sm:py-0"
          }
        >
          Assinatura
        </Link>
      </div>

      {/* USERBUTTON */}
      <div className="hidden sm:flex">
        <UserButton showName />
      </div>
    </nav>
  );
};

export default Navbar;
