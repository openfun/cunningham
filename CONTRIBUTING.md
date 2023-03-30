# Contributing to Cunningham

Want to contribute to Cunningham? We got you covered.

We try to raise our code quality standards and expect contributors to follow
the recommandations from our [handbook](https://handbook.openfun.fr/).

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

Then, you will be able to access the demo app on [http://localhost:3200](http://localhost:3200) and the React components package's Storybook on
[http://localhost:6006](http://localhost:6006)

### Building

In order to build all packages of this repo you just need to type the following command at the root of the monorepo.

```
make build
```

## Sending a pull request

When submitting please follow those steps:

- Make sure you followed the commit conventions from the [handbook/git](https://handbook.openfun.fr/git).
- Make sure that you added tests covering your changes.
- Run `make deploy` to tests, lint and build the project.
- Create a [changeset](#adding-a-changeset) by running `yarn changeset` at the root of the repo. In any case, a bot will verify if your PR contains a changeset.

### Changelog

The changelog is created with [Changesets](https://github.com/changesets/changesets).

#### Adding a changeset

A changeset describes changes made in a branch or commit. It holds three bits of information:

- What packages we need to release
- What version we are releasing packages
- A changelog entry for the released packages

Add a changeset if you have made any changes that will require a package version bump and release:

1. Run `yarn changeset`.
2. Select the packages you want to include using ↑ and ↓ to navigate to packages, and space to select a package. Hit enter when all desired packages are selected.
3. Select a [bump type](https://semver.org/) for each selected package.
4. Provide a message to be written into the changelog on the next release.

#### Writing a changelog message

Keep the following in mind when authoring your changelog entry (final prompt after running `yarn changeset`):

- Begin sentences with explicit verbs like "add", "fix", "refactor"
- Avoid redundancy when possible
- Use sentence case
- Use plain language

#### Out of scope for the changelog

Generally, changes related to these topics can be omitted:

- Doc typo fixes
- Dev dependencies upgrades
- Chores (infrastructure, release process…)

This part of the documentation is 99% inspired by [Polaris](https://github.com/Shopify/polaris/blob/main/.github/CONTRIBUTING.md#adding-a-changeset)

## Release

1. Create a new branch from main specific to the release.

`git checkout -b release/version-packages`

2. Now run the following command at the root of the repo to bump the version of the packages.

`yarn changeset version`

3. Update the upgraded CHANGELOG.md files of the packages to add link to the diff between the previous version and the new one.

4. Commit the changes and create a PR named "🔖(release) version packages".

Once this PR is merged, the CI will automatically publish the new version of the packages on npm. It will also create and push release tags.
