import Router from "express";
import { getCities, getCitiesById, addCity } from "../controllers/controller.server.js";

const router = Router();

router.get("/", getCities);

router.get("/:id", getCitiesById);

router.post("/", addCity);

export default router;