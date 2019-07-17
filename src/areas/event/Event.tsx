import React, { FC } from 'react';
import { EventData } from './api';
import './Event.css';

interface EventProps extends EventData {
  number: number;
}

export const Event: FC<EventProps> = ({
  url,
  title,
  tag,
  date,
  meetup,
  number
}) => {
  return (
    <>
      <h2>
        <span className="uk-margin-right">{number}.</span>
        <a href={url}>{title}</a>
        <span className="tag">{tag}</span>
      </h2>
      <p>
        <time dateTime={date}>{date}</time> at {meetup}.
      </p>
    </>
  );
};
