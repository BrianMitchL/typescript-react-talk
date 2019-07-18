## Intro

- Hi, I'm Brian
- I work on an analytics application

## Problems

- Requirements change
- Multiple people on a codebase
- Broken code when refactoring
- Chasing down bugs

## TypeScript Overview

## Demo

### Pure

#### `simple-helpers.ts`

- Pure functions
- Introduce Union Strings

```typescript
if (prefix === 'test') {
  return 'impossible';
}
```

#### `SimpleHelpers.tsx`

- React components
- hooks
  - Inferred types
  - Specify types for complex types
    - Union types
    - Objects
    - Arrays
  ```typescript
  const [array, setArray] = useState([]);
  setArray(['this is just a string']);
  ```
- Forms
  - `ChangeHandler<>`
  - Gets difficult if you use one handler for many different input types

### Event

- Promises / async/await
- Generics
- `extends`
  - Change `Event.tsx` props to use intersection type
- Intersection and Union Types

- Add a new tag `'Cross Platform'`
- Change tag to tag array
  - Add multiple tags to npm package event
  ```typescript
  {
    tag.map(t => (
      <span key={t} className="tag">
        {t}
      </span>
    ));
  }
  ```
- Change date type to `Date`
  - Update `Event` to support dates

### Generics

#### `List.tsx`

- Useful for tables, charts, etc.
- Great with Higher Order Components or render props
- Type guards
  - Make `data: T | T[]` in `List.tsx`
  - Add to `List.tsx`
  ```typescript
  if (!Array.isArray(data)) {
    return (
      <div>
        <p>There is 1 item!</p>
        <ul>
          <li>{renderItem(data)}</li>
        </ul>
      </div>
    );
  }
  // or something like
  const realData = !Array.isArray(data) ? [data] : data;
  ```
  - Add to return in `GenericsPage.tsx`
  ```typescript
  <List
    data={{
      name: 'Brian',
      age: 1234,
      key: 'not used, but still on the type'
    }}
    renderItem={renderPersonString}
  />
  ```
  - Can also use `typeof` and `instanceof`
