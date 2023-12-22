import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "../util/api";
import MainNavigation from '../MainNavigation/MainNavigation'

import classes from "./CountryInfo.module.css";


const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  
  useEffect(() => {
    const getCountryByName = async () => {
      setIsLoading(true);
      setError(false);
  
      try {
        const response = await fetch(`${apiURL}/name/${countryName}`);
  
        if (!response.ok) throw new Error("Could not be found!");
        const data = await response.json();
  
        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getCountryByName();
  }, [countryName]);

  return (
    <>
    <MainNavigation/>
    <div className={classes.country_info_wrapper}>
      <button className={classes.button}>
        <Link to="/"> &larr; <span>Back</span></Link>
      </button>
      { isLoading && !error && <h4>Loading...</h4> }
        {country?.map((country, index) => (
          <div className={classes.country_info_container} key={index}>
            <div className={classes.country_info_img}>
              <img src={country.flags.png} alt="" />
            </div>

            <div className={classes.country_info}>
              <h3>{country.name.common}</h3>

              <div className={classes.country_info_left}>
                <h5>
                  Population: <span>{new Intl.NumberFormat().format(country.population)}</span>
                </h5>
                <h5>
                  Region: <span>{country.region}</span>
                </h5>
                <h5>
                  Sub region: <span>{country.subregion}</span>
                </h5>
                <h5>
                  Capital: <span>{country.capital}</span>
                </h5>
                <h5>
                  Currencies: <span>{country.currency}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default CountryInfo;
