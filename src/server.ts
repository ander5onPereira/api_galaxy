import { app } from './app';

app.listen(process.env.PORT_SERVER ? process.env.PORT_SERVER : 3001, () => {
  console.clear();
  console.log(
    `🚪 porta ${process.env.PORT_SERVER ? process.env.PORT_SERVER : 3001}`,
  );
});
