import express from 'express';

import { brandsRoutes } from './routes/brands.routes';
import { specificationRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use('/brands', brandsRoutes);
app.use('/specifications', specificationRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Shop Car!' });
});

app.listen(3000, () => {
  console.log('Server is running on 3000');
});
