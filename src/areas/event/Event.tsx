import React, { FC } from 'react';
import { EventData } from './api';
import './Event.css';
import { Match } from './EventPage';

export const Event: FC<EventData & Match> = ({ match, ...event }) => (
  <>
    <h2>
      <a href={event.url}>{event.title}</a>
      <span className="tag">{event.tag}</span>
    </h2>
    <p>
      <time dateTime={event.date}>{event.date}</time> at {event.meetup}.
    </p>
    <p>{event.details}</p>
    {!!match && <p>{match}</p>}
  </>
);
