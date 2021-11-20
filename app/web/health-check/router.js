import Router from 'koa-router';
import { version } from '../../../package.json';

export default new Router().get('/', (ctx) =>
  ctx.ok(`GAMERHUB API  v.${version}`)
);
