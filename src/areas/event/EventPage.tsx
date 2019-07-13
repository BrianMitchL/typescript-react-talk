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
    api({ search: match }).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [match]);

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
