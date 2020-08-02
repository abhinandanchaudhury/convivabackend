# convivabackend
1. This is the microservice of customer detail micro frontend. It doesnot connect to any database (which can be plugedin easily and query can be done based on it).
2. To start the service command is npm start.
3. It runs in the port 8080 if environment variable port is not set.
4. It uses jade for templating for one api basically to test if the service is running. i.e in local to test http://localhost:8080/
5. It has 2 api i) {basepath}/customers/:page ii) {basepath}customers/:page/:id, where page is the :page number and :id is the unique customer id of each customer selected. In local to test i) http://localhost:8080//customers/:page ii) http://localhost:8080//customers/:page/:id
6. Both the above api are GET requests.
7. Morgan is used for logging and express as web framework.

Things yet to do:
1. Change the structure of the services as versioning api. Like making customerservices.js and placing it under folder V1 and referencing it in customer.js. This will help in versioning our api and soomth transitioning.
2. Logger needs to be put for easy debugging with log rotation of 1d.
3. Connecting to db (relational if then Mysql will be preferred but it all depends on reporting and quering), if simple query we can use dynamodb or firestore. For a tradeoff between 2 world columnal db like casandra will be good choice.
4. Code formatting and documentation.
5. API testing needs to be written and performance benchmark can be done.
6. Use of E-TAG can be implemented for caching.

