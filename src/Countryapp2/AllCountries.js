import React from 'react'
import { v4 as uuidv4 } from "uuid";
import Country from './Country2';

const AllCountries = (props) => {
    const { countries, onremoveCountry } = props;
    console.log(countries);
  return (
      <section>
          {
              countries.map((country) => {
                  const newCountry = { country, id: uuidv4() }
                  console.log(newCountry);
                  return (
                    <Country
                      {...newCountry}
                      onremoveCountry={onremoveCountry}
                      key={newCountry.id}
                    />
                  );
              })}

    </section>
  )
}

export default AllCountries