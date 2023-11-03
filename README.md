# Playwright End-to-End Tests for LuxeQuality Website

This repository contains end-to-end tests for https://luxequality.com/ website using Playwright with TypeScript.

## Prerequisites

- Node.js (v18 or higher)
- Git

## Setup

1. Clone repo

```sh
git clone https://github.com/rentzila/luxequality-e2e.git

```

2. Navigate to folder

```sh
cd luxequality-e2e

```

3. Install node modules

```sh
npm install

```

4. Install supported browsers:

```sh
npx playwright install

```

## Available scripts

1. Run all tests:

```sh
npm run test

```

2. Run all tests in debug mode:

```sh
npm run test:debug

```

3. Run tests for specific page (e.g. homepage):

```sh
npm run test:home
```

4. Run tests for specific environment:

```sh
npm run test:env
```