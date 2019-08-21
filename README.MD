# Node Three

In this lecture, we will talk more about node, setting up our database using Heroku, and how to interact with our databases using SQLtabs.

## Heroku Database

We used to install PostgreSQL locally and create databases on our local machine, but it would start to take up a ton of memory and really slow down some students computers. We now will create our database on Heroku's cloud platform.

Visit https://www.heroku.com/ and create your heroku account. After creating your account and verifying it through your email, you should now be able to login and you will see a dashboard like this.

![Landing Heroku](images/landing.png)

Click on the purple `Create new app` button to start creating your first app. Give your app a name and select the region that it will be hosted in. Just keep it to the US.

After creating a new app, your dashboard should look like this.

![new app](images/appdash.png)

Now, click on the `Resources` tab in the top left. We will be adding on a PostgreSQL database to our app.

Now in the `Resources` page, click on the `add-ons` search field and look for `Heroku Postgres` and provision it as `Hobby Dev - Free`.

![provision](images/provision.png)

Now you will see that Postgres has been provisioned to our app so we can click on it to access our database. When you access the database, it will open in a new window for you and you will be looking at the dashboard interface for information about our postgres database.

![database gui](images/database.png)

Now click on the `Settings` tab in the top left, then click on the purple button on the right of the screen that says `View Credentials...`.

You should now see information about our databse regarding the `host`, `database`, `user`, `port`, `password`, `uri`, and `heroku cli`. This is sensitive information that we do not want anyone getting a hold of. We need to make sure that we keep this secure.

The `URI` is what will really matter to us, so keep this page open so we can reference it later.

## SQL Tabs

SQL tabs is the cross-platform interface that we will use to interact with our database directly.

Download your OS version at this link: http://www.sqltabs.com.

![SQLtabs](images/SQLtabs.png)

After installing the correct files, you will need to configure it.

### Mac

Unzip the download and put it into your applications. You may get a security warning, so you will need to hop into `system preferences` and it will you ask you if trust the third party publisher, then select `Open Anyways`.

### Windows

Unzip the folder then place the application somewhere easy to access like your desktop or a folder that's easy to get to (I recommend desktop).

### Linux

Gunzip the tarbell files then execute then execute `./sqltabs`.

## Connecting SQL Tabs to Heroku Postgres

After installing SQL Tabs, go ahead an open it up. We will need to connect our interface with our database that's hosted on Heroku.

Now head back to your settings for your heroku database and copy the `URI` string. Then go ahead and paste that string in the search bar at the top os SQL Tabs.

![sql tabs ui](images/sqltabsui.png)

Now once the URI has been pasted, we need to append a query onto it. At the end, add `?ssl=true`.

### SSL

SSL stands for `Secure Sockets Layer`. It is the standard security technology for establishing an encrypted link between a web server and a browser. This will allow our SQL Tabs to securely interact with our Heroku Database.

Viola! You now have established a connection. Test it out by creating some tables.

## .ENV

We want make sure that we are trying to stay secure with our sensitive information that we will be using within our code. We can create a `.ENV` file to house environment variables. The variables that are created in this file will be stored on the Node servers `process`.

We can then store the variables that we want to keep private inside of this file. These variables will be things such as `API Keys`, `Database Connections`, `etc`. We DO NOT want to push this information to Github to be stolen.

We need to make sure that we include the `.ENV` file in the `.gitignore` file so that that the file will not be pushed up to Github.

## DOTENV

`dotenv` is the module of code we can use to bring our variables declared in the `.ENV` into our Node server.

We first need to install this module from NPM, in your terminal run:

```bash
$ npm install dotenv
```

Now at the top of our server file, typically called `index.js` we will require this module and invoke the `config` method from it.

```js
require('dotenv').config();
```

We now have access to our environment variables.

