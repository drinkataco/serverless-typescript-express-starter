import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/example', (_req, res) => res.status(200).json({
  message: 'This is an example response',
}));

export default serverless(app);
