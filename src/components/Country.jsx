import React, {useEffect} from 'react';

function Country({country}) {
    useEffect(() => {
        console.log(country.name.common);
    }, []);
    return (
        <div>
            <p>{country.name.common}</p>
            <p>{country.region}</p>
            <p>{country.population}</p>
        </div>
    );
}

export default Country;