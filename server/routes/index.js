import express from 'express';
import Trips from '../controllers/trips';


// defining middleware routes
const router = express.Router();

// Post routes
router.get('/streams', Trips.GetAllTrips);

export default router;