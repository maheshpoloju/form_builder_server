const router = require("express").Router();

const { Form } = require("../models/formModel");

router.post("/form/edit-type/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { formTypeID, editData } = req.body;
    const { formType, formLabel, formPlaceholder } = editData;

    await Form.findOneAndUpdate(
      { _id: id, "formData._id": formTypeID },
      {
        $set: {
          "formData.$.type": formType,
          "formData.$.label": formLabel,
          "formData.$.placeholder": formPlaceholder,
        },
      }
    );
    res.send("Edited successfully");
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = router;
