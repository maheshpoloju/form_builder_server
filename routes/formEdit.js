const router = require("express").Router();

const { Form } = require("../models/formModel");

router.post("/form/edit-type/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { formTypeID, formType } = req.body;

    await Form.findOneAndUpdate(
      { _id: id, "formData._id": formTypeID },
      {
        $set: {
          "formData.$.type": formType,
        },
      }
    );
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = router;
