# Cunningham, the best OpenSource Design System

[![CircleCI](https://circleci.com/gh/openfun/cunningham/tree/master.svg?style=svg)](https://circleci.com/gh/openfun/richie/tree/master)

<p align="center">
    <a href="https://openfun.github.io/cunningham"><b>Documentation</b></a> •
    <a href="https://www.figma.com/file/sSEMhow3g5zpEkyDLEQ1ZO/DS-Cunningham?node-id=47%3A261&t=nKRnadK4sslyVxD7-0"><b>Figma</b></a>
</p>


## Getting started

Packages are not published yet, but once it is done we will show people how to install packages.

## Development

### First start

Install and build packages 

```
make bootstrap
```

And then run dev servers

```
make dev
```

Then, you will be able to access the demo app on `http://localhost:3200` and the React components package's Storybook on
`http://localhost:6006`

### Building

In order to build all packages of this repo you just need to type the following command at the root of the monorepo. 

```
make build
```

## Contributing

This project is intended to be community-driven, so please, do not hesitate to
get in touch if you have any question related to our implementation or design
decisions.

We try to raise our code quality standards and expect contributors to follow
the recommandations from our
[handbook](https://openfun.gitbooks.io/handbook/content).

## License

This work is released under the MIT License (see [LICENSE](./LICENSE)).