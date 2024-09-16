# Vanilla JS + CSS programming problem

## Implementation notes

Hi!
My name is Dmytro and this is my attempt to implement coding challange described below.

First of all thank you for considering me as a candidate.
Secondly, so the task looks simple at glance it covers broad of knowledge and was really fun to implement it.

Except the original task I tried to get a few additional points, so:

- I added eslint and prettier, these tools are must for any project these days.
- I added accessibility ARIA labels.
- On purpose to recuce some time I used only one main branch during development. I understand that in real life all those changes definitely should come as PRs. I also used Conventional Commit Messages to show some kind of coding flow culture.
- I see that task was presented using camel_case notation. I assume that was done for the sake of consistency (maybe backend is written in Python or something), so I continued to follow it, but should mention that in JS/TS ecosystem camelCase notation is recomended.
- I extended existing tests and added e2e ui ones (using Cypress).
- All npm scripts are updated corespondingly.

## Requisites

node

## Preparation

```sh
npm i
```

## The code

This code is bundled by vite. We have TS support and vitest for unit tests.

In the `src` folder you will find:

`src/factory.ts`
This is the factory that will produce a count function you will use later.
It is left blank for you to implement.

Factory takes two numerical arguments. First is the starting point for the count function, the other one is the step, by how much should we increment the counter on each click.

`src/factory.test.ts` -
This is the unit test for the factory. It is written and ready, your implementation needs to pass these tests.

`src/style/main.css`
These are the styles for the excersise. Plain CSS, nothing fancy :).

`index.html`
The main page

`src/main.ts`
Main logic for the implementation of the requirements.

## The requirements

Build a simple page that looks similar to the image at `public/design.png`.

When you click the big yellow button in the middle, counter function imported from `factory.ts` should be executed and the returned value populated in the middle of it.

When you change either the `start_at` or `step` controls, new instance from the factory should be taken with updated arguments.

All test are passing. To run them:

```sh
npm run test
```

To work on the code:

```sh
npm run dev
```

## Extra credit

- Improve accessibility.
- Better test coverage.
- UI tests.
- Improve DX.
- Add linters and formatters.
- Have fun.
