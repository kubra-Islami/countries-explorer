import React from 'react';
import Country from "./Country.jsx";

// import SkeletonGrid from "./SkeletonGrid.jsx";

function CountryList({countries, loading}) {
    // if (loading) return <SkeletonGrid />;
    if (loading) return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div role="status">
                <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            </div>
            <span role="status" className="">Loading countries...</span>
        </div>
    )
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