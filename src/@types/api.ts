export type Meetup = {
  id?: string;
  title: string;
  image: string;
  address: string;
  description?: string;
};

export type MeetupResponse = {
  _id: string;
  title: string;
  image: string;
  address: string;
};

export type Meetups = {
  meetups: Meetup[];
};
