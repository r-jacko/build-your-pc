import express from 'express';
import {getList, createElement ,deleteElement, updateElement} from "../controllers/list.js"

const router = express.Router();

router.get("/", getList);
router.post("/", createElement);
router.patch('/:id', updateElement);
router.delete('/:id', deleteElement);

export default router;