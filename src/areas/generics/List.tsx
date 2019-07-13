import React, { Key, ReactChild } from 'react';

export interface BaseListItem {
  key: Key;
}

export type ItemRenderer<T> = (item: T) => ReactChild;

interface ListProps<T> {
  data: T[];
  renderItem: ItemRenderer<T>;
}

export function List<T extends BaseListItem>({
  data,
  renderItem
}: ListProps<T>) {
  return (
    <div>
      <p>There are {data.length} items in the list!</p>
      <ul>
        {data.map(d => (
          <li key={d.key}>{renderItem(d)}</li>
        ))}
      </ul>
    </div>
  );
}
