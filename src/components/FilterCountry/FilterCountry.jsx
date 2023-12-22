import React from 'react'

import classes from "./FilterCountry.module.css"

const FilterCountry = ({onSelect}) => {

  const selectHandler = (event) => {
    const regionName= event.target.value
    onSelect(regionName)
  }
  
  return <div className={classes.container}>
    <select onChange={selectHandler} className={classes.select}>
      <option className={classes.option}>Filter By Region</option>
      <option className={classes.option} value="Africa">Africa</option>
      <option className={classes.option} value="America">America</option>
      <option className={classes.option} value="Asia">Asia</option>
      <option className={classes.option} value="Europe">Europe</option>
      <option className={classes.option} value="Oceania">Oceania</option>
    </select>
    </div>
  
}

export default FilterCountry
