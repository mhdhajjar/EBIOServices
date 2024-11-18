import { createServer } from 'http';
import next from 'next';
import sequelize from './config/db';  // Ensure you have db.ts to configure Sequelize

// Create the Next.js app
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Sequelize sync to create tables
const syncDatabase = async () => {
  try {
    console.log('Synchronizing database...');
    await sequelize.authenticate();
    await sequelize.sync({ force: false });  // Set `force: true` for re-creating tables (only for dev)
    console.log('Database synced successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Prepare Next.js
app.prepare().then(() => {
  // Initialize database tables when the server starts
  syncDatabase();

  // Create a custom server with http
  createServer((req, res) => {
    handle(req, res);  // Next.js handles all requests
  }).listen(3000, (err?: Error) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
