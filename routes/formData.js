const router = require("express").Router();

const { Form } = require("../models/formModel");

router.get("/", async (req, res) => {
  try {
    const data = await Form.find();
    // console.log("response data----", data);
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = router;
