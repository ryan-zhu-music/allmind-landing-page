import React from "react";
import Image from "next/image";
import Button from "./ui/button";

export default function Nav() {
  return (
    <nav className="w-full flex flex-col items-center justify-start fixed top-0">
      <div className="bg-secondary h-14 w-full">
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
      <div className="w-full h-20 bg-background shadow-lg">
        <div className="container flex h-full items-center justify-start gap-8">
          <Image src="/logo.svg" alt="Oxylabs logo" width={100} height={100} />
          <p className="text-lg font-medium">Proxies</p>
          <p className="text-lg font-medium">Web Scraper API</p>
          <p className="text-lg font-medium">Datasets</p>
          <p className="text-lg font-medium">Pricing</p>
          <p className="text-lg font-medium">Developers</p>
          <p className="text-lg font-medium">Solutions</p>
          <div className="flex-grow" />
          <Button variant="secondary" size="sm">
            <p>Try Oxylabs today</p>
          </Button>
        </div>
      </div>
    </nav>
  );
}
