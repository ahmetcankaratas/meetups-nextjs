import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetUpDetails: React.FC = () => {
  return (
    <MeetupDetail
      title="This is a first meetup"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bosphorus_Bridge_%28235499411%29.jpeg/1920px-Bosphorus_Bridge_%28235499411%29.jpeg"
      address="This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
  };
}
export async function getStaticProps(context: any) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bosphorus_Bridge_%28235499411%29.jpeg/1920px-Bosphorus_Bridge_%28235499411%29.jpeg",
        id: "m1",
        title: "This is a first meetup",
        address:
          "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetUpDetails;
