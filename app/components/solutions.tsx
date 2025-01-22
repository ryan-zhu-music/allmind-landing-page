"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Solution } from "./ui/solution";
import Separator from "./ui/separator";

type Solution = {
  title: string;
  description: string;
  link: string;
  price: {
    value: string;
    unit: string;
  };
  icon: string;
  tag?: string;
  button: {
    text: string;
    variant: "primary" | "outline-background";
  };
};

const solutions: {
  title: string;
  description: string;
  solutions: Solution[];
}[] = [
  {
    title: "Proxy Solutions",
    description:
      "Gather public data at scale with fewer IP blocks using Oxylabs' Proxy Solutions. Utilize one of the market's most reliable and largest proxy services, covering 195 countries globally, as well as collect public data block-free with AI-based Web Unblocker.",
    solutions: [
      {
        title: "Residential Proxies",
        description: "Human-like scraping without IP blocking.",
        link: "/products/residential-proxy-pool",
        price: {
          value: "8",
          unit: "",
        },
        icon: "/icons/residential-proxies.svg",
        tag: "Pay as you go",
        button: {
          text: "Try Oxylabs",
          variant: "primary",
        },
      },

      {
        title: "ISP Proxies",
        description: "Bypass toughest targets using trusted ASN provider IPs.",
        link: "/products/isp-proxies",
        price: {
          value: "2.10",
          unit: "IP",
        },
        icon: "/icons/isp-proxies.svg",
        button: {
          text: "Try Oxylabs",
          variant: "primary",
        },
      },
      {
        title: "Mobile Proxies",
        description: "IP addresses from real mobile devices.",
        link: "/products/mobile-proxies",
        price: {
          value: "9",
          unit: "",
        },
        icon: "/icons/mobile-proxies.svg",
        tag: "Pay as you go",
        button: {
          text: "Try Oxylabs",
          variant: "primary",
        },
      },
      {
        title: "Datacenter Proxies",
        description: "Fast and cost-efficient scraping.",
        link: "/products/datacenter-proxies",
        price: {
          value: "50",
          unit: "",
        },
        icon: "/icons/datacenter-proxies.svg",
        tag: "Pay as you go",
        button: {
          text: "Try Oxylabs",
          variant: "primary",
        },
      },
      {
        title: "Dedicated Datacenter Proxies",
        description: "Top-performing proxies on the market.",
        link: "/products/dedicated-datacenter-proxies",
        price: {
          value: "8.25",
          unit: "month",
        },
        icon: "/icons/dedicated-datacenter-proxies.svg",
        tag: "Pay as you go",
        button: {
          text: "Try Oxylabs",
          variant: "primary",
        },
      },
      {
        title: "Web Unblocker",
        description: "AI-based solution for block-free scraping.",
        link: "/products/web-unblocker",
        price: {
          value: "75",
          unit: "month",
        },
        icon: "/icons/web-unblocker.svg",
        button: {
          text: "Try Oxylabs",
          variant: "primary",
        },
      },
    ],
  },
  {
    title: "Web Scraper API",
    description: "All-in-one web data collection platform",
    solutions: [
      {
        title: "Web Scraper API",
        description:
          "Covers all stages of web scraping, from crawling URLs and bypassing blocks to precise data parsing and delivery to your cloud storage. Efficiently extract data from search engines, e-commerce sites, travel platforms, and any other website.",
        link: "/products/web-scraper-api",
        price: {
          value: "49",
          unit: "month",
        },
        icon: "/icons/web-scraper-api.svg",
        button: {
          text: "Start free trial",
          variant: "primary",
        },
      },
    ],
  },
  {
    title: "Datasets",
    description:
      "Unlock readily available datasets tailored to your data toolset. We handle the entire public web data extraction process, freeing up your time to focus on other vital aspects of your business.",
    solutions: [
      {
        title: "Company Data",
        description: "Comprehensive data sets for business profiling.",
        link: "/products/company-data",
        price: {
          value: "1000",
          unit: "month",
        },
        icon: "/icons/company-data.svg",
        button: {
          text: "Contact sales",
          variant: "outline-background",
        },
      },
      {
        title: "Job Postings Data",
        description: "Datasets for labour market research and insights.",
        link: "/products/job-postings-data",
        price: {
          value: "1000",
          unit: "month",
        },
        icon: "/icons/job-postings-data.svg",
        button: {
          text: "Contact sales",
          variant: "outline-background",
        },
      },
      {
        title: "Product Review Data",
        description: "Fresh datasets for user sentiment analysis.",
        link: "/products/product-review-data",
        price: {
          value: "1000",
          unit: "month",
        },
        icon: "/icons/product-review-data.svg",
        button: {
          text: "Contact sales",
          variant: "outline-background",
        },
      },
      {
        title: "E-Commerce Product Data",
        description: "Datasets for product catalog insights.",
        link: "/products/e-commerce-product-data",
        price: {
          value: "1000",
          unit: "month",
        },
        icon: "/icons/e-commerce-product-data.svg",
        button: {
          text: "Contact sales",
          variant: "outline-background",
        },
      },
      {
        title: "Community and Code Data",
        description: "Datasets for developer community trends.",
        link: "/products/community-and-code-data",
        price: {
          value: "1000",
          unit: "month",
        },
        icon: "/icons/community-and-code-data.svg",
        button: {
          text: "Contact sales",
          variant: "outline-background",
        },
      },
    ],
  },
];

