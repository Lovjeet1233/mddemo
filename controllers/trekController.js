const Trek = require('../models/Trek');
const Itinerary = require('../models/Itinerary');

exports.getTreks = async (req, res) => {
  const treks = await Trek.find();
  res.json(treks);
};

exports.addTrek = async (req, res) => {
  const { name, description, image, duration, cost } = req.body;
  const trek = new Trek({ name, description, image, duration, cost });
  await trek.save();
  res.status(201).json(trek);
};

exports.deleteTrek = async (req, res) => {
  const { id } = req.params;
  await Trek.findByIdAndDelete(id);
  res.status(200).json({ message: 'Trek deleted' });
};
