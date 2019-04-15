## To Install the application

1. Unzip the folder and navigate to the root folder where package.json is present
2. Ensure Node.js is already installed in the system
3. Install the app using "npm install" in the terminal
4. To start in dev mode execute command "npm start"
5. To build the app in production mode execute "ng build --prod"
    5.1 The build generates dist folder
    5.2 Host these files in a server to see the prod ready app

## Copyrights 
1. As this is only for internal assignment purpose, I have downloaded the logo from Akelius website to make it a bit colorful.

## Structure of application
1. This Angular App demonstrates the usage of 
    2.1 Components
        2.1.1 Header, footer, homepage,  not-found, loader, units-list, unit-detail
    2.2 Guards: Just a placeholder for Activated routes. ALthough this is not a part of assignment. 
    2.3 Services: 
        2.3.1 api service - To save all the URLs in one file
        2.3.2 string handler - To save the static data (although not much useful for this app)
        2.3.3 detail service - 
    2.4 Router - for routing
    2.5 Interfaces - to define the models for Units and Unit
    2.6 Helpers - error and loader interceptors to show the spinner and errors during http calls
    2.7 Directives: ALert service to show the notifications (for this demo, it would be an error message from the get units api if server throws any)
    2.8 Filters : To get the unique cities (available unit's cities), filter by city. Although we could maintain a different component for unit by city. 
3. Webpack for build tool. 
4. Complete versions of modules can be found by executing "ng version"

## Size of the build app
1. As evident the size of the final production app is not more than 1MB, although the vendor size is 4.5MB in dev verson.

## Nice to have
1. Comments on top of each function accross the application
2. Although for the demo the communication between units and unit detail is with service, I suppose unit detail has to be fetched from the API passing ID to the detail component