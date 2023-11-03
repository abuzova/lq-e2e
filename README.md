# Playwright End-to-End Tests for LuxeQuality Website

This repository contains end-to-end tests for https://luxequality.com/ website using Playwright with TypeScript. 

## Prerequisites

- Node.js (v18 or higher)
- Git

## Setup

1. Clone repo

```
git clone https://github.com/rentzila/luxequality-e2e.git
```
2. Navigate to folder
```
cd luxequality-e2e
```
3. Install node modules
```
npm install
```
4. Install supported browsers:
```
npx playwright install
```

## Available scripts

1. Run all tests:
```
npm run test
```
2. Run all tests in debug mode:
```
npm run test:debug
```
3. Run tests for specific page (e.g. homepage):
```
npm run test:home
```