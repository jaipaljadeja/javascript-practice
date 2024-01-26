let person = {
  first_name: "jaipal",
  last_name: "jadeja",
};

function printPerson(city, country) {
  console.log(
    `${this.first_name} ${this.last_name} is from ${city}, ${country}`
  );
}

// --------------------------------- FULL IMPLEMENTATION OF BIND ------------------------

// FULL Implementation of Bind
Function.prototype.my_bind = function (context, ...args1) {
  let callback = this;
  return function (...args2) {
    return callback.apply(context, [...args1, ...args2]);
  };
};

const getFullDetails = printPerson.my_bind(person, "jamnagar");
getFullDetails("india");
