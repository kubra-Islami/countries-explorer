import React, {useEffect, useState} from "react";
import CountryList from "./components/CountryList.jsx";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('all');


    const trimmed = search.trim();
    useEffect(() => {
        const controller = new AbortController();

        async function fetchCountries() {
            try {
                setLoading(true);
                setError("");

                let endpoint = "";

                if (trimmed.length >= 2) {
                    endpoint = `https://restcountries.com/v3.1/name/${search}?fields=name,flags,region,population`;
                } else if (region !== "all") {
                    endpoint = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,region,population`;
                } else {
                    endpoint = `https://restcountries.com/v3.1/all?fields=name,flags,region,population`;
                }

                const res = await fetch(endpoint, {signal: controller.signal});
                const data = await res.json();
                if (data.status === 400) {
                    setCountries([]);
                    setError("No results found.");
                    return;
                }

                setCountries(data || []);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError("Failed to fetch countries");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchCountries();
        return () => controller.abort();

    }, [search, region]);


    return (
        <div className="container mb-5">
            <div className="row g-3 g-md-4 mb-4">
                <div className="col-12 col-sm-12 col-lg-3">
                    <Header setRegion={setRegion}/>
                </div>
                <div className="col-12 col-sm-12 col-lg-9 rounded-4 p-2 p-sm-3 ">
                    <SearchBar searchTerm={search} setSearchTerm={setSearch}/>
                </div>
            </div>

            {error ? (
                <div className="alert alert-danger glass border-0 w-50 mx-auto mt-3" role="alert">
                    <strong>Error:</strong> {error}
                </div>
            ) : null}

            {/*{!error && !loading && trimmed && !countries.length  && (*/}
            {/*    <div className="glass rounded-4 p-4 mb-3">*/}
            {/*        <div className="h5 mb-1">No results</div>*/}
            {/*        <div className="muted">*/}
            {/*            Try searching something else (e.g., France, Germany,Italy).*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*) }*/}

            {
                loading ?  (
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div role="status">
                            <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                        </div>
                        <span role="status" className="">Loading countries...</span>
                    </div>
                ) : <CountryList countries={countries} loading={loading}/>
            }


        </div>
    )
}

export default App
