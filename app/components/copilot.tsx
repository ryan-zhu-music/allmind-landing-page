import Image from "next/image";
import React from "react";
import Button from "./ui/button";

export default function Copilot() {
  return (
    <section className="w-full flex flex-col items-center justify-start bg-foreground">
      <div className="container grid grid-cols-2 px-10 py-14 gap-32">
        <div className="flex place-content-center">
          <Image
            src="/copilot.webp"
            alt="Copilot"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-6 items-start justify-start text-background">
          <p className="inline-flex gap-2 font-semibold">
            <Image src="/icons/star.svg" alt="Star" width={20} height={20} />
            NEW FEATURE
          </p>
          <h2>Introducing OxyCopilot</h2>
          <p className="text-xl">
            Speed up data collection with{" "}
            <strong>the first AI-powered assistant</strong> designed to handle
            diverse website structures and meet your data extraction needs
            without manual coding.
          </p>
          <ul className="list-disc list-inside text-xl">
            <li>Start scraping using English language prompts</li>
            <li>Parse raw HTML into structured data </li>
            <li>Scale through the Web Scraper API platform</li>
          </ul>
          <Button variant="outline-background" size="lg" className="mt-10">
            Try for free
          </Button>
        </div>
      </div>
    </section>
  );
}
