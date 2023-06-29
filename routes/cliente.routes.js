import { Router } from "express";
import { createCliente, deleteCliente, getCliente, getClientes, updateCliente } from "../controllers/cliente.controller.js";

const router = Router();

router.get('/', getClientes);
router.get('/:cedulaCli', getCliente);

router.post('/', createCliente);

router.put('/:id',updateCliente);
router.delete('/:id', deleteCliente);


export default router;