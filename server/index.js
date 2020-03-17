const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/addUser', (req, res) => {
  const { firstName, lastName } = req.body;
  console.log(firstName, lastName);
  res.status(200).json({ userId: 'somethingfunny' });
});

app.listen(port, console.log(`Listening on port ${port}`));
