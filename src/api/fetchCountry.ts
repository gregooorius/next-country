import { CountryInterface } from "../interfaces/country.interface";

export const fetchCountry = async (name: string): Promise<CountryInterface> => {
    const response = await fetch(`https://api.api-ninjas.com/v1/country?name=${name}`, {
        method: "GET",
        headers: {
          "X-Api-Key": "C+yHWLDYybuKye4CxDThtg==pXPVbsUDCBVmrkns",
        },
      });
    const countries = await response.json();
    return countries[0];
}