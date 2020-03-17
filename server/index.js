const express = require('express');
const db = require('../database/db');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/addStudent', (req, res) => {
  const { firstName, lastName } = req.body;
  console.log(firstName, lastName);
  if (firstName === process.env.ADMIN_FIRSTNAME && lastName === process.env.ADMIN_LASTNAME) {
    res.status(200).json('Admin');
  } else {
    db.addUser(firstName, lastName)
      .then(({ _id }) => res.status(201).json(_id))
      .catch((error) => res.status(500).json(error));
  }
});

app.post('/updateStudent', (req, res) => {
  console.log(req.body);
  db.updateUser(req.body)
    .then(({ _id }) => res.status(201).json(_id))
    .catch((error) => res.status(500).json(error));
});

app.listen(port, console.log(`Listening on port ${port}`));
