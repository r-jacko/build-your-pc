import express from 'express';
import {getList,getListByFilter, getUserList, createElement ,deleteElement, updateElement} from "../controllers/list.js"
import authUser from '../middleware/authUser.js'
import updateExpirationDate from '../middleware/updateExpirationDate.js';

const middlewareList = [authUser]

const router = express.Router();

router.get("/:id", getUserList);
router.get("/", getList);
router.get("/search", getListByFilter)
router.post("/",middlewareList, createElement);
router.patch('/:id',middlewareList, updateElement);
router.delete('/:id',middlewareList, deleteElement);

export default router;