import { Router  } from "express";
import { getDetalle, getDetalles, createDetalle, getFactura, updateDetalle, deleteDetalle  } from "../controllers/detalle.controller.js"

const router = Router();

router.get("/", getDetalles);
router.get("/:idPD", getDetalle);
router.post("/", createDetalle);
router.put("/:id", updateDetalle );
router.delete("/:id", deleteDetalle);

//
router.get("/idFac/:idPD", getFactura);

export default router;
