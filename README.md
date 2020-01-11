# Front End Developer Take Home Task


## The task

We’ve created a shell React app, with data for mock datasets available through a fake API.

The mock data is available through the API in `/src/api/api.ts` - by calling `getDatasets()`.

The corresponding definition for the response data is available in `/src/api/api-definition.d.ts`.

You should create a new component (or components) which will retrieve the data from this API, and show certain statistics for its **keys** and **categories**. These components should allow the user to understand the characteristics of the datasets' data.


## Running the app

Run `npm install` from the root folder to install the necessary dependencies.

Run `npm start`, then navigate to https://localhost:3000 to view the application.


## My Notes

I was unable to get this project working at all on my windows PC. There was no error, webpack dev server said it was running, but there was nothing running on localhost.
I ended up getting it working on my old macbook (everything seems to run better on macs in the web dev world...) but had to make some changes to the project to get javascript and typescript files to work in the same project. Getting all that working even before I started on the actual project probably took me over 2 hours...

### Improvements

Due to having already spend a lot of time getting the project working, I didn't wan't to go beyond the 2 hours of "dev" time so there are a number of improvements I would make with additional time:

* Extract the dataset component into sub components. 
This would depend on how it was going to be shown on the page, but I would at least want to seperate out the keys and the categories into their own components.

* Add the category data. 
This should be fairly straightforward as the data is similar in nature to the keys which I had already implemented.

* Add visualisations.
I had an idea to use a single horizontal stacked bar chart to represent each key, with the nulls, distinct values and duplicates each taking up a percentage of the total width of the bar. I couldn't find a good example of this online but its pretty easy to do so I would have liked to add that in.

* Improve styling.
I only but in the most basic styling to give the data some structure, but I had a few ideas on how to make this more visually appealing

