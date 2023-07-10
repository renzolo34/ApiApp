const Compra = require("../models/Pagos");
const Comida = require("../models/Comida");

exports.addComidaToCompra = async (req, res) => {
  try {
    const { compraId, comidaId } = req.params;

    const compra = await Compra.findByPk(compraId);
    const comida = await Comida.findByPk(comidaId);

    if (!compra || !comida) {
      return res.status(404).json("Compra o comida no encontrada");
    }

    const comidaData = {
      id: comida.id,
      nombre: comida.nombre,
      precio: comida.precio,
    };

    const updatedComidaArray = [...compra.comidaArray, comidaData];

    await compra.update({ comidaArray: updatedComidaArray });

    res.json("Comida añadida exitosamente a la compra");
  } catch (err) {
    console.error("Error al añadir comida a la compra:", err);
    res.status(500).send("Hubo un error al añadir comida a la compra");
  }
};


exports.getCompra = async (req, res) => {
  try {
    const { compraId } = req.params;

    const compra = await Compra.findByPk(compraId);

    if (!compra) {
      return res.status(404).json("Compra no encontrada");
    }

    res.json(compra);
  } catch (err) {
    console.error("Error al obtener la compra:", err);
    res.status(500).send("Hubo un error al obtener la compra");
  }
};

exports.createCompra = async (req, res) => {
  try {
    const { nombreUsuario, correoUsuario, comidaArray, total } = req.body;

    const nuevaCompra = await Compra.create({
      nombreUsuario: nombreUsuario,
      correoUsuario: correoUsuario,
      comidaArray: comidaArray,
      total: total
    });

    res.json(nuevaCompra);
  } catch (err) {
    console.error("Error al crear la compra:", err);
    res.status(500).send("Hubo un error al crear la compra");
  }
};