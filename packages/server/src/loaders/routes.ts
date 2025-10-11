import shiftsModule from '../modules/shifts/user.module.js';

const loadRoutes = (app: Express) => {
  app.use('/shifts', userModule.router);
};

export default loadRoutes;
