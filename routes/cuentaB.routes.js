import { Router } from "express";

import { createCuentaB, getCuentaB, getCuentaBs, deleteCuentaB, updateCuentaB, getCuentaCo } from "../controllers/cuentaB.controller.js";

const router = Router();

router.get('/', getCuentaBs);
router.get('/cc', getCuentaCo);
router.get('/:idCB', getCuentaB);


router.post('/', createCuentaB);
router.delete('/:id', deleteCuentaB);

router.put('/:id',updateCuentaB);



export default router;