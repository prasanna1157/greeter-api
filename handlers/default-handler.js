'use strict';

exports.handler = async (event) => {
  const response = {
      statusCode: 200,
      body: JSON.stringify(getGreeting()),
  };
  return response;
};

  function getGreeting() {
    return getLocalGreeting(pickLocale()).concat((" from Moneycatcha!"));
  }
  module.exports.getGreeting = getGreeting;

  function getLocalGreeting(language) {
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
  module.exports.getLocalGreeting = getLocalGreeting;
  
  function pickLocale() {
    const languages = ["en", "es", "cn", "fr", "ru", "tamil"];
    return languages [Math.floor(Math.random() * languages.length)];
  }

