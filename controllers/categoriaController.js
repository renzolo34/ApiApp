const Categoria = require("../models/Categoria");

exports.getCategoria = async (req, res) => {
  try {
    Categoria.findAll().then((categorias) => {
      console.log(
        "Registros encontrados:",
        categorias.map((categoria) => categoria.toJSON())
      );
      res.json(categorias);
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

exports.postCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;

    Categoria.create({
      nombre: nombre,
    })
      .then((categoria) => {
        console.log("Registro creado exitosamente:", categoria.toJSON());
        res.json("Registro creado exitosamente");
      })
      .catch((error) => {
        console.error("Error al crear el registro:", error);
        res.status(500).send("Hubo un error al crear el registro");
      });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;

    Categoria.destroy({ where: { id_categoria: categoriaId } }).then(
      (result) => {
        console.log(result);
      }
    );
    res.status(200).send("Comida eliminada correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar la categoria");
  }
};

exports.getCategoriaUsuario = async (req, res) =>{
  try{
    
    const categoria = req.body;

    if(categoria=null){

      Comida.findAll().then((comidas) => {
        console.log(
          "Registros encontrados:",
          comidas.map((comida) => comida.toJSON())
        );
        res.json(comidas);
      });

    }else{
      Comida.findAll({where:{categoria: categoria}}).then((result) => {
        res.json(result);
        console.log(result);
      })
    }

  }catch(error){
    console.log(error);
    res.status(500).send("Hubo un error al mostrar");
  };
};
exports.getCategoriaId = async (req,res) =>{
  try{
    const id = req.params.id;
        Categoria.findOne({ where: { id_categoria: id } }).then((categorias) => {

          if(comidas === null){
            console.log("Resultado vacio")
          }
          console.log("Registro encontrado:", categorias.dataValues);
          res.json(categorias.dataValues);
        });
  }catch(err){
    console.log(err);
    res.status(500).send("Hubo un error"); 
  }
};

exports.actualizarCategoria = async (req,res) =>{
  try{

    const id = req.params.id;

    const { nombre } = req.body;

    Categoria.update(
      {
        nombre:nombre
      },
      { where: { id_categoria:id } }
    ).then((result) => {
      console.log("Registros actualizados:", result[0]);
      res.json(result);
    });
  }catch(err){
    console.log(err);
    res.status(500).send("Hubo un error");
  }
};
