var express = require('express');
var router = express.Router();
const db = require('../db/db.json');


router.get('/datos', function(req, res, next) {
  try {
   res.json(db);
  } catch (error){
    res.status(500).json({error: 'El servidor no responde'});
}
});


router.get('/pizzas', function(req,res,next){
  try {
    res.json(id());
  } catch (error){
    res.status(500).json({error: 'El servidor no responde'});
  }
});

router.get('/:id', function(req, res, next){
  const id = parseInt (req.params.id);
  const pizza = db.pizzas.find(pizza => pizza.id == id);
  if (pizza){
  res.json(pizza);
  } else {
    res.status(404).json({error: 'No existe la pizza'});
  }
});

// router.post('/nuevo', function(req, res, next){
//    res.json(nuevo({"name":"Eduardo", "description":["Tomato sauce, mozzarella cheese, and fresh basil"],"price":18.7}));
//    const datos = parseInt (req.params.name.description.price);
//    const pizza = db.pizzas.find(pizza => pizza.name.description.price == name.description.price);
//    if (pizza){
//     res.json(db);
//     } else {
//       res.status(504).json({error: 'El servidor no recibe respuesta'});
//     }
// });

const JSONData =
     '{"name": "Eduardo", "description": ["Tomato sauce, mozzarella cheese, and fresh basil"], "price": "18.7"}';

   try {
    res.json(db);
     JSONDisplay.innerHTML = JSONString.name + ", [" + JSONString.description + "], " + JSONString.price;
   } catch (error) {
     console.log("No puedo parsear JSON Data");
   }
module.exports = router;

