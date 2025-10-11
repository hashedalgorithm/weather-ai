import ShiftController from './controller';
import ShiftService from './service';
import ShiftRouter from './router';

const service = new ShiftService();
const controller = new ShiftController(service);
const router = new ShiftRouter(controller);

export default {
  service,
  controller,
  router: router.getRouter(),
};
