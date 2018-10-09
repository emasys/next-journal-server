import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import log from 'fancy-log';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => log(`Example app listening on port ${port}!`));
