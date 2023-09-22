const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  try {
    if (name || origin || status || image || species || gender)
      throw new Error({ error: "Faltan datos" });
    await Favorite.create({ name, origin, status, image, species, gender });
    const allCharacterFav = Favorite.findAll();
    res.status(200).send(allCharacterFav);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postFav;
