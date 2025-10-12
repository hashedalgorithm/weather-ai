import ShiftCard from "@/containers/shift-card";
import { withBaseURL } from "@/lib/utils";
import React from "react";
import { Shift } from "types";

const ShiftsPage = async () => {
  const raw = await fetch(withBaseURL("/shifts"), { method: "GET" });
  const shifts = (await raw.json()) as Array<Shift>;

  return (
    <section className="flex flex-col ">
      {shifts.map((shift) => (
        <ShiftCard key={shift.shiftId} {...shift} />
      ))}
    </section>
  );
};

export default ShiftsPage;
