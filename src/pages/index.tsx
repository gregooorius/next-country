import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import { fetchCountry } from './api/fetchCountry';
import { CountryInterface } from '../interfaces/country.interface';
import { GDP } from './components/gpd';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [countryCode, setCountryCode] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [country, setCountry] = useState<CountryInterface>();

  useEffect(() => {
    if(!countryCode) {
      return;
    }

    if(country) {
      setCountry(undefined);
    }

    let isCancelled = false;
    (async () => {
      setIsLoading(true);
      const newCountry = await fetchCountry(countryCode);
      if(isCancelled) {
        return;
      }
      setIsLoading(false);

      setCountry(newCountry);
    })();

    return () => {
      isCancelled = true;
    };
  }, [countryCode]);

  useEffect(() => {
    console.log({country})
  }, [country]);

  return (
    <main
      className={`flex flex-col p-24 ${inter.className}`}
    >
      
      <div className="flex-1">
      <label htmlFor="countries" className="block mb-2 text-sm font-medium">Select a country</label>
      <select onChange={(e) => setCountryCode(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected disabled>Choose a country</option>
        <option value="US">🇺🇸 United States</option>
        <option value="CA">🇨🇦 Canada</option>
        <option value="FR">🇫🇷 France</option>
        <option value="DE">🇩🇪 Germany</option>
        <option value="FI">🇫🇮 Finland</option>
      </select>
        </div>
        <div className="flex-1">
          {isLoading && <p>Loading...</p>}
          {country && <GDP country={country}></GDP>}
        </div>

    </main>
  )
}
