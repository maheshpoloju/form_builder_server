const router = require("express").Router();

const { Form } = require("../models/formModel");

router.post("/form/create", async (req, res) => {
  // console.log("data---------", data);

  try {
    let data = req.body;

    await Form.create(data);
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = router;
