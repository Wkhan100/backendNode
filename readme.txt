-> to run a file : node filename.js
-> to get package.json file :npm init 
-> install express: npm install --save express
-> install nodemon to run program auto: npm instal --save-dev nodemon
-> install morgan to check next: npm install save-dev morgan
-> body parser: npm install --save body-parser
-> run npm start : change script in package.json i.e 
    "scripts":
    {
        "test":"", 
        "start": "nodemon server.js"
    }
-> create folder structure api-> routes-> orders.js file for different routes (crud operation)
-> to define url endpoint: app.js or main.js
-> error handling
-> parsing the body and handling cors
-> check at given port or in postman
-> manage database mongoDB atlas and mongoose as package to work with database
-> incrypt password bcrypt hash : npm install bcrypt --save
-> token: npm install jsonwebtoken
-> middle ware to authenticate token to restrict routes 
-> create controllers folder  and routes file pul routes in route folder and logic in controller file
        -> setup mvc type project
        -> create folder name:
            -> controllers
            -> middleware
            -> routes
            -> models
            -> server.js file
            -> .env file
            -> create a json file to save and fetch data as a db