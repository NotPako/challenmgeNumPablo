import axios from "axios";

var root = "https://restcountries.com/v3.1";

export const bringCountries = async () => {
  let config = {
    method: "get",
    url: `${root}/`,
  };

  return await axios(config);
};
