const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Favorite.destroy({ where: { id: id } });
    if (response) {
      const find = await Favorite.findAll();
      res.status(200).send(find);
    } else {
      throw new Error({ error: "No se encontro ningun elemento para borrar" });
    }
  } catch (error) {
    if (error.message === "No se encontro ningun elemento para borrar") {
      res.status(400).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
};

module.exports = deleteFav;
