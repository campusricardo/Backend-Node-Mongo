import express from "express";

const router = express.Router();

import { obtenerClientes,agregarCliente, borrarCliente, actualizarCliente, getOneCliente} from "../controllers/clientes.controllers.js";

router.get("/cliente/all", obtenerClientes);
router.post("/cliente/add", agregarCliente);
router.delete("/cliente/del/:id", borrarCliente);
router.patch("/cliente/upd/:id", actualizarCliente);
router.get("/cliente/get/:id", getOneCliente);

export default router;