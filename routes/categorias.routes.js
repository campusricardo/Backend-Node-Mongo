import express from "express";

const router = express.Router();

import { obtenerCategorias, agregarCategoria, borrarCategoria, actualizarCategoria, getOneCategoria} from "../controllers/categoria.controllers.js";

router.get("/categoria/all", obtenerCategorias);
router.post("/categoria/add", agregarCategoria);
router.delete("/categoria/del/:id", borrarCategoria);
router.patch("/categoria/upd/:id", actualizarCategoria);
router.get("/categoria/get/:id", getOneCategoria);

export default router;