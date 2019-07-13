import { useEffect, useState } from 'react';
import { api, EventData } from './api';

export interface UseEventsResult {
  loading: boolean;
  data: EventData[];
}

export const useEvents = (search?: string): UseEventsResult => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<EventData[]>([]);

  useEffect(() => {
    setLoading(true);
    api({ search }).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [search]);

  return {
    loading,
    data
  };
};
