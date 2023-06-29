import { CuentaBancaria } from "../models/CuentaBancaria.js";
import { sequelize } from "../database/database.js"
export async function createCuentaB(req, res) {
  try {
    const { idCB, nombreCB, entidadCB, descripcionCB, estadoCB } = req.body;
    const newCuenta = await CuentaBancaria.create({
      idCB,
      nombreCB,
      entidadCB,
      descripcionCB,
      estadoCB,
    });
    res.json(newCuenta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getCuentaBs(req, res) {
  try {
    const cuentaBs = await CuentaBancaria.findAll({
      attributes: [
        "idCB",
        "nombreCB",
        "entidadCB",
        "descripcionCB",
        "estadoCB",
      ],
      order: [["idCB", "DESC"]],
    });
    res.json(cuentaBs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getCuentaCo(req, res) {
  try {
    const cuentaBs = await CuentaBancaria.findAll({
      attributes: [
        "idCB",
        "nombreCB",
        "entidadCB",
        "descripcionCB",
        "estadoCB",
      ],
      order: [["idCB", "DESC"]],
      where:{estadoCB:true}
    });
    res.json(cuentaBs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getCuentaB(req, res) {
  const { idCB } = req.params;
  try {
    const cuentaB = await CuentaBancaria.findOne({
      where: { idCB },
      attributes: [
        "idCB",
        "nombreCB",
        "entidadCB",
        "descripcionCB",
        "estadoCB",
      ],
    });
    res.json(cuentaB);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteCuentaB(req, res) {
  const { id } = req.params;
  try {
    await CuentaBancaria.destroy({
      where: {
        idCB: id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const updateCuentaB = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombreCB, entidadCB, descripcionCB, estadoCB } = req.body;
    const cuentaB = await CuentaBancaria.findByPk(id);
    cuentaB.nombreCB = nombreCB;
    cuentaB.entidadCB = entidadCB;
    cuentaB.descripcionCB = descripcionCB;
    cuentaB.estadoCB = estadoCB;
    await cuentaB.save();
    res.json(cuentaB);
    //onsole.log({ $1 });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
