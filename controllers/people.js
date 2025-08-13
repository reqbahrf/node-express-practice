const { people } = require('../data');
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const updatePeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    res
      .status(404)
      .json({ success: false, message: 'Please provide name value' });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePeople = (req, res) => {
  const id = Number(req.params.id);
  const newPeople = people.filter((person) => person.id !== id);
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  updatePeople,
  deletePeople,
};
