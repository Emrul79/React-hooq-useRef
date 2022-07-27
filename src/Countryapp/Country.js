import React from "react";
import style from "./country.css";
const Country = (props) => {
  const { country, onremovecountry } = props;
  const { name, flags, capital, population, area } = country;
//   console.log(name);
    const handleremovecountry = (name) => {
        onremovecountry(name);
    }
  return (
    <article className={style.country}>
      <div>
              <img src={flags.png} alt={name.common} className={ style.img} />
        <h2>Name:{name.common}</h2>
        <h3>Capitals: {capital}</h3>
        <h4>Populations: {population}</h4>
              <h5>Total Area: {area}</h5>
              <button className="btn btn-primary" onClick={() => {
                  handleremovecountry(name.common)
              }}>Remove Country</button>
      </div>
    </article>
  );
};

export default Country;
