import {useEffect, useState} from "react";
import CountryList from "./components/CountryList.jsx";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";

const url = "https://restcountries.com/v3.1/all?fields=name,flags,region,population";


function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('all');


    const filteredCountriesByRegion = countries.filter(country => {
        if (region === "all") return true;

        // console.log(country.region)
        return country.region === region;
    });

    // const trimmed = search.trim();

    useEffect(() => {

        // if (!trimmed) {
        //     setCountries([]);
        //     setError("");
        //     setLoading(false);
        //     return;
        // }

        // fetch logic
        const controller = new AbortController();

        async function fetchCountries() {
            try {
                setLoading(true);
                setError("");
                const res = await fetch(url, {
                    signal: controller.signal,
                });
                const data = await res.json();
                if (data.status === 400) {
                    setCountries([]);
                    setError(data.Error || "No results.");
                    return;
                }
                setCountries(data);
            } catch (err) {
                if (err?.name !== "AbortError") setError("Failed to fetch countries");
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
              <div className="col-12 col-sm-12 col-lg-3" >
                  <Header countriesRegion={filteredCountriesByRegion} region={region}/>
              </div>
                <div className="col-12 col-sm-12 col-lg-9 rounded-4 p-2 p-sm-3 ">
                    <SearchBar searchTerm={search} setSearchTerm={setSearch}/>
                </div>
            </div>

            {error ? (
                <div className="alert alert-danger glass border-0 w-50 mx-auto mt-3" role="alert">
                    <strong>Oops:</strong> {error}
                </div>
            ) : null}

            <CountryList countries={countries} loading={loading}/>

        </div>
    )
}

export default App
