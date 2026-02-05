import React, {useEffect} from 'react';

function Header({countriesRegion,region}) {

    return (
        <div className="dropdown py-3">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                region
            </button>
            <ul className="dropdown-menu">

                <li>
                    <button className="dropdown-item" type="button">All</button>
                </li>
                {

                }
            </ul>
        </div>
    );
}

export default Header;