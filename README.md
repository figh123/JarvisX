JarvisX
=======

The JarvisX API

Welcome to the JarvisX JavaScript API v2, it is capable of interpreting a string of text and returning an answer

There are just a few things you need to do to get started.

First you need to download your choice of API you can use the PUREJS one if you want to have the API running on your infrastructure, but it wont be updated once it is downloaded, you can use the JSON one (in development) if you are willing to make calls to my infrastructure (don't worry it is very fast) and have automatic updates, don't worry about the AJAX calls, I handled that for you.

Lets get started with the PUREJS API
Download the PUREJS folder from github, that is the hardest part
next all you have to reference where it is in your file structre, for example `<script src="js\JarvisX\JarvisX.basicAI.PUREJSAPI.js"></script>`

Next it is very important that you reference the word database, for example `<script src="js\JarvisX\AFINN-111.js"></script>`

Great, now you can start using the API, in order to interpret a string of text and get an answer you just call a function and you can reference the answer to the function as a variable.

Here is how...

```
//call the function with your string, for now I will use "Hello World!"
interpret('Hello World!');
//now I will print the answer out onto the page and alert it
alert(answer);
document.write(answer);
```

That is it! See how easy that was.
