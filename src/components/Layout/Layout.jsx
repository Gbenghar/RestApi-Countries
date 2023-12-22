import { Outlet } from 'react-router-dom'

import MainNavigation from '../MainNavigation/MainNavigation'
import classes from "./Layout.module.css"

const Layout = () => {
    return (
        <>
        <MainNavigation/>
        <main className={classes.content}>
        <Outlet/>
        </main>
        </>
    )
}

export default Layout
