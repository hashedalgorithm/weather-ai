import express from 'express';
import ShiftController from './controller.js';

class ShiftRouter {
  private controller: ShiftController;

  constructor(shiftController: ShiftController) {
    this.controller = shiftController;
  }

  getRouter() {
    const router = express.Router();
    router.route('/:shiftId').get(this.controller.getShift);
    router.route('/').get(this.controller.getShifts);
    router.route('/').post(this.controller.createShift);
    return router;
  }
}

export default ShiftRouter;
