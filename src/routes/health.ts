import * as express from 'express';

const router = express.Router();
const baseRoute = '/health';

router.route(baseRoute).get((request, response) =>
  response.json({
    status: 'OK',
  }),
);

export { router };
