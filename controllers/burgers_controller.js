var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", (req, res) => 
{
    burger.selectAll((data) => {
        var hasObject = {
            burgers: data
        };
        res.render("index", hasObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        (result) => {
            res.json({id: result.insertId});
        });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;
   burger.updateOne({
       devoured: 1
   },
    condition,
    (result) => {
        if(result.changedRows === 0)
        {
            return res.status(404).end();
        }
        else
        {
            res.status(200).end();
        }
    })
});


module.exports = router;