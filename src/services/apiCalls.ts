import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const root: string = "https://restcountries.com/v3.1";


export const bringCountries = async (): Promise<AxiosResponse> => {

  const config: AxiosRequestConfig = {
    method: "get",
    url: `${root}/all`,
  };
  return await axios(config);
};
