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
    const data = await repository.getByMonth(month);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.getByModel = async (req, res, next) => {
  try {
    const { model, month } = req.query;
    let data = await repository.getByModel(model, month);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.getByPosition = async (req, res, next) => {
  try {
    const { position, month } = req.query;
    let data = await repository.getByPosition(parseInt(position), month);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.getByBrand = async (req, res, next) => {
  try {
    const { brand, month } = req.query;
    let data = null;

    if (month) {
      data = await repository.getByBrand(brand, month);
    } else {
      data = await repository.getByBrand(brand);
    }

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
