const mongoose = require('mongoose');
const Client = require('../models/client');

const clientData = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const client = new Client({ name, email, message });
    await client.save();
    res.status(201).json({ message: 'Client data saved successfully' });
  } catch (error) {
    console.error('Error saving client data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { clientData };