import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nextdatabase', 'nextdatabase', 'nextdatabase', {
  host: 'localhost', // Docker runs PostgreSQL on localhost if exposed on port 5432
  dialect: 'postgres',
  port: 5432,
  logging: false, // Set to true to see SQL logs in the console
});

export default sequelize;
