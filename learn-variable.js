var name = "Hamsa"; //statement
var name = "Anu";

console.log(name);

// it can be redeclared and reinitialized

// let learning

let city = "Bangalore"; //

city = "Mysore";

console.log(city);

// it cannot be re declared
// it can be re initialized

const area = "Indiranagar";

console.log(area);

//it cannot be re declared

//it cannot be re initialized

{
  let month = "January";
  console.log("inside", month);
}

//console.log("outside", month);

{
  const area = "Rajajinagar";
  console.log("inside", area);
}

//console.log("outside", area);

{
  var name = "Hamsa";
  console.log("inside", name);
}

//console.log("outside", name);
