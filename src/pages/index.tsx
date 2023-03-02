import { Meetup, Meetups } from "./../@types/api";
import MeetupList from "@/components/meetups/MeetupList";

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

const HomePage: React.FC<Meetups> = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context: any) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
