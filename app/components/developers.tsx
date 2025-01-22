"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as Styles from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "./ui/button";
import Separator from "./ui/separator";
import Image from "next/image";

const codeSample = `import requests

username = "customer-USER"
password = "PASS"
proxy = "pr.oxylabs.io:7777"

proxies = {
  'http': f'http://{username}:{password}@{proxy}',
  'https': f'http://{username}:{password}@{proxy}'
}

response = requests.request(
    'GET',
    'https://ip.oxylabs.io/location',
    proxies=proxies,
)

print(response.text)`;

const communities = [
  {
    title: "Discord community",
    description: "Join our community to unite with web scraping enthusiasts",
    icon: "/icons/Discord.webp",
  },
  {
    title: "Scraping Experts",
    description: "Access free video lessons led by top-notch experts",
    icon: "/icons/Scrape.webp",
  },
  {
    title: "YouTube channel",
    description: "Find engaging videos on various data gathering topics",
    icon: "/icons/Youtube.webp",
  },
  {
    title: "GitHub",
    description:
      "Visit our channel for step-by-step technical scraping tutorials",
    icon: "/icons/Github.webp",
  },
];

export default function Developers() {
  return (
    <section className="w-full flex flex-col items-center justify-start bg-foreground py-10">
      <div className="container flex flex-col items-center justify-start text-background gap-28">
        <div className="grid grid-cols-2 gap-28">
          <div className="flex flex-col items-start justify-center gap-4 pr-10">
            <p className="font-semibold text-base">Top languages supported</p>
            <h2>Easily integrate our solutions into your projects</h2>
            <p className="text-xl py-8 leading-normal">
              We ensure that integrating our products into your scraping
              infrastructure is as effortless as possible. With multiple
              language support and ready-to-use code examples, a quick and easy
              start to your web scraping project is a guarantee.
            </p>
            <Button variant="outline-background" size="lg">
              See documentation
            </Button>
          </div>
          <div className="bg-navy-opaque rounded-xl flex flex-col items-start justify-center px-8 py-6 gap-2">
            <p className="text-secondary">Choose product:</p>
            <div className="w-full rounded-lg bg-foreground py-2 px-3">
              <p>Residential Proxies</p>
            </div>
            <SyntaxHighlighter
              language="python"
              style={Styles.tomorrowNightBlue}
              customStyle={{
                background: "transparent",
                backgroundColor: "transparent",
              }}
            >
              {codeSample}
            </SyntaxHighlighter>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-5 gap-20">
          <div className="col-span-2">
            <Image
              src="/graphics/Developers.webp"
              alt="Developers.webp"
              width={600}
              height={400}
            />
          </div>
          <div className="col-span-3 flex flex-col">
            <h2>Expert insights on public data gathering</h2>
            <p className="text-xl py-8 leading-normal">
              We constantly share our expertise on various platforms, so check
              our developer-focused communities for constant web scraping news
              flow.{" "}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {communities.map((community) => (
                <div className="flex items-start gap-6" key={community.title}>
                  <Image
                    src={community.icon}
                    alt={community.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      {community.title}
                    </h4>
                    <p className="text-lg">{community.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border border-background rounded-xl flex gap-8 p-8 items-center bg-neutral-600/20">
          <Image
            src="/icons/code.webp"
            alt="code.webp"
            width={80}
            height={80}
            className="object-contain"
          />
          <div>
            <h3 className="text-2xl pb-2">Visit our Developers Hub</h3>
            <p className="text-stretch-lg text-xl text-slate-400">
              From all necessary technical product information to valuable
              public data gathering tutorials and helpful resources, find
              everything you need in one place.
            </p>
          </div>
          <Button variant="primary" size="lg" className="px-20">
            Learn more{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}
