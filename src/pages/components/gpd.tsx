import { CountryInterface } from "../../interfaces/country.interface";

export function GDP({ country }: { country: CountryInterface }) {
  return (
    <main className={`flex flex-row`}>
      <div className="flex-1">
        {country.currency.code} / {country.currency.name}
      </div>
      <div className="flex-1">
        ${country.gdp_per_capita}
      </div>
    </main>
  );
}
