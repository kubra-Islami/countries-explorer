import {useEffect, useState} from "react";
import CountryList from "./components/CountryList.jsx";
const url = "https://restcountries.com/v3.1/all";


function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('all');

    useEffect(() => {
        // fetch logic
        const controller = new AbortController();
        const fetchData = () => {
           try {
               setLoading(true);
               const res = fetch(url,{
                   signal: controller.signal,
               });
               const data = res.json();

               console.log(data);
               setCountries(data);
           }catch(err) {
               setError(err.message);
           }finally {
               setLoading(false);
           }
        }
        fetchData();
        return () => {
            setLoading(false);
            controller.abort();
        }
    }, [search, region]);

    return (
        <div>
            {
                !countries.length && <p>No results found</p>
            }
            <CountryList countries={countries}/>
        </div>
    )
}

export default App
