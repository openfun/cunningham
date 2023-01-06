# @openfun/cunningham-tokens

## Introduction

**What are design tokens ?**

Design tokens are the fundamental variables defining the precise behavior and rendering of ui components.

For example:
- The primary color of a text element
- The standard spacing between two elements
- The border radius of a button
- ...

## Getting started

In this section we will install the library and generate the file that contains the design tokens of your app in order to
make Cunningham's Design System yours!

Install the lib

```
yarn add @openfun/cunningham-tokens
```


### Configuration file

#### Typescript

If you prefer using Typescript, create a file named `cunningham.ts` at the root of your project

```ts
export default {
  theme: {
    colors: {
      primary: 'purple'
    },
  },
};
```

#### Javascript

Or if you prefer Javascript, create a file named `cunningham.cjs` at the root of your project

```js
module.exports = {
  theme: {
    colors: {
      primary: 'purple'
    },
  },
};
```

In this configuration file you can overwrite all the default values of the design system.
You can find the default values [here](./src/bin/cunningham.dist.js).

### Build

Now add this script to your `package.json`

```
{
    "scripts": {
        ...
        "build-theme": "cunningham -g css"
    }
}
```

The cunningham CLI's main purpose is to build a ad-hoc CSS,JS,TS files that contain all your customized design tokens,
by taking into account your local configuration ( defined in the file that you previously created : `cunningham.cjs`,
it is worth mentioning that this file is optional, hence it will generate a file containing the default values of the
design system )

> You can run `yarn run cunningham -h` to see the available options.

And in order to generate the tokens css file, run

```
yarn build-theme
```

It will generate a file named `cunningham-tokens.css`. **Don't forget to run this command everytime you
change the content of the `cunningham.cjs` file !**

Then, add these lines at the top of your main stylesheet file:

```
@import "cunningham-tokens"; // Imports the file you just generated.
@import "@openfun/cunningham-react/style";
```

It's all done!

> You can also generate Typescript or Javascript files using the `-g` option. Example: `cunningham -g css,ts,js`

## Use the design tokens

### Stylesheet

Design tokens variable are all present in the `cunningham-tokens.css` file. They are all prefixed with `--c` in order to
avoid collision.

Here is an example to make the text's color renders with the value of the primary color in `.my-element` matching elements

```
.my-element {
  color: var(--c--colors--primary);
}
```

### Typescript

If you previously specified `-g ts` option you will have a `cunningham-tokens.ts` file generated. You can import it in your
Typescript files and use the design tokens like this:

```ts
import { tokens } from "./cunningham-tokens";

const myColor = tokens.theme.colors.primary;
``` 

### Javascript

If you previously specified `-g js` option you will have a `cunningham-tokens.js` file generated. You can import it in your
Javascript files and use the design tokens like this:

```js
import { tokens } from "./cunningham-tokens.js";

const myColor = tokens.theme.colors.primary;
``` 