import React from "react";
import Button from "./ui/button";
import Image from "next/image";

const partners = [
  "trivago",
  "seon",
  "debunk",
  "conductor",
  "stanford",
  "boltive",
  "wiser",
];

export default function Hero() {
  return (
    <header className="w-full flex flex-col items-center justify-start h-screen">
      <div className="container flex flex-col items-center justify-end h-full">
        <div className="w-full flex flex-nowrap">
          <div className="w-1/2 flex flex-col items-start justify-center gap-8">
            <h1>Easy Access to Web Data at Scale</h1>
            <p className="text-stretch-lg text-xl">
              Powered by the world&apos;s largest ethical proxy network, AI and
              ML-driven Scraper APIs, and tailored no-code datasets.
            </p>
            <div className="flex gap-5">
              <Button variant="primary">Try Oxylabs today</Button>
              <Button variant="outline-foreground">Start with Google</Button>
            </div>
          </div>
          <div className="w-1/2 flex place-content-center">
            <Image
              src="/hero-graphic.webp"
              alt="Hero graphic"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <p className="font-semibold text-lg">
          A trusted partner for 3,500+ clients globally
        </p>
        <div className="w-full flex items-center justify-center gap-10 py-10">
          {partners.map((partner) => (
            <Image
              key={partner}
              src={`/partners/${partner}.webp`}
              alt={partner}
              width={130}
              height={130}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
