const router = require("express").Router();

const { Form } = require("../models/formModel");

router.get("/form/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Form.findById(id);

    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = router;
