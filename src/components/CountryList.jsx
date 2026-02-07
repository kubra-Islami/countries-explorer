import React from 'react';
import Country from "./Country.jsx";

function CountryList({countries}) {

    if (!countries || !countries.length) {
        return (
            <div className="glass rounded-4 p-4 mb-3">
                <div className="h5 mb-1">No results</div>
                <div className="muted">
                    Try searching something else (e.g., France, Germany,Italy).
                </div>
            </div>
        );
    }
    return (
        <div className="row g-3 g-md-4 ">
            {countries.map((country) => (
                <div className="col-12 col-sm-12 col-lg-6" key={country.name.common}>
                    <Country country={country}/>
                </div>
            ))}
        </div>
    );
}

export default CountryList;