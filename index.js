// @flow
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import log from 'fancy-log';
import type { $Request } from 'express';
import router from './server/routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.use('*', (req: $Request, res: $Request): Object => res.send({ message: 'we live' }));

app.listen(port, (): Function => log(`Example app listening on port ${port}!`));
