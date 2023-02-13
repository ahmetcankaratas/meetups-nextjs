import { Meetup } from "./../@types/api";
import Card from "@/components/UI/Card";

const DUMMY_MEETUPS: Meetup[] = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bosphorus_Bridge_%28235499411%29.jpeg/1920px-Bosphorus_Bridge_%28235499411%29.jpeg",
    address: "Some address 5, 12345 Some City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bosphorus_Bridge_%28235499411%29.jpeg/1920px-Bosphorus_Bridge_%28235499411%29.jpeg",
    address: "Some address 5, 12345 Some City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const HomePage: React.FC = () => {
  return (
    <Card>
      <h1>The Home Page</h1>;
    </Card>
  );
};

export default HomePage;
