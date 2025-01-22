import Image from "next/image";
import React from "react";
import Button from "./ui/button";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-start bg-foreground h-screen">
      <div className="w-full h-24 py-6 bg-mint-light">
        <div className="container flex h-full items-center justify-between gap-6">
          <Image
            src="/graphics/scrapingdigest.svg"
            alt="ScrapingDigest"
            width={220}
            height={100}
            className="object-contain"
          />
          <div className="flex-grow" />
          <p className="font-semibold">
            Get the latest news from data gathering world
          </p>
          <Button variant="primary" size="lg">
            I&apos;m interested
          </Button>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-start"></div>
    </footer>
  );
}
