export interface CountryDetail {
    name: {
      common: string;
      official: string;
      nativeName?: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    flags: {
      png: string;
      svg: string;
      alt?: string;
    };
    population: number;
    region: string;
    subregion?: string;
    capital?: string[];
    languages?: { [key: string]: string };
    currencies?: {
      [key: string]: {
        name: string;
        symbol: string;
      };
    };
    timezones?: string[];
    borders?: string[];
    continents?: string[];
    area: number;
    maps?: {
      googleMaps: string;
      openStreetMaps: string;
    };
  }
  