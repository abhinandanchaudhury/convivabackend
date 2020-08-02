var express = require('express');
var router = express.Router();

var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};
const users = [
  {
    "id": ID(),
    "name": "Leanne Graham",
    "age": 23,
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    }
  },
  {
    "id": ID(),
    "name": "Ervin Howell",
    "age": 54,
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771"
    }
  },
  {
    "id": ID(),
    "name": "Clementine Bauch",
    "age": 36,
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157"
    }
  },
  {
    "id": ID(),
    "name": "Patricia Lebsack",
    "age": 45,
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257"
    }
  },
  {
    "id": ID(),
    "name": "Chelsey Dietrich",
    "age":27,
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263"
    }
  },
  {
    "id": ID(),
    "name": "Mrs. Dennis Schulist",
    "age": 66,
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337"
    }
  },
  {
    "id": ID(),
    "name": "Kurtis Weissnat",
    "age": 33,
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099"
    }
  },
  {
    "id": ID(),
    "name": "Nicholas Runolfsdottir V",
    "age": 33,
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169"
    }
  },
  {
    "id": ID(),
    "name": "Glenna Reichert",
    "age": 34,
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109"
    }
  },
  {
    "id": ID(),
    "name": "Clementina DuBuque",
    "age": 38,
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261"
    }
  }
];

/* GET customer listing. */
router.get('/:page', function(req, res) {
  let pageNo = parseInt(req.params.page);
  let paginatedUsers = [...users];
  paginatedUsers['nextPageAvailable'] = false;
  if(pageNo*5 <= users.length){
    paginatedUsers = users.slice(((pageNo*5) - 5),(pageNo*5));
    paginatedUsers['nextPageAvailable'] = true;
  }
  const cust = paginatedUsers.map((item) => {
    return Object.keys(item).reduce((object, key) => {
      if (key !== 'address') {
        object[key] = item[key]
      }
      return object;
    }, {});
  });
  res.send(cust);
});

/* GET customer address */
router.get('/:page/:id', function(req, res) {
  const paramId = req.params.id;
  let pageNo = parseInt(req.params.page);
  const paginatedUsers = users.slice(((pageNo*5) - 5),(pageNo*5));
  var result = paginatedUsers.filter(obj => obj.id === paramId)[0];
  console.log(result);
  res.send(result);
});

module.exports = router;
