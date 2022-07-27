import React from 'react'

const Country = (props) => {
  const { country, onremoveCountry } = props;
  console.log(country);
    const { name, flags, capital, population, area } = country;
    // console.log(newCountry);
  const handleClick = (name2) => {
    onremoveCountry(name2)
  }
  return (
    <section className="m-5 bg-info p-5">
      <h1>name: {name.common} </h1>
      <h2>capital: {capital} </h2>
      <h3>population: {population} </h3>
      <h4>area: {area} </h4>
      <button className='btn btn-primary' onClick={
        () => {
          handleClick(name.common)
        }
      }>delete</button>
    </section>
  );
}

export default Country