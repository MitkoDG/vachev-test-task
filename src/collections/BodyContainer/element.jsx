import { TextSection } from '../TextSection'
import { Video } from '../VideoSection'
import classes from './element.module.css'

export const BodyContainer = () =>{
    return (
            <main className={classes.body}>
                <Video />
                <TextSection />
            </main>
    )
}