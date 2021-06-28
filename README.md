# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

```console
yarn start -- --locale es
```

This command makes the same than previous one, but opens the development for `Spanish` translation.

## Mantain Translations

When an untranslated document is edited or a new feature is used that brings another button for example, it is our responsibility to maintain the respective translated files.

### Markdown translations

#### New translations

```console
mkdir -p i18n/es/docusaurus-plugin-content-docs/current
cp -rn docs/** i18n/es/docusaurus-plugin-content-docs/current

mkdir -p i18n/es/docusaurus-plugin-content-blog
cp -rn blog/** i18n/es/docusaurus-plugin-content-blog

mkdir -p i18n/es/docusaurus-plugin-content-pages
cp -rn src/pages/**.md i18n/es/docusaurus-plugin-content-pages
cp -rn src/pages/**.mdx i18n/es/docusaurus-plugin-content-pages
```

This set of commands will copy your untranslated Markdown files to the Spanish folder.

#### Previous translations

Any change made into the files need to be updated manually, to keep your translated sites consistent, when the `docs/introduction.mdx` doc is edited, you need backport these edits to `i18n/es/docusaurus-plugin-content-docs/current/introduction.mdx`.

### JSON translations

```console
yarn run write-translations -- --locale es
```

This command will run again the [write-translations](https://docusaurus.io/docs/cli#docusaurus-write-translations) CLI command to maintain the JSON translation files (for buttons, sidebar, navbar, etc.).

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```console
yarn build -- --locale es
```

This command makes the same than previous one, but generates static content for `Spanish` translation.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
