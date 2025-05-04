import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CountryDetail } from '../Providers/CountryType';

const root: string = "https://restcountries.com/v3.1";


export const bringCountries = async (): Promise<AxiosResponse> => {

  const config: AxiosRequestConfig = {
    method: "get",
    url: `${root}/all`,
  };
  return await axios(config);
};

export const bringCountryByName = async (name: string): Promise<AxiosResponse<CountryDetail[]>> => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `${root}/name/${encodeURIComponent(name)}?fullText=true`,
  };
  return await axios(config);
};
