import { Detalle } from "../models/Detalle.js";

export async function createDetalle(req, res) {
  //const t = await sequelize.transaction();
    try {
      const { saldoFac, idCabecera, numeroFac,valorApagar } = req.body;
      const newDetalle = await Detalle.create({
        saldoFac,
        idCabecera,
        numeroFac,
        valorApagar,
      });
     // await t.commit();
      res.json(newDetalle);
    } catch (error) {
      return res.status(500).json({ message: error.message });
      
    }
  }

  export async function getDetalles(req, res) {
    try {
      const detalles = await Detalle.findAll({
        attributes: ["idPD", "saldoFac" ,"idCabecera", "numeroFac", "valorApagar" ],
        order: [["idPD", "DESC"]],
      });
      res.json(detalles);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  export async function getDetalle(req, res) {
    const { idPD } = req.params;
    try {
      const detalle = await Detalle.findAll({
        where: { idCabecera: idPD},
        attributes: ["idPD", "saldoFac" ,"idCabecera", "numeroFac", "valorApagar" ],
      });
      res.json(detalle);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  export async function getFactura(req, res) {
    const { idPD } = req.params;
    try {
      const detalle = await Detalle.findOne({
        where: { numeroFac: idPD},
        attributes: [ "saldoFac" ,"idCabecera", "numeroFac", "valorApagar"],
      order: [["saldoFac", "ASC"]],
      });
      res.json(detalle);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  
  
export async function deleteDetalle(req, res) {
  const { id } = req.params;
  try {
    await Detalle.destroy({
      where: {
        idPD: id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const updateDetalle = async (req, res) => {
  try {
    const { id } = req.params;
    const { valorApagar } = req.body;
    const detalle = await Detalle.findByPk(id);
    detalle.valorApagar = valorApagar;
    
    await detalle.save();
    res.json(detalle);
    //onsole.log({ $1 });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};