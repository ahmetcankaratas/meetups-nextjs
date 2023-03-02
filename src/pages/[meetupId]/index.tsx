import { Meetup } from "@/@types/api";
import MeetupDetail from "@/components/meetups/MeetupDetail";
import { GetStaticProps } from "next";
import Head from "next/head";
const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb");
const MeetUpDetails: React.FC<{ meetupData: Meetup }> = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = new MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup: any) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params?.meetupId;

  const client = new MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetUpDetails;
