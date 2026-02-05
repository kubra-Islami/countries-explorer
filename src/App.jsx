import {useEffect, useState} from "react";
import CountryList from "./components/CountryList.jsx";
import Header from "./components/Header.jsx";

const url = "https://restcountries.com/v3.1/all?fields=name,flags,region,population";


function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('all');

    const filteredCountries = countries.filter(country => {
        return country.region === region;
    })

    useEffect(() => {
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
                // if (data.status === 400) {
                //     setCountries([]);
                //     setError(data.Error || "No results.");
                //     return;
                // }
                console.log(data);
                // console.log(data.status);
                setCountries(data);
            } catch (err) {
                if (err?.name !== "AbortError") setError("Failed to fetch countries");
                // setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCountries();

        return () => controller.abort();
    }, [search,region]);
    // useEffect(()=>{
    //     console.log(countries);
    //     console.log(filteredCountries);
    // })
    return (
        <div className="container ">
            <Header/>
            {/*{*/}
            {/*    !countries.length && (*/}
            {/*        <div className="alert alert-danger glass border-0 w-50 mx-auto mt-3" role="alert">*/}
            {/*            <strong>Oops:</strong> <span>No results found.</span>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*}*/}
            {/*{error ? (*/}
            {/*    <div className="alert alert-danger glass border-0 w-50 mx-auto mt-3" role="alert">*/}
            {/*        <strong>Oops:</strong> {error}*/}
            {/*    </div>*/}
            {/*) : null}*/}

            <CountryList countries={countries} loading={loading}/>
        </div>
    )
}

export default App
