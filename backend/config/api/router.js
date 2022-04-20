import express from 'express';
import PagesController from "../../controllers/PagesController.js"

const router = express.Router();

router.get("/results",PagesController.results);
router.get("/hotel",PagesController.hotel);

export default router;