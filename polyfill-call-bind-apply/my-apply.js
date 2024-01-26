let person = {
  first_name: "jaipal",
  last_name: "jadeja",
};

function printPerson(city, country) {
  console.log(
    `${this.first_name} ${this.last_name} is from ${city}, ${country}`
  );
}

// --------------------------------- FULL IMPLEMENTATION OF APPLY ------------------------

// FULL Implementation of Apply is similar to Call only difference is in paramenter that is ...args to args
// as apply takes an array of arguments
Function.prototype.my_apply = function (context, args) {
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

printPerson.my_apply(person, ["jamnagar", "india"]);
