#Step to Test Manually:

## Launch Server Side (Spring Boot):

### Go to the project root folder of Foreign Exchange application:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/backend-01.png?raw=true)

### Steps To Launch Server:

#### Input: mvn clean
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/backend-02.png?raw=true)

#### Input: mvn compile
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/backend-03.png?raw=true)

#### Input: mvn spring-boot:run
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/backend-04.png?raw=true)

### Server launched:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/backend-05.png?raw=true)

### Copy the H2 in-memory database instance JDBC URL for connecting with H2-Console for administration purpose if necessary:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/backend-06.png?raw=true)

## Launch Client Side (React):

### Go to the front-end root folder of Foreign Exchange application front-end:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-01.png?raw=true)

### Steps To Launch Client:

#### Input: npm start
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-01.png?raw=true)

Than application would be launched on [http://localhost:3000](http://localhost:3000)

## To Test Manually:

### Click the "Transactions" link to redirect to the transaction list:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-02.png?raw=true)

### Click the "Add Transaction" button to add a new transaction:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-03.png?raw=true)

### Input all information and the click the "Save" button to add the new transaction record:
Remarks: The format of the Time Placed input is: YYYY-MM-DD"T"HH:mm:SS.ssss, such as: 2018-01-24T10:27:44.0000
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-04.png?raw=true)

### Click the "Edit" button of the corresponding record to edit the transaction:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-05.png?raw=true)

### Edit the information and the click the "Save" button to update the record:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-06.png?raw=true)

### Click the "Delete" button of the corresponding record to delete the transaction:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-07.png?raw=true)

Then the transaction was removed:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-08.png?raw=true)

## Sample with several transactions prepared and shown on the transaction list:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/frontend-09.png?raw=true)

# About using H2 in-memory database (Embedded in this Spring Boot application):

## Reasons for using in-memory database:
1) In-memory database is good for testing purposes, without the need of clean up any testing records after testing; because when application shutdown, it would be disappeared.
(In testing this application, H2 in memory database would be used.) 

2) In-memory database can use for front-end caching purposes for reducing the latency of interact with users. The performance is much better to direct connect to other database(s) on file systems, because it exists on memory directly. 
For accessing the database(s) on file systems of the other server(s) for DML purposes, let the other Thread(s) to reference the data from in-memory database to do it, no need to affect the performance of the user experience.    
And we can cache always accessing static data with in-memory database also for reducing latency.
(But I have not enough time to implement this part)

## H2-Console for administration purpose (if needed):

### Copy the JDBC URL of the H2 in-memory database instance:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/h2-01.png?raw=true)

### Lanuch H2 Console and paste the JDBC URL into the JDBC URL field and click the "Connect" button:
URL: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/h2-02.png?raw=true)
Remarks: Let the other input as default values.

### H2 in-memory database console for current database instance launched:
![alt text](https://github.com/oceanlaurel/foreignExchange/blob/master/src/main/resources/img/readme.md/h2-03.png?raw=true)

# Remarks:
1) I embedded and prepare to use Mongo NOSQL database for logging purposes, because using NOSQL database does need to care the table structure (good for keep various kinds of logs), it would be much for efficiency for locating the corresponding cases logs during BAU support. (But I have not enough time to complete.)

2) And planning to implement JUnit testing classes and methods for auto testing by manually trigger and auto trigger by Jenkins also. (But I have not enough time to complete.)   

# Other Reference

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



