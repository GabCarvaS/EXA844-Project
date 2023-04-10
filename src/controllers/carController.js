const repository = require("../repositories/carRepository");

exports.get = async (req, res, next) => {
  try {
    let data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.getByMonth = async (req, res, next) => {
  try {
    const { month } = req.query;
    let data = await repository.getByMonth(month);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.getByModelAndMonth = async (req, res, next) => {
  try {
    const { mes, modelo } = req.query;
    let data = await repository.getByModelAndMonth(mes, modelo);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.getByModel = async (req, res, next) => {
  try {
    const { modelo } = req.query;
    let data = await repository.getByModel(modelo);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.getByPosition = async (req, res, next) => {
  try {
    const { posicao } = req.query;
    let data = await repository.getByPosition(parseInt(posicao));
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};
exports.getByBrand = async (req, res, next) => {
  try {
    const { marca } = req.query;
    let data = await repository.getByBrand(marca);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.getByOccurrences = async (req, res, next) => {
  try {
    const { month } = req.query;
    let data = await repository.getByOccurrences(month);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};
