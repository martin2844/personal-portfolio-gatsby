---


title: 'Gatsby and Node-Express Cors Issues'
date: '2020-07-18'
sinopsis: "So, I've been having issues with cors integrating gatsby to a local node express SV. This is how we solve it."
tags: [React, Gatsby, NodeJS, Express]

---


This is not intended to be a long post, just wanted to make a quick post showing some of the details in order to get a local gatsby development working with a node + express app.

First of all, this is intended if for example you are trying to make a post request to your localhost:5000 express api. This is going to give you a cors - cross-origin: Access-Control-Allow-Origin issue.

Also, take in account, my gatsby project is running @ localhost:8000 and my node app is running @ localhost:5000.

# How to solve it: Node

First of all in our node app, we'll install cors npm package:

`npm install cors`

Then, well add the following config 

```javascript 

app.use(cors());


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });


```

of course, this is added to our app.js. My specific app.js ended like this:


```javascript

//First require express
const express = require('express');
// require path for absolute path for sendFile
const path = require('path');
const cors = require('cors');



//initialize express
const app = express();
app.use(cors());


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });


//Body parser for axios calls
app.use(express.json({extended: false}));
app.use(express.urlencoded({extended: false}));


//Mailing Api route
app.use('/api/sendmail', require('./routes/sendmail'));

//if somebody decides to go to / route
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on ${PORT}`));

```


So we are done, take in to account my api starts with `/api/sendmail`

# How to solve it on gatsby:

We are going to go to our gatsby-config.js file, in the root folder:

and to our module.exports we'll add the following like so:

```javascript
module.exports = {
  /* Your site config here */
  proxy: {
    prefix: "/api",
    url: "localhost:5000",
  },
}
```

This is because our node express server is running on localhost 5000.

Now to make use of our api, we'll just axios.post for example to the following adress like so:


```javascript

 axios.post("/sendmail/", object).then(response => console.log(response.config.data));

```

this will go directly to our localhost:5000/api/sendmail which is defined in our nodejs app.

Test it out!

cheers