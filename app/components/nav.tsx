"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Button from "./ui/button";

export default function Nav() {
  const [scroll, setScroll] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full flex flex-col items-center justify-start fixed top-0 z-10">
      <div
        className={
          "bg-secondary w-full h-14 transition-all overflow-hidden duration-100 " +
          (scroll ? "-mt-14" : "mt-0")
        }
      >
        <div className="container flex h-full gap-8 items-center justify-between">
          <p className="font-semibold">Proxy locations</p>
          <p className="font-semibold">Network status</p>
          <p className="font-semibold">Careers</p>
          <div className="flex-grow" />
          <p>hello@oxylabs.io</p>
          <p className="font-semibold">English (EN)</p>
          <p className="font-semibold">Log in</p>
        </div>
      </div>
      <div className="w-full h-16 bg-background shadow-lg">
        <div className="container flex h-full items-center justify-start gap-8">
          <Image src="/logo.svg" alt="Oxylabs logo" width={130} height={100} />
          <p className="text-base font-medium">Proxies</p>
          <p className="text-base font-medium">Web Scraper API</p>
          <p className="text-base font-medium">Datasets</p>
          <p className="text-base font-medium">Pricing</p>
          <p className="text-base font-medium">Developers</p>
          <p className="text-base font-medium">Solutions</p>
          <div className="flex-grow" />
          <Button variant="secondary" size="sm">
            <p>Try Oxylabs today</p>
          </Button>
        </div>
      </div>
    </nav>
  );
}
