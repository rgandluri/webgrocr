
# Store - ShoppingCart Example - NodeJS/Express (based on  https://github.com/brenohq/nodejs-shopping-cart.git)

# Live Demo on Heroku:
[nodejs-shopping-cart.herokuapp.com](https://nodejs-shopping-cart.herokuapp.com/)

### Run Locally on Your Machine
You need NodeJS, NPM and MongoDB installed.

```
Setup the environment variables replacing <MONGODB-PORT> with your mongodb port, usually is 27017.
    export MONGO_DB_URI=mongodb://localhost:<MONGODB-PORT>/shopping
```
Install dependencies
    npm install
```

With your mongod service running, this will populate shopping database
    node seed/product-seeder.js 
```
This will start dev server at http://localhost:3000 with Nodemon.
    npm run dev
```

### Tests
    npm test
```

### Technologies
###### Back-end
NodeJS, Express, MongoDB, Mongoose. 
###### Fron-end
Handlebars and Bootstrap.
