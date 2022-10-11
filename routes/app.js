const express = require("express");
const router = express.Router();

const {  createDataCar, addDataCar, editDataCar, updateDataCar, findDataCars, filterDataCars, deleteDataCar,    } = require("../controllers/controller");

router.get("/", (req, res) => {
  res.status(200);
  res.render("pages/dashboard/index", {
    title: "Dashboard",
    layout: "dashboard/index",
  });
});

router.post("/cars/create", createDataCar);

router.get("/cars/addNewCar", addDataCar);

router.get("/cars/edit/:id", editDataCar);

router.put("/cars/update/:id", updateDataCar);

router.get("/cars", findDataCars);

router.get("/cars/search", filterDataCars);

router.delete("/cars/delete/:id", deleteDataCar);


router.use((req, res) => {
  res.status(404);
  res.send(`<h1>404 Not Found</h1>`);
});

module.exports = router;