BusinessBook is an application where users can search for a business.

# 👩‍💻 Installation
Follow the commands below to clone this repository on your system

1. Clone the app: 
`git clone git@github.com:VanessaAla/businessbook-backend.git`

2. Cd into your project:  
`cd YOUR_PROJECT_NAME`

3. Install dependencies:
`npm install`

4. Configure your database in config/config.json (Default config is setup for usage with an ElephantSQL database instance, you need to provide the DB Url on the "url" key of the config.json file, key development: 
`// config/config.json
{
  "development": {
    "url": "YOUR_ELEPHANTSQL_URL_HERE",
    "dialect": "postgres",
    },
}`

5. npm start

# ⏬ Tech Used

- Express

- REST API

# Database Model

Go to https://dbdiagram.io/d/6069a310ecb54e10c33e9b12

