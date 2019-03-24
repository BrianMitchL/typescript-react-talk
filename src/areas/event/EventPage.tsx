import React, { FC, useEffect, useState } from 'react';
import { api, EventData } from './api';
import { Event } from './Event';
import { RouteComponentProps } from 'react-router';
import { Loader } from './Loader';
import { Match } from '../../App';

export const EventPage: FC<RouteComponentProps<Match>> = ({
  match: {
    params: { match }
  }
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<EventData[]>([]);

  useEffect(() => {
    setLoading(true);
    api().then(data => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {data.map(d => (
        <Event key={d.url} {...d} match={match} />
      ))}
    </>
  );
};
