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