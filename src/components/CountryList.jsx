import React from 'react';
import Country from "./Country.jsx";

function CountryList({countries}) {
    return (
        <div>
            {
                countries.map(country => (
                    <Country key={country.id} country={country}/>
                ))
            }
        </div>
    );
}

export default CountryList;