import React, { FC } from 'react';
import { EventData } from './api';
import './Event.css';

export const Event: FC<EventData> = ({ url, title, tag, date, meetup }) => {
  return (
    <>
      <h2>
        <a href={url}>{title}</a>
        <span className="tag">{tag}</span>
      </h2>
      <p>
        <time dateTime={date}>{date}</time> at {meetup}.
      </p>
    </>
  );
};
