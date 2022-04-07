import express from 'express';
import {getList, createElement, updateElement} from "../controllers/list.js"

const router = express.Router();

router.get("/", getList);
router.post("/", createElement);
router.patch('/:id', updateElement);

export default router;