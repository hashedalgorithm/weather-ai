import { Badge } from "@/components/ui/badge";
import { formatDateXXXMMMDDYYYY, formatTimeHHMM } from "@/lib/date";
import { Shift } from "@/types/generated/prisma";

type ShiftCardProps = Shift;
const ShiftCard = (shift: ShiftCardProps) => {
  return (
    <article className="flex flex-col gap-2 px-4 py-5 bg-accent rounded-md">
      <div className="flex justify-between gap-4 items-center">
        <div className="flex">
          <p>{formatDateXXXMMMDDYYYY(shift.shiftStartsFrom.toString())}</p>
          <p>{`${formatTimeHHMM(
            shift.shiftStartsFrom.toString()
          )} - ${formatTimeHHMM(shift.shiftEndsAt.toString())}`}</p>
        </div>
        <Badge>{shift.shiftCompanyLocation}</Badge>
      </div>
    </article>
  );
};

export default ShiftCard;
