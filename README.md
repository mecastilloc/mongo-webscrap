# mongo-webscrap
Web app that lets users view and leave comments on the latest news from CNN sports website


[Live Demo](https://scrapedsports.herokuapp.com/)


## Overview

This App is a sports news web scraper with MongoDb, Node, Express, Handlebars, Axios, Cheerio, Mongoose, that follows the MVC design pattern; uses Node and Mongoose to query and route data in  the app, and Handlebars to generate its HTML. 

[Express](https://www.npmjs.com/package/express)

[Express-Handlebars](https://www.npmjs.com/package/express-handlebars)

[Mongoose](https://www.npmjs.com/package/mongoose)

[Axios](https://www.npmjs.com/package/axios)

[Cheerio](https://www.npmjs.com/package/cheerio)


* This app accomplishes the following:

  1. Whenever a user visits the site, the app scrapes stories from CNN sports site and displays them for the user. Each scraped article is saved to the application database. At The app scrapes and displays the following information for each article:

     * Headline - the title of the article

     * URL - the url to the original article


  2. Users also are able to leave comments on the articles displayed and revisit them later. The comments are saved to the database as well and associated with their articles. Users also are able to delete comments left on articles along with its associations. All stored comments are visible to every user.

  ## COMMITS

**_Commit 17_**
Final css adjustments, link opened in new tab, readme.md file updated.

**_Commit 16_**

Try 3 adding timeout again, problem reduce to local bug, tests in other computers are successful.

**_Commit 15_**

Try 2 still problems

**_Commit 14_**

trying fix bug on save note rendering

**_Commit 13_**

Time out added to render notes, big css styling

**_Commit 12_**

Notes now appears in a modal window

**_Commit 11_**

Delete note from list naw possible, render notes completely every time, rendering notes every time needed.

**_Commit 10_**

note part does not disappear on click, new note appends, view notes button added

**_Commit 9_**

Pushing many notes to one article, correct render of those notes in front end

**_Commit 8_**

Pushing article ids to notes

**_Commit 7_**

CSS file created, minimum styling, clickable link

**_Commit 6_**

Change scope from ESPN to CNN Sports due to not to many articles to scrape for. Retrieve articles completed

**_Commit 5_**

Testing  scrap articles from source with correct format

**_Commit 4_**

Revert last commit, because of all files deleted

**_Commit 3_**

Revert commit 1 .git ignore created

**_Commit 2_**

Render articles form source website

**_Commit 1_**

Initial commit