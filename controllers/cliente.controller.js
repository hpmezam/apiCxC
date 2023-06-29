import { sequelize } from "../database/database.js";
import { Cliente } from "../models/Cliente.js";


export async function createCliente(req, res) {
  try {
    const { cedulaCli, nombresCli, totalPagarCre, saldo, debe } = req.body;
    const [cliente, created] = await Cliente.upsert({
      cedulaCli,
      nombresCli,
      totalPagarCre,
      saldo,
      debe: totalPagarCre - saldo,
    }, {
      returning: true,
    });
    if (created) {
      return res.json({ message: 'Cliente creado exitosamente', cliente });
    }
    return res.json({ message: 'Cliente actualizado exitosamente', cliente });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}



export async function getClientes(req, res) {
  try {
    const clientes = await Cliente.findAll({
      attributes: [ "cedulaCli", "nombresCli", "totalPagarCre", "saldo", "debe" ],
      order: [["debe", "DESC"]],
    });
    res.json(clientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getCliente(req, res) {
  const { cedulaCli } = req.params;
  try {
    const cliente = await Cliente.findOne({
      where: { cedulaCli },
      attributes: [ "cedulaCli", "nombresCli", "totalPagarCre", "saldo", "debe" ],
    });
    res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { totalPagarCre } = req.body;
    const cliente = await Cliente.findByPk(id);
    cliente.totalPagarCre = totalPagarCre;
    await cliente.save();
    res.json(cliente);
    //onsole.log({ $1 });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteCliente(req, res) {
  const { id } = req.params;
  try {
    await Cliente.destroy({
      where: {
        cedulaCli: id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}