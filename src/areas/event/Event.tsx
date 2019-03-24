import React, { FC } from 'react';
import { EventData } from './api';
import './Event.css';
import { Match } from '../../App';

export const Event: FC<EventData & Match> = ({ match, ...event }) => {
  if (!match || (!!match && event.title.toLowerCase().includes(match))) {
    return (
      <>
        <h2>
          <a href={event.url}>{event.title}</a>
          <span className="tag">{event.tag}</span>
        </h2>
        <p>
          <time dateTime={event.date}>{event.date}</time> at {event.meetup}.
        </p>
        <p>{event.details}</p>
      </>
    );
  }

  return null;
};
