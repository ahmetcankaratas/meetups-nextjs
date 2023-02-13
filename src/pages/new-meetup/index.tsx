import { Meetup } from "@/@types/api";
import NewMeetupForm from "@/components/meetups/MeetupForm";

const NewMeetupPage: React.FC = () => {
  const addMeetupHandler = (enteredMeetupData: Meetup) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
