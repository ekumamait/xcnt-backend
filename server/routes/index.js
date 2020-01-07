import express from 'express';
import Providers from '../controllers/expenses';


// defining middleware routes
const router = express.Router();

// Post routes
router.get('/streams', Providers.getAllProviders);
router.get('/streams/:id', Providers.getOneProvider);
router.put('/streams/:id', Providers.updateProvider);

export default router;
