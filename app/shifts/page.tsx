import ShiftCard from "@/containers/shift-card";
import { Shift } from "@/types/generated/prisma";
import { withBaseURL } from "@/lib/utils";

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
