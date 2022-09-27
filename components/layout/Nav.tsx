import React, { useEffect, useState } from "react";
import Link from "next/link";

import { hideMenu } from "../../lib/hideMenu";
import MenuClose from "../svg/MenuClose";

export interface NavProps {
  /**
   * Whether the svg is white or standard colour
   */
  Sticky: boolean;
}

export default function Nav({ Sticky }: NavProps) {

  let navStyles;

  if (Sticky) {
    navStyles = "text-black peer-checked:text-black px-4 py-2 flex items-center outline-none focus:outline-none focus:ring-0";
  } else {
    navStyles = "hover:bg-black hover:bg-opacity-5 rounded-full px-4 py-2 flex items-center outline-none focus:outline-none focus:ring-0";
  }

  return (
    <nav className="peer-checked:bg-white peer-checked:translate-x-0 -translate-x-full xl:translate-x-0 transition xl:transition-none shadow fixed top-0 left-0 h-screen w-full max-w-sm p-4 xl:shadow-none xl:p-0 xl:relative xl:h-auto xl:w-auto xl:max-w-none xl:flex">
      <label
        htmlFor="menu-toggle"
        className="cursor-pointer absolute top-2 left-2 xl:hidden hover:bg-black hover:bg-opacity-5 p-3 rounded-md"
      >
        <MenuClose />
      </label>

      <h3 className="text-center text-2xl text-gray-900 mb-3 xl:hidden">
        Menu
      </h3>

      <Link href="#">
        <a onClick={hideMenu} className={navStyles}>
        Board Game Hall of Fame
        </a>
      </Link>
      <Link href="#">
        <a onClick={hideMenu} className={navStyles}>
          League Table
        </a>
      </Link>
      <Link href="#">
        <a onClick={hideMenu} className={navStyles}>
          About
        </a>
      </Link>
      <Link href="/#">
        <a onClick={hideMenu} className={navStyles}>
          Archives
        </a>
      </Link>
      <Link href="#">
        <a onClick={hideMenu} className={navStyles}>
          Contact
        </a>
      </Link>
    </nav>
  );
}