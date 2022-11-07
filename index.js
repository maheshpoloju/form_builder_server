require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const formCreateRoute = require("./routes/formCreate");
const formDataRoute = require("./routes/formData");
const getFormDataRoute = require("./routes/getFormData");
const formEditRoute = require("./routes/formEdit");

app.use(express.json());
app.use(cors());

connection();

app.use("/api", formCreateRoute);
app.use("/api", formDataRoute);
app.use("/api", getFormDataRoute);
app.use("/api", formEditRoute);

app.listen(8080, () => console.log("Running on Port 8080"));
