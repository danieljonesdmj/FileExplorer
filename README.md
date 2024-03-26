# BrightHR tech test

Taken from [here](https://github.com/brighthr/Front-End-Tech-Tasks/blob/main/junior-and-middleweight.md)

## About

I chose to build this project in React for its speed and simplicity in writing dynamic and scalable interfaces. I went with Vite for the build since it integrates seamlessly with react. And I have used Tailwind CSS for some minimal styling, this was my first time using Tailwind and I thought it was very simple to get started with.

With this app you can do the following:

- Display a list of files/folders
- Allow a user to open a folder to see it’s contents
- Sort files by name/size/date
- Filter files by filename

## Tests

For the tests I've used Vitest and react-testing-library. Each component has a unit test and `Display.test.jsx` contains some more integration level tests to check that the behaviour is expected.

```
npm run test
```

## How to use the App

```
git clone git@github.com:danieljonesdmj/FileExplorer.git
cd brightHR-tech-test
npm install
npm run dev
open http://localhost:5173/
```
