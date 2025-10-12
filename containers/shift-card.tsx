import { Badge } from "@/components/ui/badge";
import { formatDateXXXMMMDDYYYY, formatTimeHHMM } from "@/lib/date";
import React from "react";
import { Shift } from "types";

type ShiftCardProps = Shift;
const ShiftCard = (shift: ShiftCardProps) => {
  return (
    <article className="flex flex-col gap-2 px-4 py-5">
      <div className="flex justify-between gap-4 items-center">
        <div className="flex">
          <p>{formatDateXXXMMMDDYYYY(shift.shiftStartsFrom.toISOString())}</p>
          <p>{`${formatTimeHHMM(shift.shiftStartsFrom.toISOString())} - ${formatTimeHHMM(shift.shiftEndsAt.toISOString())}`}</p>
        </div>
        <Badge>{shift.shiftCompanyLocation}</Badge>
      </div>
    </article>
  );
};

export default ShiftCard;
