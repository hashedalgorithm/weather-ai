import { NextLayoutProps } from "@/types/next-types";
import React from "react";

const ShiftsLayout = ({ children }: NextLayoutProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="h1">Shifts</h2>
        <p>
          View all your upcoming shifts with weather-based clothing
          recommendations
        </p>
      </div>
      {children}
    </div>
  );
};

export default ShiftsLayout;
