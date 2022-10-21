# FITPASS 

<img src="/master/FitPass/client/public/fitpass.png" alt="fitpass"/>

## ABOUT
FitPass is a pay-as-you-go gym class app. The app allows a user to 
* sign up
* create a profile
* select a gym class based on user location
* search for a gym class by various criteria
* add a gym class to Favorite list
* reserve a gym class and make payment by credit card
* track exercise progress over time

## APP DEMO
Click to watch the app demo youtube video:

[![FitPass app demo](https://img.youtube.com/vi/SOhZ_NkHBcU/0.jpg)](https://www.youtube.com/watch?v=SOhZ_NkHBcU)


## WHERE IS THE APP HOSTED?
* Frontend: https://fitpass.netlify.app/
* Backend: https://fitpass-server.herokuapp.com/
### How to update the client build using Netlify-CLI?
1. From the *client root folder*, run the two commands below
```
netlify build
netlify deploy --prod
```
### How to update the server build using Heroku-CLI?
1. Go to *server root folder*, delete the ``dist`` folder and run ``tsc`` so that Typescript will re-compile the JS files
2. Commit the changes and push to the remote ``main`` branch
```
git add .
git commit -m "re-compile TS to JS"
git push
```
3. Run ``cd ..`` to go to the *project root folder*
4. From the *project root folder*, run 
```
git subtree push --prefix server heroku master
```
This will restart the server hosted on Heroku.

## HOW TO START THE APP IN LOCAL ENVIRONMENT?
### Client
1. Go to the ``client`` folder 
2. Run ``npm install`` from the *client root folder* to install all the necessary dependencies
3. Fill in the ``.env`` file with the environmental variables, as per the ``.env.example`` file in the ``client`` folder
4. You will need to change the ``baseURL`` in ``client/utils/api.service`` file to ``http://localhost:3001/``. It is pointing to ``https://fitpass-server.herokuapp.com/`` by default
5. Run ``npm start`` from the *client root folder* to start the client app at ``http://localhost:3000/``

### Server
1. Go to the ``server`` folder 
2. Run ``npm install`` from the *server root folder* to install all the necessary dependencies
3. Fill in the ``.env`` file with the environmental variables, as per the ``.env.example`` file in the ``server`` folder
4. Run ``npm run dev`` from the *server root folder* to start the server app at ``http://localhost:3001/``

## TECH STACKS
* **Frontend** - React, Context API and Custom Hooks
* **Server** - Node & Express
* **Database** - MongoDB with Mongoose ORM
* **Authentication** - Auth0
* **Payment** - Stripe
* **Map** - Google Map
* **Photo storage** - Cloudinary
* **Styling** - TailwindCSS
* **Testing** - Jest and Cypress
* **Typescript** for everything


## TEAM MEMBERS
* [Milita Buzaite](https://github.com/militabu)
* [Sebastian Siclari](https://github.com/SebSiclari)
* [Oliver Gallanti](https://github.com/OliverGallanti)
* [Kristina Aleksejeva](https://github.com/kristi-al)
* [Francis Hui](https://github.com/francisldn)