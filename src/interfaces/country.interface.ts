export interface CountryInterface {
  gdp_per_capita: number;
  currency: {
    code: string,
    name: string,
  };
  [key: string]: any;
}