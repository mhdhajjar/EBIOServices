import { NextApiRequest, NextApiResponse } from 'next';
import {App} from '../Models/App';

// Get all apps
export const getApps = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apps = await App.findAll();
    res.status(200).json(apps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch apps' });
  }
};

// Get a single app by ID
export const getAppById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const app = await App.findOne({
      where: { id: id as string },
    });
    if (app) {
      res.status(200).json(app);
    } else {
      res.status(404).json({ error: 'App not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch app' });
  }
};

// Create a new app
export const createApp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, dateofcreation, capital } = req.body;
  try {
    const newApp = await App.create({
      name,
      dateofcreation,
      capital,
    });
    res.status(201).json(newApp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create app' });
  }
};

// Update an existing app
export const updateApp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { name, dateofcreation, capital } = req.body;
  try {
    const app = await App.findOne({ where: { id: id as string } });
    if (!app) {
      return res.status(404).json({ error: 'App not found' });
    }

    app.name = name || app.name;
    app.dateofcreation = dateofcreation || app.dateofcreation;
    app.capital = capital || app.capital;

    await app.save();
    res.status(200).json(app);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update app' });
  }
};

// Delete an app
export const deleteApp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const app = await App.findOne({ where: { id: id as string } });
    if (!app) {
      return res.status(404).json({ error: 'App not found' });
    }

    await app.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete app' });
  }
};
