var answer = "STRING";

//SPEECH INTERPRETATION
function interpret(command) {
    command = command.toLowerCase();


    //REGEXP
    var isQuestion0 = new RegExp("what");
    var isQuestion1 = new RegExp("why");
    var isQuestion2 = new RegExp("who");
    var isDoYou = new RegExp("do you");
    var isAreYou = new RegExp("are you");
    var hi = new RegExp("hi");
    var hello = new RegExp("hello");


    //Normal Speech
    if (command.indexOf('?') === -1 && command.search(isQuestion0) < 0 && command.search(isQuestion1) < 0 && command.search(isQuestion2) < 0 && command.search(isDoYou) < 0 && command.search(isAreYou) < 0 && command.search(hi) < 0 && command.search(hello) < 0) {
        command = command.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        var commandArray = command.split(' ');
        var commandArrayLength = commandArray.length;
        var mood = 0;
        for (var i = 0; i <= commandArrayLength; i++) {
            if (words[commandArray[i]] !== undefined) {
                mood = mood + words[commandArray[i]];
            }
            else {
            }
        }
        console.log("MOOD KEY: " + mood);
        interpretMood(mood);
    }
    
    //Question Regarding JarvisX
    else if (command.search(isDoYou) >= 0 || command.search(isAreYou) >= 0) {
        command = command.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        var commandArray = command.split(' ');
        var commandArrayLength = commandArray.length;
        var mood = 0;
        for (var i = 0; i <= commandArrayLength; i++) {
            if (words[commandArray[i]] !== undefined) {
                mood = mood + words[commandArray[i]];
            }
            else {
            }
        }
        console.log("MOOD KEY: " + mood);
        if (mood >= 0) {
            speak('yes');
        }
        else if (mood < 0) {
            speak('no');
        }
    }
    
    //Saying Hi 
    else if (command.search(hi) >= 0 || command.search(hello) >= 0) {
        speak("Hello, how are you.")
    }
    //Question
    else {
        speak("I don't know, but maybe google does, would you like to check?");
        setTimeout(function () {
            var search = confirm("I don't know, but maybe google does would you like to check?");
            if (search) {
                location.href = "http://google.com/search?q=" + command;
            }
            else {
                speak("okay");
            }
        }, 1000);
    }
}
function interpretMood(mood) {
    if (mood < -5) {
        speak("You need to stop, calm down and watch some Bob Ross videos");
    }
    else if (mood == -5) {
        speak("There is no need to be upset");
    }
    else if (mood == -4) {
        speak("It is okay to be upset, but please try to calm down");
    }
    else if (mood == -3) {
        speak("We will get through this");
    }
    else if (mood == -2) {
        speak("Do not fret, and by that I mean worry");
    }
    else if (mood == -1) {
        speak("It is okay, you will recover");
    }
    else if (mood == 0) {
        speak("Okay");
    }
    else if (mood == 1) {
        speak("That's good");
    }
    else if (mood == 2) {
        speak("That's very good");
    }
    else if (mood == 3) {
        speak("You must be really happy about that");
    }
    else if (mood == 4) {
        speak("You are such a happy little cloud");
    }
    else if (mood == 5) {
        speak("That's super");
    }
    else if (mood > 5) {
        speak("That is absolutely amazing");
    }
}

function speak(string) {
    answer = string;
}
