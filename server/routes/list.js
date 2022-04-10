import express from 'express';
import {getList,getListByFilter, getUserList, createElement ,deleteElement, updateElement} from "../controllers/list.js"
import authUser from '../middleware/authUser.js'

const router = express.Router();

router.get("/:id", getUserList);
router.get("/", getList);
router.get("/search", getListByFilter)
router.post("/",authUser, createElement);
router.patch('/:id',authUser, updateElement);
router.delete('/:id',authUser, deleteElement);

export default router;