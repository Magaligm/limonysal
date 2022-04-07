const req = require("express/lib/request");
const { about, listaPlatos } = require("../models/data");

const mainController = {
  index: (req, res) => {
    res.render("index", { about: about, menu: listaPlatos });
  },
  detalle: (req, res) => {
    let plato = listaPlatos.find((plato) => plato.id == req.params.menuId);
    console.log(plato);
    res.render("detalleMenu", { plato: plato });
  },
};

module.exports = mainController;
