import { Meetups } from "@/@types/api";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.scss";
const MeetupList: React.FC<Meetups> = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
