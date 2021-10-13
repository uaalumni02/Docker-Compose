
require("dotenv").config();
const express = require("express");
const cors = require("cors")


const app = express();
const { log, error } = console;

const port = process.env.PORT || 3000;

const router = express.Router();

const productRoutes = require("./routes/products.route")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


router.use("/product", productRoutes);

app.use("/api", router);

app.listen(port, () => log("server is running"));
