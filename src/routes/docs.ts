import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerSpecification from '../../files/docs/swagger.json';

const router = express.Router();
const baseRoute = '/docs';

router.use(baseRoute, swaggerUi.serve, swaggerUi.setup(swaggerSpecification));

export { router };
