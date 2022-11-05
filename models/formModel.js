const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  formData: [
    { type: { type: String, require: true } },
    { label: { type: String, require: true } },
    { placeholder: { type: String, require: true } },
  ],
  formTitle: { type: String, require: true },
});

const Form = mongoose.model("form_builder", formSchema);

module.exports = { Form };
