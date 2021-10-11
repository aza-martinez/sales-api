import { Router } from "express";
import {getClientById, getClients} from '../controllers/clients.controller'
const router = Router();

router.route('/').get(getClients);
router.route('/:clientId').get(getClientById);

export default router;