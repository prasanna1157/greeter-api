'use strict';

exports.handler = async (event) => {
  const response = {
      statusCode: 200,
      body: JSON.stringify(greet()),
  };
  return response;
};

function greet() {
    return generateGreetingBy(pickLocale()).concat((" from Moneycatcha!"));
}

function generateGreetingBy(language) {
    switch(language) {
      case "en":
        return "Hello";
      case "es":
        return "¡Hola";
      case "ru":
        return "Привет";
      case "tamil":
          return "Vanakkam"
      default:
        return "👋";
    }
}
  
function pickLocale() {
    const languages = ["en", "es", "cn", "fr", "ru", "tamil"];
    return languages [Math.floor(Math.random() * languages.length)];
}

module.exports.greet = greet;
module.exports.generateGreetingBy = generateGreetingBy;

