const express = require("express");
const router = express.Router();

const testControoler = require("../controllers/testController")

router.get('/',testControoler.getAll)

router.post('/',testControoler.create)

router.put("/:id", testControoler.update);

router.delete("/:id", testControoler.deleteById);

router.post('/findOne',testControoler.findOne);






module.exports = router