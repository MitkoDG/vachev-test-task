import { Fragment } from "react"
import classes from './element.module.css'

export const Header = () =>{
    return (
            <header className={classes.header}>
                <h1>Managed agency selection</h1>
                <p>Strengthen your onboarding process</p>
            </header>
    )
}