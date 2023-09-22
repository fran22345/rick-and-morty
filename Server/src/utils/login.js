const {User} = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) throw new Error({ error: "Faltan datos" });
    const response = await User.findOne({ where: { email: email } });
    if (!response) {
      throw new Error({ error: "Usuario no econtrado", status: 404 });
    } else {
      res.status(200).json({ access: true });
    }
  } catch (error) {
    switch (error.message) {
      case "Usuario no encontrado":
        res.status(404).send(error.message);
        break;
      case "Faltan datos":
        res.status(400).send(error.message);
        break;
      default:
        res.status(500).send(error.message);
    }
  }
};

module.exports = login;
