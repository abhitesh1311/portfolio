
const express=require('express');
const router=express.Router();
const getRoute=express.Router();

const {clientData}=require('../controller/controller.js');
const client=require('../models/client');
router.post('/contact', clientData);
getRoute.get('/contact', async (req, res) => {
    try {
      const messages = await client.find();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching contact messages' });
    }
});

module.exports={router, getRoute};