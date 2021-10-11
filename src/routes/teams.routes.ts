import { Router } from "express";
import {getTeams, getTeam} from '../controllers/teams.controller'
const router = Router();

router.route('/').get(getTeams);
router.route('/:teamId').get(getTeam);

export default router;