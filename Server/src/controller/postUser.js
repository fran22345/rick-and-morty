const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Faltan datos");
    }

    const response = await User.findOrCreate({
      where: { email: email },
      defaults: { password: password },
    });

    if (response) {
      res
        .status(201)
        .json({ message: "Usuario creado correctamente", response });
    } else {
      res.status(409).json({ message: "El usuario ya existe" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postUser;
