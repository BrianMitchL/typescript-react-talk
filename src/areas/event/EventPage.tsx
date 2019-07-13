import React, { FC } from 'react';
import { Event } from './Event';
import { RouteComponentProps } from 'react-router';
import { Loader } from './Loader';
import { Match } from '../../App';
import { useEvents } from './use-events';

export const EventPage: FC<RouteComponentProps<Match>> = ({
  match: {
    params: { match }
  }
}) => {
  const { loading, data } = useEvents(match);

  if (loading) {
    return <Loader />;
  }

  if (data.length === 0) {
    return <p>No events found</p>;
  }

  return (
    <>
      {data.map(d => (
        <Event key={d.url} {...d} />
      ))}
    </>
  );
};
