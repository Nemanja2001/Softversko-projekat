const pool = require("./../dbconnection/dbconn");
const country_functions = require("./../repositories/drzava_repository");

const getAllCountries = async (request, response) => {
  const result = await country_functions.getAllCountries();
  response.send(result);
};

const getCountryByName = async (request, response) => {
  const name = request.params.countryName;
  const result = await country_functions.getCountryByName(name);
  response.send(result);
};

const insertCountry = async (request, response) => {
  const result = await country_functions.insertCountry(request.body);
  response.send(result);
};

const updateCountry = async (request, response) => {
  const name = request.params.countryName;
  const result = await country_functions.updateCountry(name, request.body);
  response.send(result);
};

module.exports = {
  getAllCountries,
  getCountryByName,
  insertCountry,
  updateCountry,
};
