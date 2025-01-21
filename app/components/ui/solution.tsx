import Image from "next/image";
import React from "react";
import Button from "./button";

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

export function Solution({
  title,
  description,
  link,
  price,
  icon,
  tag,
  button,
}: Solution) {
  return (
    <div className="flex flex-col justify-between w-full rounded-xl bg-navy-opaque p-8">
      <div className="flex justify-between items-start">
        <Image src={icon} alt={title} width={60} height={60} />
        {tag && (
          <p className="bg-yellow-600/10 text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full">
            {tag}
          </p>
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-base mt-1 text-lavender font-medium">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div>
          <p className="text-sm">Starts from</p>
          <p className="text-xs">
            <span className="text-2xl font-semibold">${price.value}</span>
            {price.unit && <span className="text-xs">/{price.unit}</span>}
          </p>
        </div>
        <a href={link}>
          <Button variant={button.variant}>{button.text}</Button>
        </a>
      </div>
    </div>
  );
}
