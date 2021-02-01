# Use Serverless Functions to Send an SMS with React, Twilio Programmable SMS, and Vercel

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the project

To run the project you will need a [Twilio account](www.twilio.com) and a Twilio phone number that can send SMS messages. Gather your Twilio Account Sid and Auth Token from the [Twilio console](https://www.twilio.com/console) and the phone number.

Clone the project, change into the directory and install the dependencies.

```
Install `vercel` on your local machine.

```bash
npm install --global vercel   
```

Create a `.env` and fill in your Twilio credentials and phone number.

Initiate a Vercel project:

```bash 
vercel
```

Start the application on development server:

```bash
vercel dev
```

Open the app at [localhost:3000](http://localhost:3000). You can now use the form to send SMS messages via your Twilio number.
