import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.scss";

type CardProps = {
  children: React.ReactNode;
};
const Layout: React.FC<CardProps> = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
