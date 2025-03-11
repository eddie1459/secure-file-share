# Installation and Use of the App

The app has 2 folders `backend` and `frontend`

# Backend Setup
To setup the `backend` just cd into that directory and do `npm i` to get the dependencies installed --- this project will require node.js to be installed to run and execute the commands (https://nodejs.org/en/download)

You will also need mongo intalled for the users and message data: https://www.mongodb.com/docs/manual/installation/

I used the MacOs instructions which uses HomeBrew to install mongodb, once it is installed you have to run
`brew services start mongodb-community@8.0`
The backend will create the db and collection.

And you will also need a valid AWS `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` for the storage of the files that are uploaded along with a S3 bucket `secure-file-share-test`.

The `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` are from your Twilio setup.  I put in the `TWILIO_PHONE_NUMBER` that is used for testing the api call, it will not send a sms message by default as a security measure.
 These proerties are set in the `.env` file inside the `backend` folder.

# Frontend Setup
The setup the `frontend` just cd into that directory and do `npm i` to get the dependencies installed

I tested it with Firefox, Safari and Chrome, for some reason the version of Chrome I had disabled the UI parts and I had to update it to make it work.  (Incognito worked just fine tho.)

# Testing application

There is a postman collection provided at the root of the project that has calls for:
- Registering a user: http://localhost:4000/api/auth/register
- Log In User: http://localhost:4000/api/auth/login

You will need to run the register call once to get a user into the system

Start the backend by cd into the `backend` folder and running `npm start`

Start the frontend by cd into the `frontend` folder and running `npm start`

This should start the application up and you can browse to http://localhost:3000