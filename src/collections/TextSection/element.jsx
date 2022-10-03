import classes from "./element.module.css";
import pen from "../../next/images/pen.png";
import people from "../../next/images/people.png";
import teacher from "../../next/images/teacher.png";
// import { Card } from "../../collections";


// const DUMMY_INFO = [
//     {
//         id: 1,
//         title: 'Brief',
//         text: 'Complete <strong>brief writing or simple guidance</strong> on what to include, we`ve got you covered.',
//         img: 'pen',
//     },
//     {
//       id: 2,
//       title: 'Search',
//       text: 'In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting.',
//       img: 'people',
//     },
//     {
//       id: 3,
//       title: 'Brief',
//       text: 'Comprehensive <strong>pitch management</strong>, including comms,diary management and pitch hosting.',
//       img: teacher,
//     }
// ]
export const TextSection = () => {
  // const cardList = DUMMY_INFO.map(card => <Card key={card.id} id={card.id} title={card.title} text={card.text} img={card.img}/>)
  return (
    <div className={classes.grid}>
      {/* {cardList} */}
      <div className={classes.card}>
        <div className={classes["image-container"]}>
          <img src={pen} alt="pen" className={classes.logo} />
        </div>
        <div>
          <h2 className={classes.title}>Brief</h2>
          <p>
            Complete <strong>brief writing or simple guidance</strong> on what
            to include, we`ve got you covered.
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes["image-container"]}>
          <img src={teacher} alt="teacher" className={classes.logo} />
        </div>
        <div>
          <h2 className={classes.title}>Search</h2>
          <p>
            In-depth agency search covering; <strong>criteria matching</strong>,
            door knocking and due-dilligence vetting.
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes["image-container"]}>
          <img src={people} alt="people" className={classes.logo} />
        </div>
        <div>
          <h2 className={classes.title}>Pitch</h2>
          <p>
            Comprehensive <strong>pitch management</strong>, including comms,
            diary management and pitch hosting.
          </p>
        </div>
      </div>
    </div>
  );
};