const ips = [
  {
    title: "United States",
    value: "11,074,560 IPs",
    icon: "/icons/united-states.svg",
  },
  {
    title: "Germany",
    value: "3,579,899 IPs",
    icon: "/icons/germany.svg",
  },
  {
    title: "United Kingdom",
    value: "3,622,838 IPs",
    icon: "/icons/united-kingdom.svg",
  },
  {
    title: "+ 192 More",
    value: "> See all locations",
    icon: "/icons/earth.svg",
  },
];

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);

  return (
    <section className="w-full flex flex-col items-center justify-start bg-foreground">
      <div className="container flex flex-col items-center justify-start gap-10 py-20 text-background">
        <h2 className="text-center w-3/5">
          Web scraping solutions powering projects of any scale
        </h2>
        <p className="text-center text-xl w-3/5">
          From various types of proxies or Scraper APIs to advanced solutions
          unblocking any website, experience the power of industry-leading
          Oxylabs <a href="/products">products.</a>
        </p>
        <div className="w-full grid grid-cols-4 gap-6">
          <div className="flex flex-col gap-6">
            {solutions.map((solution) => (
              <button
                key={solution.title}
                onClick={() => setSelectedSolution(solution)}
                className={
                  "py-6 px-6 " +
                  (selectedSolution.title === solution.title
                    ? "bg-gradient-to-r from-white/0 to-mint-opaque border-r-2 border-r-mint"
                    : "bg-gradient-to-r from-white/0 to-navy-opaque border-r-2 border-r-navy-light")
                }
              >
                <h3 className="text-4xl text-left">{solution.title}</h3>
                {selectedSolution.title === solution.title && (
                  <p className="text-lg text-left mt-6">
                    {solution.description}
                  </p>
                )}
              </button>
            ))}
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-6">
            {selectedSolution.solutions.map((solution) => (
              <Solution key={solution.title} {...solution} />
            ))}
          </div>
        </div>
        <Separator />
        <div className="px-32 py-10 grid grid-cols-2 gap-32">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl">
              Global proxy pool for easy public data access
            </h3>
            <p className="text-xl">
              Utilize one of the most reliable and largest proxy services in the
              market with{" "}
              <strong>102M+ IPs, covering 195 countries worldwide.</strong>
            </p>
          </div>
          <div className="grid grid-cols-2">
            {ips.map((ip) => (
              <div key={ip.title} className="flex gap-4 items-center">
                <Image src={ip.icon} alt={ip.title} width={50} height={50} />
                <div>
                  <p className="text-lg">{ip.title}</p>
                  <p className="text-lg font-semibold">{ip.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
