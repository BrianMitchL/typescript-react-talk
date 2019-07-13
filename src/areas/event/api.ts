export type Tag = 'Web' | 'Native' | 'Server';

export interface EventData {
  meetup: string;
  title: string;
  url: string;
  date: string;
  tag: Tag;
}

export interface ApiOptions {
  search?: string;
  timeout?: number;
}

export const api = ({
  search,
  timeout = 500
}: ApiOptions): Promise<EventData[]> =>
  new Promise(resolve => {
    const data: EventData[] = [
      {
        meetup: 'JavaScript MN',
        title: 'Monthy Meetup: React Native, an Introduction',
        url: 'https://www.meetup.com/JavaScriptMN/events/tqfvfqyzdbkc/',
        date: '2018-02-27',
        tag: 'Native'
      },
      {
        meetup: 'JavaScript MN',
        title: 'Monthy Meetup: Building Your Own Package',
        url: 'https://www.meetup.com/JavaScriptMN/events/tqfvfqyzfbkc/',
        date: '2018-03-27',
        tag: 'Web'
      },
      {
        meetup: 'React Minneapolis',
        title: 'Hooked on React',
        url:
          'https://www.meetup.com/React-Minneapolis-Meetup/events/257861767/',
        date: '2019-06-20',
        tag: 'Web'
      },
      {
        meetup: 'React Minneapolis',
        title: 'Typescript & React',
        url:
          'https://www.meetup.com/React-Minneapolis-Meetup/events/257861771/',
        date: '2019-07-18',
        tag: 'Web'
      }
    ];

    setTimeout(() => {
      resolve(
        data.filter(
          event =>
            !search || event.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, timeout);
  });
