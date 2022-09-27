import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Nav from "./Nav";
import MenuOpen from "../svg/MenuOpen";
import Chat from "../svg/Chat";

import { hideMenu } from "../../lib/hideMenu";

export interface HeaderProps { }

export default function Header() {
  const [stickyHeader, setstickyHeader] = useState(false);

  const handleScroll = (stickyHeader:any) => {
    if (window.pageYOffset >= 50) {
      setstickyHeader(true);
    } else {
      setstickyHeader(false);
    }
  };

  React.useEffect(() => {
    const handler = () => handleScroll(stickyHeader);

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    }
  }, [stickyHeader]);

  return (
    <header
      className={`fixed w-full z-10 bg-header-bg bg-cover bg-no-repeat ${stickyHeader ? "bg-white shadow" : ""}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer xl:hidden hover:bg-white hover:bg-opacity-20 p-3 rounded-md"
        >
          <MenuOpen white={false} />
        </label>

        <input id="menu-toggle" type="checkbox" className="peer hidden" />

        <Link href="/">
          <a aria-label="Home page" className="max-w-[200px]">
            <Image src="/img/logo.png" width="343" height="137" layout="intrinsic" />
          </a>
        </Link>

        <Link
          href="/contact"
        >
          <a
          className="cursor-pointer xl:hidden hover:bg-white hover:bg-opacity-20 p-3 rounded-md"
          aria-label="Chat to us"
          >
            <Chat white={false} />
          </a>
        </Link>

        <div onClick={hideMenu} className="peer-checked:bg-black peer-checked:bg-opacity-30 peer-checked:visible invisible transition-all fixed top-0 left-0 h-screen w-screen xl:hidden"></div>

        <Nav Sticky={!stickyHeader} />
      </div>
    </header>
  );
}