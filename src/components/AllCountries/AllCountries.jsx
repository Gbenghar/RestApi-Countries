import { useState, useEffect} from 'react'
import { apiURL } from "../util/api"

import classes from "./AllCountries.module.css"
import SearchInput from '../Search/SearchInput';
import FilterCountry from '../FilterCountry/FilterCountry';
import { Link } from 'react-router-dom';

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
 
  
    const getCountries = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`${apiURL}/all`);

        if (!response.ok ) throw new Error('Something went wrong')
        const data = await response.json();
        console.log(data)
        setCountries(data);
        setIsLoading(false)

      } catch (error) {
        setIsLoading(false)
        setError(error.message)
      }
    };

    const getCountryByName = async (countryName) => {
      try {
        const response = await fetch(`${apiURL}/name/${countryName}`)

        if (!response.ok ) throw new Error('Country not found.')
        const data = await response.json()
        setCountries(data)

        setIsLoading(false) 
      } catch (error) {
        setIsLoading(false)
        setError(error.message)
      }

    }

    const getCountryByRegion = async (regionName) =>{
      setIsLoading(true)
      try {
        const response = await fetch(`${apiURL}/region/${regionName}`)
        if (!response.ok ) throw new Error('Region not found.')
        const data = await response.json()
        setCountries(data)
        setIsLoading(false)

      } catch (error) {
        setIsLoading(false)
        setError(false)
      }
    }

    useEffect(() => {
      getCountries()
    }, []);

  return (<div className={classes.wrapper}>
    <div className={classes.country_top}>
      <div className={classes.search}>
      <SearchInput onSearch={getCountryByName}/>
      </div>
      <div className={classes.filter}>
        <FilterCountry onSelect={getCountryByRegion}/>
      </div>
    </div>

    <div className={classes.country_bottom}>
      {isLoading && !error && <h4>Loading....</h4> }
      {error && !isLoading && <h4>{error}</h4> }

      {
        countries?.map(country=>(
           <Link to={`/country/${country.name.common}`}>
          <div className={classes.country_card}>
            <div className={classes.country_img}>
              <img src={country.flags.png} alt="" />
            </div>

            <div className={classes.country_details}>
              <h3>{country.name.common}</h3>
              <h6> Population: {country.population}</h6>
              <h6> Region: {country.region}</h6>
              <h6> Capital: {country.capital}</h6>
            </div>
          </div>
          </Link>
         ))
      }
    </div>
      
  </div>
  )
};

export default AllCountries;
