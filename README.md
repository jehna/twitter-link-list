# My Twitter links
> In a searchable format

This project fetches my Twitter links and generates a webpage that lists them.

## Live website

You can see the live website at:

https://links.thejunkland.com/

You can search through the tweets using the search input

## Developing

To start developing run

```shell
yarn
yarn start
```

This installs all needed dependencies and starts a static web server

### Building

The `worker/` folder has an implementation of a background/worker script which
downlaods the tweets, filters them and sends them to Laststate API for
persistence. You can run it by:

```shell
cd worker
yarn start
```

### Deploying

This repository is deployed to Netlify automatically from the `master` branch.
The Github Action uploads the most recent tweets to Laststate every 15 minutes.

## Features

This project uses:
* Async iterators and async generator functions
* ES modules
* [Longwood](http://npmjs.com/package/longwood) as the frontend rendering lib
* No build steps
* ES modules all the way (in frontend & worker)
* [Laststate](https://laststate.io) as dababase/"backend"

## Contributing

This was a simple hobby project, but if you'd like to contribute, please fork
the repository and use a feature branch.

## Licensing

The code in this project is licensed under MIT license.
