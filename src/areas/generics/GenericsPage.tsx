import { BaseListItem, ItemRenderer, List } from './List';

interface Person extends BaseListItem {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: 'Sally', age: 25, key: 'a' },
  { name: 'Fred', age: 41, key: 'b' },
  { name: 'Anna', age: 32, key: 'c' },
];

const renderPersonString: ItemRenderer<Person> = ({ name, age }) => {
  return `${name} is ${age.toLocaleString()} years old.`;
};

const renderPersonNumber: ItemRenderer<Person> = ({ age }) => {
  return age;
};

const renderPersonElement: ItemRenderer<Person> = ({ name, age }) => {
  return (
    <div
      style={{
        backgroundColor: `hsl(${Math.random() * 360}, 100%, 90%)`,
        color: 'black',
      }}
    >
      <span style={{ fontSize: '2rem' }}>{name}</span> - {age} years old
    </div>
  );
};

export function GenericsPage() {
  return (
    <>
      <List data={people} renderItem={renderPersonString} />
      <List data={people} renderItem={renderPersonNumber} />
      <List data={people} renderItem={renderPersonElement} />
    </>
  );
}
