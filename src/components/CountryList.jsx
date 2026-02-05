import React, {useEffect} from 'react';
import Country from "./Country.jsx";
import SkeletonGrid from "./SkeletonGrid.jsx";

function CountryList({countries,loading }) {
    if (loading) return <SkeletonGrid />;
    return (
        <div className="row g-3 g-md-4">
            {countries.map((country) => (
                <div className="col-12 col-sm-12 col-lg-6" key={country.name.common}>
                    <Country country={country}/>
                </div>
            ))}
        </div>
    );
}

export default CountryList;