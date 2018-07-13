Made new environment for just the plugin. 

Set up the original project with a policy which listens for the 'postNotification' to be true when an author has posted. 
If so, it will gather an array of the playerids.

The plugin has now been generated which accepts an async function in the services folder which is just console.logging the parametres. 

in /home/john/code/oneSignalTest
there is a sample of how to engage the API and send requests. 

I am to now, configure the plugin to accept two environment variables, and use them to send push notifications to whatever device ID is specified when 
accessing the service variable. 

## Updates
Now accepts two environment variables and pushes them. 