import express from 'express';
import {getList} from "../controllers/list.js"

const router = express.Router();

router.get("/", getList);

export default router;