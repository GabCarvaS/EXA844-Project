const mongoose = require("mongoose");
const Car = mongoose.model("Car");
const ValidationContract = require("../validators/fluentValidator");
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
    let data = await repository.getByMonth(req.params.mes);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.getById = async (req, res, next) => {
  try {
    let data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(
    req.body.title,
    3,
    "o titulo deve conter pelo menos 3 caracteres"
  );
  contract.hasMinLen(
    req.body.slug,
    3,
    "o slug deve conter pelo menos 3 caracteres"
  );
  contract.hasMinLen(
    req.body.description,
    3,
    "o description deve conter pelo menos 3 caracteres"
  );

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  try {
    await repository.create({
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      price: req.body.price,
      active: req.body.active,
      tags: req.body.tags,
    });
    res.status(201).send({ message: "Criado" });
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({ message: "Atualizado" });
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({ message: "Removido" });
  } catch (e) {
    res.status(500).send({ message: "Erro ao processar a requisição" });
  }
};
