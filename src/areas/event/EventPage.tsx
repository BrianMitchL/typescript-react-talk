import React, { useEffect, useState } from 'react';
import { api, EventData } from './api';
import { Event } from './Event';
import { RouteComponentProps } from 'react-router';
import { Loader } from './Loader';

export interface Match {
  match?: string;
}

export const EventPage = (props: RouteComponentProps<Match>) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<EventData[]>([]);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    const data = await api();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { match } = props.match.params;

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
