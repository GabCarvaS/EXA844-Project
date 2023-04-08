const mongoose = require("mongoose");
const Car = mongoose.model("Car");

exports.get = async () => {
  const res = await Car.find("", "mes");
  return res;
};

exports.getByMonth = async (month) => {
  const res = await Car.findOne({ mes: month }, "cars");
  return res;
};

exports.create = async (data) => {
  let Car = new Car(data);
  await Car.save();
};

exports.update = async (id, data) => {
  await Car.findByIdAndUpdate(id, {
    $set: {
      title: data.title,
      description: data.description,
      price: data.price,
      slug: data.slug,
    },
  });
};

exports.delete = async (id) => {
  await Car.findOneAndRemove(id);
};
