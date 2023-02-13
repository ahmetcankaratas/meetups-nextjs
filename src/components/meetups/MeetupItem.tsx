import { Meetup } from "@/@types/api";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.scss";

const MeetupItem: React.FC<Meetup> = (meetup) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title}/>
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
