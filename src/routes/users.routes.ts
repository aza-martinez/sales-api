import { Router } from "express";
import {getUsers,  getUser} from '../controllers/users.controllers'
const router = Router();

router.route('/').get(getUsers);
router.route('/:userId').get(getUser);

export default router;