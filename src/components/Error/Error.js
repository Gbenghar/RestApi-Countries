import React from 'react'
import { Link } from 'react-router-dom'

import classes from "./Error.module.css"
import MainNavigation from '../MainNavigation/MainNavigation'


const Error = () => {
  return (
    <>
    <MainNavigation/>
    <main className={classes.error}>
        <div >
        <h1>An error occurred!</h1>
        <p>Could not find this page</p>
        </div>
        <Link to="/">Back</Link>
    </main>
    </>
    
  )
}

export default Error
