import React from 'react';

function Country({country}) {
    return (
        <div>
            <p>{country.name}</p>
            <p>{country.Region}</p>
            <p>{country.Population}</p>
        </div>
    );
}

export default Country;