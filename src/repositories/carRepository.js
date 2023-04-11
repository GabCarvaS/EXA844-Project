const mongoose = require("mongoose");
const Car = mongoose.model("Car");

exports.get = async () => {
  const res = await Car.find({}, null); //retorna todos os dados
  return res;
};

exports.getByMonth = async (month) => {
  const query = { mes: month };

  const res = await Car.aggregate([
    {
      $unwind: "$cars",
    },
    {
      $match: query,
    },
    {
      $project: {
        _id: 0,
        car: "$cars",
      },
    },
  ]);

  return res;
};

exports.getByModel = async (model, month) => {
  const query = { "cars.modelo": model };
  if (month) {
    query.mes = month;
  }
  const res = await Car.aggregate([
    {
      $unwind: "$cars",
    },
    {
      $match: query,
    },
    {
      $project: {
        _id: 0,
        mes: 1,
        car: "$cars",
      },
    },
  ]);

  return res;
};

exports.getByPosition = async (position, month) => {
  const query = { "cars.posicao": position };
  if (month) {
    query.mes = month;
  }
  const res = await Car.aggregate([
    {
      $unwind: "$cars",
    },
    {
      $match: query,
    },
    {
      $project: {
        _id: 0,
        mes: 1,
        car: "$cars",
      },
    },
  ]);

  return res;
};

exports.getByBrand = async (brand, month) => {
  const match = { "cars.marca": brand };
  if (month) {
    match.mes = month;
  }
  const res = await Car.aggregate([
    {
      $unwind: "$cars",
    },
    {
      $match: match,
    },
    {
      $project: {
        _id: 0,
        mes: 1,
        car: "$cars",
      },
    },
    {
      $group: {
        _id: "$mes",
        cars: {
          $push: "$car",
        },
      },
    },
    {
      $project: {
        _id: 0,
        mes: "$_id",
        cars: 1,
      },
    },
  ]);

  return res;
};

exports.getByOccurrences = async (month) => {
  const res = await Car.aggregate([
    {
      $match: {
        mes: month,
      },
    },
    {
      $unwind: "$cars",
    },
    {
      $sort: {
        "cars.qtdOcorrencias": -1,
      },
    },
    {
      $project: {
        _id: 0,
        car: "$cars",
      },
    },
  ]);

  return res;
};
