import express from 'express';
import serverless from 'serverless-http';

const app: express.Application = express();

app.get('/example', (_req: express.Request, res: express.Response) =>
  res.status(200).json({
    message: 'This is an example response',
  }),
);

export default serverless(app);
