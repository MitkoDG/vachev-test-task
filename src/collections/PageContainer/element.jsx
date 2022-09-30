import { BodyContainer } from '../BodyContainer'
import { Header } from '../Header'


import classes from './element.module.css'

export const PageContainer = () =>{

    return (
        <div className={classes.main}>
            <Header />
            <BodyContainer />
        </div>
    )
}