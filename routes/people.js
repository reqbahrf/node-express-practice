const express = require('express');
const router = express.Router();

const {
  getPeople,
  updatePeople,
  deletePeople,
} = require('../controllers/people');
router.get('/', getPeople);

router.route('/:id').put(updatePeople).delete(deletePeople);
module.exports = router;
