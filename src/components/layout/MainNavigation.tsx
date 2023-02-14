import Link from "next/link";
import classes from "./MainNavigation.module.scss";

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Next Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
