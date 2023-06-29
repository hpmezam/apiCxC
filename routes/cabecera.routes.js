import { Router } from "express";
import { getPagoCabs, getPagoCab, createPagoCab, updatePagoCab, deletePagoCab, getPagoCuentas, getEstado} from "../controllers/cabecera.controller.js";

const router = Router();

router.get('/', getPagoCabs);
router.get('/estado/rango/:id/:startDate/:endDate', getEstado);

router.get('/:id', getPagoCab);
router.get('/cuentab/:id', getPagoCuentas);

router.post('/', createPagoCab);

router.put('/:id',updatePagoCab);
router.delete('/:id', deletePagoCab);
export default router;