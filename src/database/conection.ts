import { createConnection } from 'typeorm';
import path from 'path';
createConnection({
  type: 'sqlite',
  synchronize: true,
  logging: true,
  migrations: [path.resolve(__dirname, 'migrations', '{*.ts,*.js}')],
  database: path.resolve(
    __dirname,
    process.env.ISPRODUCT === 'true'
      ? `${process.env.DATABASE_PROD}`
      : `${process.env.DATABASE_DEV}`,
  ),
  entities: [path.resolve(__dirname, '..', 'models', '{*.ts,*.js}')],
  cli: {
    entitiesDir: path.resolve(__dirname, '..', 'models', '{*.ts,*.js}'),
    migrationsDir: path.resolve(__dirname, 'migrations', '{*.ts,*.js}'),
  },
})
  .then()
  .catch((err) => {
    console.log(err.message);
  });
