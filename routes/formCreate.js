const router = require("express").Router();
const { Form } = require("../models/formModel");

router.post("/form/create", async (req, res) => {
  try {
    let data = req.body;
    await Form.create(data);
    res.send("Created successfully");
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = router;
