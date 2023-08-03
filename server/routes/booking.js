import express from 'express';
import { newbooking, deletebooking } from '../controllers/booking.js';
import { fetchuser } from '../middleware/auth.js';
const router = express.Router();

router.post('/newbooking',fetchuser, newbooking);

router.delete('/deletebooking/:id',fetchuser, deletebooking);

export default router;