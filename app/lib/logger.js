import { createLogger } from 'bunyan';
import bunyanFormat from 'bunyan-format';

const logger = createLogger({
  name: 'GAMERHUB API',
  stream: bunyanFormat({ outputMode: 'long' }),
});
export default logger;
