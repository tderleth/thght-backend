import * as express from 'express';
import { config } from './config';
import { router as routes } from './routes';

const app = express();

app.set('port', config.port);

app.use(routes);

app.listen(app.get('port'), (): void => {
  console.log(`${config.name} listening on port ${config.port}`);
});
