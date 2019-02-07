export type Tag = 'Web' | 'Native' | 'Server';

export interface EventData {
  meetup: string;
  title: string;
  url: string;
  date: string;
  tag: Tag;
  details: string;
}

export const api = (timeout: number = 1000): Promise<EventData[]> => {
  return new Promise(resolve => {
    const data: EventData[] = [
      {
        meetup: 'JavaScript MN',
        title: 'Monthy Meetup: React Native, an Introduction',
        url: 'https://www.meetup.com/JavaScriptMN/events/tqfvfqyzcbnc/',
        date: '2018-01-30',
        tag: 'Native',
        details: 'Lorem ipsum... CANCELED! 🥶️'
      },
      {
        meetup: 'JavaScript MN',
        title: 'Monthy Meetup: React Native, an Introduction',
        url: 'https://www.meetup.com/JavaScriptMN/events/tqfvfqyzdbkc/',
        date: '2018-02-27',
        tag: 'Native',
        details: 'Lorem ipsum... it was great!'
      }
    ];

    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};
