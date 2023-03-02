import { Meetup } from "@/@types/api";
import NewMeetupForm from "@/components/meetups/MeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage: React.FC = () => {
  const router = useRouter()
  
  const addMeetupHandler = async (enteredMeetupData: Meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
