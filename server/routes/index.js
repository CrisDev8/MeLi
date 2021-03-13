/*
* Modulo de routing
*/
var router = require("express").Router();


// router.get("/", (req, res) => {
//     res.send("Welcome to mercado libre")
// })

router.use('/', require("./products.router"));

module.exports = router;