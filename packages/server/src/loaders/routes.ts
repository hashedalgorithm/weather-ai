import ShiftModule from '../modules/shifts/module.ts';
import { type Express } from 'express';

const loadRoutes = (app: Express) => {
  app.use('/shifts', ShiftModule.router);
};

export default loadRoutes;
