let person = {
  first_name: "jaipal",
  last_name: "jadeja",
};

function printPerson(city, country) {
  console.log(
    `${this.first_name} ${this.last_name} is from ${city}, ${country}`
  );
}

// --------------------------------- SIMPLE IMPLEMENTATION OF CALL ------------------------

// Simple version of call
Function.prototype.simple_my_call = function (context, ...args) {
  context.myFun = this;
  context.myFun(...args);
};

printPerson.simple_my_call(person, "jamnagar", "india");

// PROBLEM in simple version:
// What if the property myFn already exists inside 'person' ? We’ll be overwriting it.
// So we need to make sure that the name of the property we are using is unique.

// --------------------------------- FULL IMPLEMENTATION OF CALL ------------------------

// FULL Implementation of Call
Function.prototype.my_call = function (context, ...args) {
  let currentContext = context;
  let randomProp = Math.random();
  // check whether random prop doesnt exist on context
  while (currentContext[randomProp] !== undefined) randomProp = Math.random();
  // if it doesnt we assign it the called function
  currentContext[randomProp] = this;
  let result = currentContext[randomProp](...args);
  // then we remove that added prop and return result
  delete currentContext[randomProp];
  return result;
};

printPerson.my_call(person, "jamnagar", "india");
