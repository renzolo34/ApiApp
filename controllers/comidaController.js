const Comida = require("../models/Comida");
const multer = require("multer");
const storage = require("../config/multer");
const firebaseAuth = require("firebase/auth");
const Categoria = require("../models/Categoria");

const verifyJwt = (req, res, next) => {
  const auth = firebaseAuth.getAuth();
  const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      console.log(uid);
      next();
    } else {
      return res.status(500).send("Error de autenticación");
    }
};

const uploader = multer({
  storage,
}).single("imagen");

exports.getComidas = (req, res) => {
  try {
    verifyJwt(req, res, function (err) {
      if (err) {
        return res.status(500).send("Error de autenticación");
      } else {
        Comida.findAll({
          include:{
            model:Categoria
          }
        }).then((comidas) => {
          console.log(
            "Registros encontrados:",
            comidas.map((comida) => comida.toJSON())
          );
          res.json(comidas);
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.verificarComidas = async (req, res) => {
  try {
    verifyJwt(req, res, function (err) {
      if (err) {
        return res.status(500).send("Error de autenticación");
      } else {
        console.log("Correcto");
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.postComidas = async (req, res) => {
  try {
    uploader(req, res, function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send("Error en la carga de archivos");
      }

      const { nombre, id_categoria, precio } = req.body;
      const fileName = req.file.originalname;
      const fileUrl = `https://apiapp-production.up.railway.app/uploads/${req.file.originalname}`;

      Comida.create({
        nombre: nombre,
        precio: precio,
        id_categoria: id_categoria,
        fileName: fileName,
        fileUrl: fileUrl, 
      })
        .then((comida) => {
          console.log("Registro creado exitosamente:", comida.toJSON());
          res.json("Registro creado exitosamente");
        })
        .catch((error) => {
          console.error("Error al crear el registro:", error);
          res.status(500).send("Hubo un error al crear el registro");
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
   

exports.actualizarComida = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, categoria, precio } = req.body;
    Comida.update(
      {
        nombre: nombre,
        id_categoria: categoria,
        precio: precio,
      },
      { where: { id: id } }
    ).then((result) => {
      console.log("Registros actualizados:", result[0]);
      res.json(result);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.verComida = async (req, res) => {
  try {
    verifyJwt(req, res, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send("Error de autenticación");
      } else {
        const id = req.params.id;
        Comida.findOne({ where: { id: id } }).then((comidas) => {
          console.log("Registros encontrados:", comidas.dataValues);
          res.json(comidas.dataValues);
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.deleteComida = async (req, res) => {
  try {
    const comidaId = req.params.id;
    Comida.destroy({ where: { id: comidaId } }).then((result) => {
      console.log(result);
    });
    res.status(200).send("Comida eliminada correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar la comida");
  }
};

exports.getComidaUsuario = async (req, res) =>{
  try{
    Comida.findAll({
      include:{
        model:Categoria
      }
    }).then((comidas) => {
      console.log(
        "Registros encontrados:",
        comidas.map((comida) => comida.toJSON())
      );
      res.json(comidas);
    });
  }catch(error){
    console.log(error);
    res.status(500).send("Hubo un error al mostrar");
  }
};



