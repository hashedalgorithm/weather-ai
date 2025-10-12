import ShiftController from './controller.js';
import ShiftService from './service.js';
import ShiftRouter from './router.js';

const service = new ShiftService();
const controller = new ShiftController(service);
const router = new ShiftRouter(controller);

const ShiftModule = {
  service,
  controller,
  router: router.getRouter(),
};

export default ShiftModule;
