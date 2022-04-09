import express from 'express';
import {getList,getListByFilter, createElement ,deleteElement, updateElement} from "../controllers/list.js"

const router = express.Router();

router.get("/", getList);
router.get("/search", getListByFilter)
router.post("/", createElement);
router.patch('/:id', updateElement);
router.delete('/:id', deleteElement);

export default router;