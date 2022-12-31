import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Shop Car!' });
});

app.listen(3000, () => {
  console.log('Server is running on 3000');
});
