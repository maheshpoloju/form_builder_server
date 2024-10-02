const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  formData: [
    {
      type: { type: String, required: true },
      label: { type: String, required: true },
      placeholder: { type: String, required: true },
    },
  ],
  formTitle: { type: String, require: true },
});

const Form = mongoose.model("form_builder", formSchema);

module.exports = { Form };
