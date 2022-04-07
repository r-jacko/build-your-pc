import express from 'express';
import {getList, createElement} from "../controllers/list.js"

const router = express.Router();

router.get("/", getList);
router.post("/", createElement);

export default router;