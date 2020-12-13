import { Component, ComponentPropsWithoutRef } from 'react';
import { BarLoader } from 'react-spinners';
import './Loader.css';

export function Loader(props: ComponentPropsWithoutRef<typeof BarLoader>) {
  return (
    <div className="Loader">
      <BarLoader {...props} />
    </div>
  );
}

export class LoaderClass extends Component<
  ComponentPropsWithoutRef<typeof BarLoader>
> {
  render() {
    return (
      <div className="Loader">
        <BarLoader {...this.props} />
      </div>
    );
  }
}
