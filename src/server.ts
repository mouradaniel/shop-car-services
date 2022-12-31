import express from 'express';

import { brandsRoutes } from './routes/brands.routes';

const app = express();

app.use(express.json());

app.use('/brands', brandsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Shop Car!' });
});

app.listen(3000, () => {
  console.log('Server is running on 3000');
});
