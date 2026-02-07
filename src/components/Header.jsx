import React from "react";

function Header({setRegion}) {
    const regions = [
        'all',
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
    ];

    return (
        <div className="dropdown py-3">
            <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
            >
                Select Region
            </button>

            <ul className="dropdown-menu">
                {regions.map((reg) => (
                    <li key={reg}>
                        <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => setRegion(reg)}
                        >
                            {reg}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Header;