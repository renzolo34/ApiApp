const Pago = require("../models/Pagos");

exports.getPago = async (req, res) => {
  try {
    Pago.findAll().then((result) => {
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

exports.postPago = async (req, res) => {
  try {
    const { nombre_usuario, correo_usuario, monto, comida } = req.body;

    const pago = Pago.create({
      nombre_usuario: nombre_usuario,
      correo_usuario: correo_usuario,
      monto: monto,
      comida: comida
    })
      .then((result) => {
        console.log("Registro creado exitosamente:", result.toJSON());
        res.json("Pago registrado exitosamente");
      })
      .catch((error) => {
        console.error("Error al realizar el pago:", error);
        res.status(500).send("Hubo un error al realizar el pago");
      });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
