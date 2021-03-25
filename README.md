# Group Project - Giphy API and Sagas

## Description

_Duration: 2 day team code challenge_

For this project, my group and I were tasked with building an app that uses the Giphy API to allow a user to search for gifs, favorite them, and categorize them. The project utilizes React, Redux, Redux-Saga and integrates them with that 3rd party API. The biggest challenge was breaking the work out into reasonable chunks for each of use to separately complete, while trying to avoid bottlenecks and idly sitting waiting for bits to be completed. When there was the occasional bottleneck, we all jumped on a call to pair program a bit and work through what the issue / holdup might be.

### Prerequisites
- [Node.js](https://nodejs.org/en/)

## Installation
* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server` to start the server
* Run `npm run client` to start the client
* Navigate to `localhost:3000`

## Usage
How does someone use this application? Tell a user story here.

1. A user may start in the search view. There is a navbar at the top of the page to switch between the search and favorites view.
2. There is an input that a user can enter a search term into - this queries the Giphy external API for gifs matching that search term. They then are able to either favorite those gifs, or select a category for the gif to be categorized as.
3. Favorited gifs are available for viewing in the favorites page. A user can favorite any number of gifs. The category can also be changed on the favorites page.

## Built With
This version uses React, Redux, Express, MaterialUI, and Giphy API (a full list of dependencies can be found in `package.json`).

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [smwade1115@gmail.com](smwade1115@gmail.com)