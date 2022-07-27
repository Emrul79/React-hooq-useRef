import React, { useEffect, useState } from "react";
import Countries from "./Countries";
// import Country from './Country';
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";
const Countryapp = () => {
  const [isloading, setisloading] = useState(true);
  const [err, seterr] = useState(null);
  const [country, setcountry] = useState([]);
  const [filtercountries,setfiltercountries]= useState(country)

  const fatchFunction = async (url) => {
    setisloading(true);
    try {
      const response = await fetch(url);
      const deta = await response.json();
      setcountry(deta);
      setfiltercountries(deta)
      setisloading(false);
      seterr(null);
      // console.log(country);
    } catch (error) {
      setisloading(false);
      seterr(error);
    }
  };
  useEffect(() => {
    fatchFunction(url);
},[])
  const handleremove = (name) => {
    const filter = country.filter((countri) => countri.name.common !== name);
    setfiltercountries(filter)
  }
  const handleSearch = (text) => {
    let finalValue = text.toLowerCase();
    const newCountries = country.filter((count) => {
      const countryName = count.name.common.toLowerCase();
      return countryName.startsWith(finalValue)
    });
    setfiltercountries(newCountries)
  }
  return (
    <main>
      <h1>Country App</h1>
      <Search onsearch={handleSearch} />
      {isloading && <h3>loading please wait....</h3>}
      {err && <h4> {err.message} </h4>}
      {country && (
        <Countries countries={filtercountries} onremovecountry={handleremove} />
      )}
    </main>
  );
};

export default Countryapp;
