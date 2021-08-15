import serverless from 'serverless-http';

jest.mock('serverless-http', () => jest.fn((express) => express));

export default serverless;
