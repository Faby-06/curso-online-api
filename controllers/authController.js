const login = (req, res) => {
  console.log("Tentativa de login recebida:", req.body);
  res.status(501).json({ message: "Funcionalidade de login ainda não implementada." });
};

const register = (req, res) => {
  console.log("Tentativa de registo recebida:", req.body);
  res.status(501).json({ message: "Funcionalidade de registo ainda não implementada." });
};

module.exports = {
  login,
  register,
};

