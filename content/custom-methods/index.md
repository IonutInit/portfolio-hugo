# Custom Methods

**A collection of methods I keep seeing myself using, so I decided to optimize them and put them in a package.**

Offers TypeScript support.

```bash
npm i @ionutinit/custom-methods
```

## Concord

Creates grammatical concord (agreement) between a string and an associated number.

If the first argument is a string, it parses it into a number

```typescript
concord(number | string, string) => string
```

### Optional parameters

```typescript
concord(
    number | string,
    pluralForm?: string,
    round?: {-1 | 1 | true | false}
)
```

- **pluralForm**: provides the plural form of the string; useful for irregular nouns, otherwise defaults to _string + s_

- **round**: rounds the number into an integer according to criteria provided; defaults to _false_

  - _true_: rounds up or down, according to decimal value

  - _-1_: rounds down

  - _1_: rounds up

### Examples

```javascript
concord(0, "item");
// "no items"
concord(1, "item");
// "1 item"
concord("2", "item");
// "2 items"
concord(1, "leaf", "leaves");
// "1 leaf"
concord(3, "leaf", "leaves");
// "3 leaves"
concord("5.25", "item", { round: 1 });
// "6 items"
concord("5.95", "leaf", "leaves", { round: 1 });
// "5 leaves"
```

## Capitalize

Capitalizes the first letter of a string or each element in an array of strings.

```typescript
capitalize(string | string[]) => string | string[]
```

### Examples

```javascript
capitalize("hello");
// "Hello"
capitalize(["good", "day"]);
// ["Good". "Day"]
capitalize(5);
// Throws: "The input must be a string or an array of strings"
```

## Enumerate

Returns a natural-language enumeration of an array of strings.

```typescript
enumerate(string[]) => string
```

### Optional parameters

```typescript
enumerate(
    string[],
    limit?: number,
    tail?: number,
    options?: {unique: boolean}
)
```

- **limit**: sets the length of the had of the output enumeration, followed by "..."

- **tail**: sets the length of the tail of the output enumeration; works only in conjunction with limit; it is ignored if is larger or equal than the limit or the remainder of the array

- **unique**: only a list of the unique elements of the array is enumerated; defaults to _false_

### Examples

```javascript
enumerate(["one", "two"]);
// "one and two"
enumerate(["one", "two", "three"]);
// "one, two and three"
enumerate(["one", "two", "three", "four"]);
// "one, two, three and four"
enumerate(["one", "two", "three", "four"], { limit: 2 });
// "one, two..."
enumerate(["one", "one", "two", "two", "three", "three", "four", "four"], {
  limit: 2,
  unique: true,
});
// "one, two..."
enumerate(["one", "one", "two", "two", "three", "three", "four", "four"], {
  limit: 1,
  tail: 1,
  unique: true,
});
// "one... four"
enumerate(["one", "two", "three", "four"], { limit: 2, tail: 4 });
// "one, two..."
```
