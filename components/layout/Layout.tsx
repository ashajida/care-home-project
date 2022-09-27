import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export interface LayoutProps {
  // The usual React Child nodes
  children: string | React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  

  return (
    <>
      <Header />
      <main className="pt-32">{children}</main>
      <Footer />
    </>
  );
}
