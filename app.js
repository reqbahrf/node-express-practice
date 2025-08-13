const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const people = require('./routes/people');
const auth = require('./routes/auth');
app.use('/api/people', people);
app.use('/auth', auth);

app.listen(5000, () => {
  console.log('App is running at port 5000');
});
