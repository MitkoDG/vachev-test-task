import classes from './element.module.css'
import pen from '../../next/images/pen.png'
import people from '../../next/images/people.png'
import teacher from '../../next/images/teacher.png'

const imgLink = {
  pen: pen,
  people: people,
  teacher: teacher,
}

export const Card = (props) => {
    console.log(props);
  return (
    <div className={classes.card}>
      <div className={classes['image-container']}>
        <img src={imgLink[props.img]} className={classes.logo} />
      </div>
      <div>
        <h2 className={classes.title}>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
