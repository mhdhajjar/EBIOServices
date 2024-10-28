import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'postgres', // Choose 'mysql' | 'mariadb' | 'sqlite' | 'mssql' | 'postgres'
});

export default sequelize;
