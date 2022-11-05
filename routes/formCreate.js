const router = require("express").Router();

const { Form } = require("../models/formModel");

router.post("/form/create", async (req, res) => {
  let data = req.body;
  console.log("data---------", data);

  try {
    await Form.create(data);
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = router;
