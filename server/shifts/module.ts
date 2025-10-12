import ShiftController from "@/server/shifts/controller";
import ShiftService from "@/server/shifts/service";

const service = new ShiftService();
const controller = new ShiftController(service);

const ShiftModule = {
  service,
  controller,
};

export default ShiftModule;
