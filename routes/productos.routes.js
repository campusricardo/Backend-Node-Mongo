import express from "express";

const router = express.Router();

import { obtenerCategorias, agregarCategoria, borrarCategoria, actualizarCategoria, getOneCategoria} from "../controllers/categoria.controllers.js";

router.get("/all", obtenerCategorias);
router.post("/add", agregarCategoria);
router.delete("/del/:id", borrarCategoria);
router.patch("/upd/:id", actualizarCategoria);
router.get("/get/:id", getOneCategoria);

export default router;