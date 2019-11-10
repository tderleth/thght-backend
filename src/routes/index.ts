import * as express from 'express';
import { router as healthRouter } from './health';

const router = express.Router();
const baseRoute = '/';

router.use(baseRoute, healthRouter);

export { router };
