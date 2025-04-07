
import express from 'express';
import message from '../models/message.model.js';

const router = express.Router();

router.post('/message', async (req, res) => {
  try {
    const newForm = new message(req.body);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;