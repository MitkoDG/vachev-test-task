import classes from './element.module.css'
import pen from '../../next/images/pen.png'
import people from '../../next/images/people.png'
import teacher from '../../next/images/teacher.png'
// DUMMY_INFO = [
//     {
//         title: 'Brief',
//         text: 'Complete brief writing or simple guidance on what to include, we`ve got you covered.'
//     },
//     {

//     },
//     {

//     }
// ]
export const TextSection = () =>{
    return (
            <div className={classes.grid}>
                <div className={classes.card}>
                    <img src={pen} alt="pen"className={classes.logo}/>
                    <h2 className={classes.title}>Brief</h2>
                    <p>Complete <strong>brief writing or simple guidance</strong> on what to include, we`ve got you covered.</p>
                </div>
                <div className={classes.card}>
                    <img src={teacher} alt="teacher" className={classes.logo}/>
                    <h2 className={classes.title}>Search</h2>
                    <p>In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting.</p>
                </div>
                <div className={classes.card}>
                    <img src={people} alt="people" className={classes.logo}/>
                    <h2 className={classes.title}>Pitch</h2>
                    <p>Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.</p>
                </div>
            </div>
    )
}