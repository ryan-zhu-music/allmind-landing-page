import React from "react";

export default function Nav() {
  return (
    <nav className="w-full flex flex-col items-center justify-start sticky top-0">
      <div className="bg-secondary h-14 w-full">
        <div className="container flex flex-col items-center justify-between"></div>
      </div>
      <div className="w-full h-24 bg-background">
        <div className="container flex flex-col items-center justify-start"></div>
      </div>
    </nav>
  );
}
