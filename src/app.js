import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';

import auth from './controllers/auth';
import config from './config';

mongoose.promise = Promise;
mongoose.connect(config.db);

const app = express();

app.use(bodyparser.json());

app.use('/api/auth', auth);

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!');
});
