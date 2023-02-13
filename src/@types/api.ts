export type Meetup = {
  id: string;
  title: string;
  image: string;
  address: string;
  description?: string;
};

export type Meetups = {
  meetups: Meetup[];
};
