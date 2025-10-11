import expressApp from './app.ts';

expressApp.listen(4000, () => {
  console.log('Server listening on http://localhost:4000...');
});
