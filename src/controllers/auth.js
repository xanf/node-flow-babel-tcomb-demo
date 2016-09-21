// @flow
import express from 'express';
import { login } from '../services/auth/auth';
import run from '../helpers/express';

const app = express();

app.post('/login', run(async (req, res) => {
  const { username, password } = req.body;
  res.json(await login({ username, password }));
}));

export default app;
