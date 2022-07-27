import React, { useEffect, useState } from "react";
import AllCountries from "./AllCountries";
import NewSearch from "./NewSearch";

const url = "https://restcountries.com/v3.1/all";
const Main = () => {
  const [isloading, setIsloading] = useState(true);
  const [err, seterr] = useState(null);
  const [countries, setcountries] = useState([]);
  const [filteredCountries, setfilterCountries] = useState(countries);

  const fatcingUrl = async (url) => {
    setIsloading(true);
    try {
      const response = await fetch(url);
      const deta = await response.json();
        setcountries(deta);
        setfilterCountries(deta)
      setIsloading(false);
      seterr(null);
    } catch (error) {
      setIsloading(false);
      seterr(error);
    }
  };

  useEffect(() => {
    fatcingUrl(url);
  }, []);

    const onremoveCountry = (name) => {
        const filtered = countries.filter((sigleCountry) => {
            return sigleCountry.name.common !== name;
        })
        setfilterCountries(filtered)
    };
    const onFilter = (text) => {
        const filnalValue = text.toLowerCase();
        const filterValue = countries.filter(countri => {
            const newCountry = countri.name.common.toLowerCase()
            return newCountry.startsWith(filnalValue)
        })
        setfilterCountries(filterValue);
   }
  return (
    <main className="text-center">
      <h1>My Second Country App</h1>
      <NewSearch onFilter={onFilter} />
      {isloading && <h2>Please wait a momment ,deta is loading...</h2>}
      {err && <h3>{err.message}</h3>}
      {countries && (
        <AllCountries
          countries={filteredCountries}
          onremoveCountry={onremoveCountry}
        />
      )}
    </main>
  );
};

export default Main;
