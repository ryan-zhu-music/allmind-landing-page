"use client";

import Image from "next/image";
import React, { useState } from "react";

interface SubpageProps {
  children?: React.ReactNode;
  title: string;
  description: string;
  badges?: string[];
  image: string;
}

function Subpage({
  children,
  title,
  description,
  badges = [],
  image,
}: SubpageProps) {
  return (
    <div className="grid grid-cols-2 gap-24 py-10">
      <div className="flex flex-col items-center gap-8 pr-10">
        <h3>{title}</h3>
        <p className="text-stretch-lg text-2xl">{description}</p>
        {children}
        <div className="w-full flex flex-wrap gap-4">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 whitespace-nowrap text-lg bg-primary font-semibold text-foreground rounded-full border border-gray-300"
            >
              {badge}
            </span>
          ))}
          <button className="px-4 py-2 whitespace-nowrap text-lg bg-primary font-semibold text-foreground rounded-full border border-gray-700">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
}

const subpages = [
  {
    title: "E-Commerce",
    component: (
      <Subpage
        title="Harness public data for e-commerce success"
        description="Access valuable e-commerce data, such as pricing, product information, or reviews, on a large scale."
        badges={[
          "Price monitoring",
          "Dynamic pricing",
          "Monitor product information",
          "Identify MAP policy violations",
        ]}
        image="/graphics/E-Commerce.webp"
      />
    ),
  },
  {
    title: "Cybersecurity",
    component: (
      <Subpage
        title="Boost cybersecurity operations with public data"
        description="Gather critical data while staying unnoticed by threat actors to make proactive security decisions."
        badges={[
          "Threat intelligence",
          "Email protection",
          "Prevent phishing attacks",
        ]}
        image="/graphics/Cybersecurity.webp"
      />
    ),
  },

  {
    title: "Brand Protection",
    component: (
      <Subpage
        title="Secure brands with top-tier public data collection solutions"
        description="Retrieve public data on a large scale to stop copyright infringement and counterfeiting."
        badges={[
          "Copyright infringement monitoring",
          "Anti-counterfeit tracking",
          "Domain squatting detection",
        ]}
        image="/graphics/Brand-Protection.webp"
      />
    ),
  },

  {
    title: "SERP Monitoring",
    component: (
      <Subpage
        title="Unleash SEO potential with real-time public SERP data"
        description="Extract highly localized search engine data to monitor rankings and brand visibility."
        badges={[
          "Monitor SERP results",
          "Backlink intelligence",
          "Ad intelligence",
        ]}
        image="/graphics/SERP-Monitoring.webp"
      />
    ),
  },
  {
    title: "Travel and Hospitality",
    component: (
      <Subpage
        title="Discover new opportunities with public travel data"
        description="Leverage real-time flight and hotel data to shape your travel business strategy with evidence-based insights."
        image="/graphics/Travel-Hospitality.webp"
      >
        <ul className="w-full text-lg list-disc pl-8">
          <li>Real-time ticket pricing data</li>
          <li>Hotel pricing trends</li>
        </ul>
      </Subpage>
    ),
  },
];

export default function Features() {
  const [selectedSubpage, setSelectedSubpage] = useState(0);

  return (
    <section className="w-full flex flex-col items-center justify-start">
      <div className="container flex flex-col items-center justify-start py-20 gap-10">
        <h2 className="max-w-[max(50%,600px)] text-center leading-snug">
          Oxylabs products fuel top industries with public web data
        </h2>
        <div className="grid grid-cols-5 bg-secondary p-1 gap-2 rounded-xl w-4/5">
          {subpages.map((subpage, index) => (
            <button
              key={index}
              className={`p-2 rounded-xl font-medium text-lg hover:bg-white/70 ${
                selectedSubpage === index ? "bg-background" : ""
              }`}
              onClick={() => setSelectedSubpage(index)}
            >
              {subpage.title}
            </button>
          ))}
        </div>
        <div className="w-full">{subpages[selectedSubpage].component}</div>
      </div>
    </section>
  );
}
