const mongoose = require("mongoose");
const Car = mongoose.model("Car");

exports.get = async () => {
  const res = await Car.find({}, null); //retorna todos os dados
  return res;
};

exports.getByMonth = async (month) => {
  const res = await Car.findOne({ mes: month }, "mes cars");
  return res;
};

exports.getByModelAndMonth = async (month, model) => {
  const res = await Car.findOne(
    { mes: month, "cars.modelo": model },
    { "cars.$": 1 }
  );
  return res ? res.cars[0] : null;
};

exports.getByModel = async (model) => {
  const pipeline = [
    { $unwind: "$cars" },
    { $match: { "cars.modelo": model } },
    {
      $group: {
        _id: "$_id",
        mes: { $first: "$mes" },
        cars: { $push: "$cars" },
      },
    },
  ];

  const res = await Car.aggregate(pipeline);
  return res.map((obj) => obj.cars).flat();
};

exports.getByPosition = async (position) => {
  const res = await Car.aggregate([
    {
      $unwind: "$cars",
    },
    {
      $match: {
        "cars.posicao": position,
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

exports.getByBrand = async (brand) => {
  const res = await Car.aggregate([
    {
      $unwind: "$cars",
    },
    {
      $match: {
        "cars.marca": brand,
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
