import { Meetup } from "@/@types/api";
import Image from "next/image";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.scss";

const MeetupItem: React.FC<Meetup> = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} />
        </div>
        
      </Card>
    </li>
  );
};

export default MeetupItem;
