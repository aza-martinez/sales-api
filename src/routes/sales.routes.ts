import { Router } from "express";
import { getSalesByTeam, getSalesByUser  } from '../controllers/sales.controller'
const router = Router();

router.route('/team/:teamId').get(getSalesByTeam);
router.route('/users/:userId').get(getSalesByUser);

export default router;