# Integrating Passage with [Grafbase](https://grafbase.com) and using [Grafbase Next.Js Plugin](https://grafbase.com/docs/tools/nextjs-plugin).

### This repo is for my submission for the [Grafbase](https://grafbase.com) X [Hashnode](https://hashnode.com) X [hackathon](https://hashnode.com/hackathons/grafbase) which took place from August 1 - August 15, 2023

#### Hashnode article: [Integrating Passage with Grafbase and using the Grafbase Next.Js Plugin](https://shreyas-chaliha.hashnode.dev/integrating-passage-with-grafbase-and-using-the-grafbase-nextjs-plugin)

## Getting Started

### Either fork the repo or directly clone it

### Prerequisites

**Node version 16.8 or later  
**macOS, Windows (including WSL), and Linux are supported.

### To directly clone the repo

```shell
git clone https://github.com/trace2798/passage_grafbase_integration.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_PASSAGE_APP_ID=

NEXT_PUBLIC_GRAFBASE_API_URL=
NEXT_PUBLIC_GRAFBASE_API_KEY=
```

### Start the app

```shell
npm run dev
```

Since I am using the next.js plugin from Grafbase, I do not need to separately start the grafbase server.

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
| `build` | To build your application                |
| `start` | Starts a production instance of the app  |

## For env value and functionality of this application I have written a very detailed article on [Hashnode](https://shreyas-chaliha.hashnode.dev/integrating-passage-with-grafbase-and-using-the-grafbase-nextjs-plugin)

Youtube Demo Link: [Integrating Passage with Grafbase and using the Grafbase Next.Js Plugin](https://youtu.be/CCR1fBmR1xQ)
