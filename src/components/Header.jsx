import React from 'react';

function Header() {
    return (
        <div className="dropdown py-3">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                region
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button className="dropdown-item" type="button">Action</button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">Another action</button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">Something else here</button>
                </li>
            </ul>
        </div>
    );
}

export default Header;