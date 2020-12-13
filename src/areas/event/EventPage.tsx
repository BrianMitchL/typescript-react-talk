import { Event } from './Event';
import { RouteComponentProps } from 'react-router';
import { Loader } from '../Loader/Loader';
import { Match } from '../../App';
import { useEvents } from './use-events';

export function EventPage({
  match: {
    params: { match },
  },
}: RouteComponentProps<Match>) {
  const { loading, data } = useEvents(match);

  if (loading) {
    return <Loader width="50%" />;
  }

  if (data.length === 0) {
    return <p>No events found</p>;
  }

  return (
    <>
      {data.map((event, index) => (
        <Event key={event.url} {...event} number={index + 1} />
      ))}
    </>
  );
}
