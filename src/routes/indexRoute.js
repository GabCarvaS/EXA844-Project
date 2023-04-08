"use strict";

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "Node api",
    version: "1.0",
    type: req.method,
  });
});

module.exports = router;
