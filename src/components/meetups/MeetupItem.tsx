import { Meetup } from "@/@types/api";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.scss";
import { useRouter } from "next/router";

const MeetupItem: React.FC<Meetup> = (meetup) => {
  const router = useRouter();
  
  function showDetailsHander() {
    router.push('/' + meetup.id)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHander}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
