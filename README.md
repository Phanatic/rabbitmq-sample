# MySQL Node

This is a simple Node.js app that uses MySQL. 

## Deploy to HP Helion
<a href="http://localhost:3000/?repoUrl=https://github.com/Phanatic/node-env">
![Helion  Logo](https://region-b.geo-1.objects.hpcloudsvc.com/v1/10822257696083/downloads/button.png?id=6)
</a>


## Prerequisites
- If you do not have a Stackato 3.2 instance available, please create one before
  continuing and install the Stackato CLI (http://docs.stackato.com/user/client/index.html#client) 
- If you do not have the MySQL service enabled on your cluster, you can take the
  following steps to enable it:
    - Go to the console (e.g. https://api.example.com)
    - Admin --> Cluster --> Settings (gear icon on right corner) --> Check off 
      MySQL --> Save

## Deploy the Application

To deploy the application, make sure you have the Stackato client installed and 
that you are logged in successfully to your desired target environment 
(e.g. https://api.example.com).

After you *cd* into the app's root directory, execute:

    stackato push -n 

## View and run the app
- Go to the management console (e.g. https://api.example.com)
- Check the applications link to see a list of your apps.
- Click on the app you just deployed.
- Click "View App" to see your app in action.

The result when visiting the application page and clicking 'View App' should be
a page showing some text after your app has connected to MySQL and executed a 
query.
