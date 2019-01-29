import React, { Component } from 'react';
import { api, EventData } from './api';
import { Event } from './Event';
import { RouteComponentProps } from 'react-router';
import { Loader } from './Loader';

export interface Match {
  match?: string;
}

interface State extends EventData {
  loading: boolean;
}

const initialState: State = {
  loading: true,
  meetup: '',
  title: '',
  url: '',
  date: '',
  tag: 'Web',
  details: ''
};

export class EventPage extends Component<RouteComponentProps<Match>, State> {
  state = initialState;

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async (): Promise<void> => {
    const data = await api();
    this.setState({ loading: false, ...data });
  };

  render() {
    const { loading, ...data } = this.state;
    const { match } = this.props.match.params;

    if (loading) {
      return <Loader />;
    }
    return <Event {...data} match={match} />;
  }
}
