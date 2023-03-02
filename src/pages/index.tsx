import { MeetupResponse, Meetups } from "./../@types/api";
import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";

const { MongoClient, ServerApiVersion } = require("mongodb");

const HomePage: React.FC<Meetups> = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
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
  const client = new MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((meetup: MeetupResponse) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
