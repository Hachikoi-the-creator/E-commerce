# Table of contents
- [Table of contents](#table-of-contents)
  - [TODO](#todo)
  - [Steps](#steps)
  - [Come back later](#come-back-later)
  - [Some tips](#some-tips)


## TODO
- add aspect-atio to banner img
- add link entry to product schema, generates from product name `name.join("-")`


**Install exactly the version of the packages specified**
$ npm i --legacy-peer-deps

**Install sanity gloablly**
- $ npm i --location=global @sanity/cli

**Sanity project**
- Create template `$ sanity init`
- Project name: electronics-ecommerce
- Run on localhost `$ sanity start` 

## Steps
- After installing sanity, cd into the project and run `sanity start`
- create a new schema inside `/schema`, then import all hte new schemas into `schema.js`
- Create all needed components and use an `index.js` fil to export them all
- Hook up sanity client, copy all the params required from `$ sanity manage`, and update components whit dynamic data from SanityDB
  - use `getServerSideProps` to fetch the data


## Come back later
[src](https://www.youtube.com/watch?v=4mOkFXyxfsU)
- slug inside schema: 18:53
- not my error on import React: 27:00
- not my error on cooler import Components: 35:00

## Some tips
- `control + shift + R` to hard reaload removing chache