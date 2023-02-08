import Router from "express";
import { getCities, getCitiesById, addCity } from "../controllers/controller.server.js";
import path from "path";

const router = Router();

router.get("/", (req, res) => getCities(req, res));

router.get("/:id", (req, res) => getCitiesById(req, res));

router.post("/", (req, res) => addCity(req, res));

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
});

export default router;