import React from 'react';
import "./country.css";

function Country({country}) {
    return (
        <article className="country-card glass rounded-4 h-100">
            <div className="poster-wrap">
                <img className="w-25 h-100" src={country.flags.png} alt={country?.name.common || "countries flag img"} loading="lazy"/>
                <div className="poster-badges">
                    <span className="badge badge-soft rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2">
                      {country.name.common}
                    </span>
                    <span className="badge badge-soft rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2">
                      {country.region}
                  </span>
                    <span className="badge badge-soft rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2">
                     population :  {country.population}
                  </span>
                </div>
            </div>
        </article>
    );
}

export default Country;