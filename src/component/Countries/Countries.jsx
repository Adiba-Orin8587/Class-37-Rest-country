import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {

    const [countries, setCountries] = useState([]);

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    return (
        <div className="container">
            <h3 className="h1">Visit our country</h3>
            <div className="container">
                <div className="countries">
                    {
                        countries.map(country => <Country
                            key={country.cca2}
                            country={country}>
                        </Country>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;