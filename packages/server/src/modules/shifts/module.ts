import ShiftController from './controller.ts';
import ShiftService from './service.ts';
import ShiftRouter from './router.ts';

const service = new ShiftService();
const controller = new ShiftController(service);
const router = new ShiftRouter(controller);

const ShiftModule = {
  service,
  controller,
  router: router.getRouter(),
};

export default ShiftModule;
