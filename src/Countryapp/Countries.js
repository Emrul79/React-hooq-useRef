import React from 'react'
import { v4 as uuidv4 } from "uuid";
import Country from './Country';
import style from "./Countries.module.css"
const Countries = (props) => {
    const { countries, onremovecountry } = props;
    console.log(countries);
    return <section className={style.countries}>
        
        {
          countries.map((country) => {
              const newCountry = { country, id: uuidv4() }
           return (
             <Country
               {...newCountry}
               onremovecountry={onremovecountry}
               key={newCountry.id}
             />
           );
          })}
          
    </section>
  
}

export default Countries