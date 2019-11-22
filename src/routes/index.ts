import * as express from 'express';
import { router as docsRouter } from './docs';
import { router as healthRouter } from './health';

const router = express.Router();
const baseRoute = '/';

router.use(baseRoute, healthRouter);
router.use(baseRoute, docsRouter);

export { router };
