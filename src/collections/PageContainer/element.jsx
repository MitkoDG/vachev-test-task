import { Header } from '../Header'
import { Video } from '../VideoSection'
import classes from './element.module.css'

export const PageContainer = () =>{

    return (
        <div className={classes.main}>
            <Header />
            <Video />
        </div>
    )
}
// export default PageContainer;