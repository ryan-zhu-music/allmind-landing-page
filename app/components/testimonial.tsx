import Image from "next/image";
import React from "react";
import Separator from "./ui/separator";
import Button from "./ui/button";

const companies = [
  "conductor--black.webp",
  "Zulu5.webp",
  "P2S.webp",
  "wiser--black.webp",
  "crawly.webp",
  "morningscore.webp",
];

const stewardships = [
  "Partnerships",
  "Cybersecurity",
  "Ethics",
  "Sustainability",
  "Innovation",
];

export default function Testimonial() {
  return (
    <section className="w-full flex flex-col items-center justify-start">
      <div className="container flex flex-col items-center justify-start py-10 gap-10">
        <h2 className="py-10">Trusted by top companies</h2>
        <div className="grid grid-cols-6 bg-secondary p-1 gap-2 rounded-xl w-full">
          {companies.map((subpage, index) => (
            <div
              key={index}
              className={
                "px-2 py-7 rounded-xl font-medium text-lg hover:bg-white/70 flex place-content-center cursor-pointer"
              }
            >
              <Image
                src={`/partners/${subpage}`}
                alt={subpage}
                width={140}
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-28 py-12">
          <div className="flex flex-col items-start justify-center gap-8">
            <p className="text-xl">
              {`"Building and maintaining your own scraping and parsing solution
              is expensive. That's why we turned to Oxylabs. They offered one of
              the best price-to-value combinations in the market and helped us
              save our total web scraping costs."`}
            </p>
            <Separator />
            <div className="w-full flex items-center gap-4">
              <Image
                src="/partners/conductor-bubble.webp"
                alt="Conductor"
                width={50}
                height={50}
              />
              <div className="flex flex-col flex-grow gap-1">
                <p className="font-semibold">Wei Zheng</p>
                <p>Chief Product Officer at Conductor</p>
              </div>
              <p className="font-medium ">Read full story {">"}</p>
            </div>
          </div>
          <div>
            <Image
              src="/partners/wei-zheng.webp"
              alt="Wei Zheng"
              width={600}
              height={400}
            />
          </div>
        </div>
        <Button variant="outline-foreground" size="lg" className="mb-10">
          More customer stories
        </Button>
        <Separator />
        <h3 className="text-3xl font-semibold mb-10">
          Experience our award-winning web intelligence solutions
        </h3>
        <div className="w-full">
          <Image
            src="/icons/badges.webp"
            alt="Badge 1"
            width={1600}
            height={1000}
            className="w-full object-contain"
          />
        </div>
        <div className="grid grid-cols-2 my-32 gap-32">
          <div>
            <Image
              src="/graphics/EthicallySourcedProxies.svg"
              alt="Proxies"
              width={2000}
              height={2000}
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <h3>100M+ ethically procured Residential Proxies</h3>
            <p className="text-xl leading-normal">
              Oxylabs Residential Proxy pool is ethically procured from
              carefully selected partners that uphold the highest business
              ethics and strict compliance. A majority of Oxylabs’ proxy network
              is composed of Tier A+ model proxies.
            </p>
            <Button variant="outline-foreground" size="lg">
              Learn more
            </Button>
          </div>
        </div>
        <h2>Pioneering industry stewardship</h2>
        <div className="grid grid-cols-5 bg-secondary p-1 gap-2 rounded-xl w-4/5">
          {stewardships.map((stewardship, index) => (
            <button
              key={index}
              className={
                "p-2 text-center rounded-xl font-medium text-lg hover:bg-white/70 " +
                (index === 0 && "bg-white")
              }
            >
              {stewardship}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 my-32 gap-32">
          <div className="flex flex-col justify-center gap-6">
            <h3>Empowering change with Project 4β</h3>
            <p className="text-xl leading-normal mb-6">
              Through our pro bono initiative &quot;Project 4β,&quot; we{" "}
              <strong>
                supply Oxylabs know-how, robust infrastructure, and resources{" "}
                <em>pro bono</em>
              </strong>{" "}
              to academic institutions, researchers, NGOs, NPOs, and other
              organizations, helping maximize their research impact and
              enhancing their understanding of web intelligence collection.
            </p>
            <Button variant="outline-foreground" size="lg">
              Read our success stories
            </Button>
          </div>
          <div>
            <Image
              src="/graphics/4Beta.webp"
              alt="4Beta.webp"
              width={2000}
              height={2000}
            />
          </div>
        </div>
        <div className="w-full rounded-3xl bg-secondary p-20 gap-32 flex">
          <div className="flex flex-col gap-8 w-2/5">
            <h3>Certified data centers and upstream providers</h3>
            <div className="grid grid-cols-5 gap-5">
              <Image
                src="/graphics/providers.svg"
                alt="Providers"
                width={80}
                height={80}
              />
              <Image
                src="/graphics/providers.svg"
                alt="Providers"
                width={80}
                height={80}
              />
              <Image
                src="/graphics/providers.svg"
                alt="Providers"
                width={80}
                height={80}
              />
              <Image
                src="/graphics/providers.svg"
                alt="Providers"
                width={80}
                height={80}
              />
              <Image
                src="/graphics/providers.svg"
                alt="Providers"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 w-3/5">
            <h3>All of our products are insured</h3>
            <div className="flex flex-nowrap">
              <p className="text-xl leading-normal w-1/2">
                All of our products are covered by Technology Errors & Omissions
                (Technology E&O) and Cyber Insurance.
              </p>
              <div className="flex-grow place-content-center place-items-center">
                <Image
                  src="/graphics/lloyds.svg"
                  alt="Insurance"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
