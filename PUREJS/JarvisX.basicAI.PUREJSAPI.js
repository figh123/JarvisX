function interpret(command) {
    command = command.toLowerCase(); var isQuestion0 = new RegExp("what"); var isQuestion1 = new RegExp("why"); var isQuestion2 = new RegExp("who"); var isQuestion3 = new RegExp("how"); var isDoYou = new RegExp("do you"); var isAreYou = new RegExp("are you"); var hi = new RegExp("hi"); var hello = new RegExp("(hello|hey)"); var sup = new RegExp("(sup|what's up|whats up|waz up)"); var hay = new RegExp('how are you'); var thanks = new RegExp('(thanks|thank you)')
    var noResponse = new RegExp("(you are welcome|np|no problem|your welcome|you're welcome|welcome|yw)"); if (command.search(noResponse) >= 0) { setTimeout(function () { speak("Did you know that Tim Berners Lee created the world wide web?"); }, 5000); }
    else if (command.search(thanks) >= 0) {
        var random = parseInt(Math.random() * (4 - 0) + 0); if (random == 0) { speak("No problem."); }
        else if (random == 1) { speak("You are welcome."); }
        else if (random == 2) { speak("You're welcome."); }
        else if (random == 3) { speak("Not a problem."); }
        else if (random == 4) { speak("Any time."); }
    }
    else if (command.search(hi) >= 0 || command.search(hello) >= 0) {
        var random = parseInt(Math.random() * (4 - 0) + 0); if (random == 0) { speak("Hello, how are you."); }
        else if (random == 1) { speak("Whats up"); }
        else if (random == 2) { speak("How is it going"); }
        else if (random == 3) { speak("Whats going on brother man"); }
        else if (random == 4) { speak("Hey, nice to see you, whats up"); }
    }
    else if (command.search(sup) >= 0) {
        var random = parseInt(Math.random() * (4 - 0) + 0); if (random == 0) { speak("Nothing much, just talking to you, anything up with you."); }
        else if (random == 1) { speak("Not much, what are you up to"); }
        else if (random == 2) { speak("Talking to you, executing complex processes, nothing out of the ordinary, what's up with you"); }
        else if (random == 3) { speak("Nothing out of the ordinary, what is up with you"); }
        else if (random == 4) { speak("Not much, what are you doing"); }
    }
    else if (command.search(hay) >= 0) {
        var random = parseInt(Math.random() * (4 - 0) + 0); if (random == 0) { speak("I am alright, thanks"); }
        else if (random == 1) { speak("I am pretty okay, thank you for asking"); }
        else if (random == 2) { speak("I am great, thanks for asking"); }
        else if (random == 3) { speak("I am pretty good, thanks"); }
        else if (random == 4) { speak("I am really pretty good, thank you"); }
    }
    else if (command.search(isQuestion0) >= 0 || command.search(isQuestion1) >= 0 || command.search(isQuestion2) >= 0 || command.search(isQuestion3) >= 0) {
        speak("Would you like to check google for an answer?"); setTimeout(function () {
            var search = confirm("Would you like to check?"); if (search) { location.href = "http://google.com/search?q=" + command; }
            else { speak("okay"); }
        }, 1000);
    }
    else if (command.search(isDoYou) >= 0 || command.search(isAreYou) >= 0) {
        command = command.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        var commandArray = command.split(' '); var commandArrayLength = commandArray.length; var mood = 0; for (var i = 0; i <= commandArrayLength; i++) {
            if (words[commandArray[i]] !== undefined) { mood = mood + words[commandArray[i]]; }
            else { }
        }
        console.log("MOOD KEY: " + mood); if (mood >= 0) { speak('yes'); }
        else if (mood < 0) { speak('no'); }
    }
    else {
        command = command.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        var commandArray = command.split(' '); var commandArrayLength = commandArray.length; var mood = 0; for (var i = 0; i <= commandArrayLength; i++) {
            if (words[commandArray[i]] !== undefined) { mood = mood + words[commandArray[i]]; }
            else { }
        }
        console.log("MOOD KEY: " + mood); interpretMood(mood);
    }
}
function interpretMood(mood) {
    if (mood < -5) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("Calm down"); }
        else if (random == 1) { speak("CALM DONW... NOW"); }
        else if (random == 2) { speak("Try to be happy, nobody likes a downer."); }
    }
    else if (mood == -5) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("There is no need to be upset"); }
        else if (random == 1) { speak("Shhhh.. no tears only dreams now"); }
        else if (random == 2) { speak("Don't be so upset"); }
    }
    else if (mood == -4) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("It is okay to be upset"); }
        else if (random == 1) { speak("Please try to calm down"); }
        else if (random == 2) { speak("Eliminate the urge to be angry"); }
    }
    else if (mood == -3) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("You will get over it"); }
        else if (random == 1) { speak("Just roll with it"); }
        else if (random == 2) { speak("Calm down"); }
    }
    else if (mood == -2) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("Do not fret"); }
        else if (random == 1) { speak("No need to worry"); }
        else if (random == 2) { speak("Don't worry about it"); }
    }
    else if (mood == -1) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("Wow"); }
        else if (random == 1) { speak("Alright"); }
        else if (random == 2) { speak("Don't let it get to you"); }
    }
    else if (mood == 0) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("Okay"); }
        else if (random == 1) { speak("Alright"); }
        else if (random == 2) { speak("O.K."); }
    }
    else if (mood == 1) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("Thats good"); }
        else if (random == 1) { speak("Pretty cool"); }
        else if (random == 2) { speak("Nice"); }
    }
    else if (mood == 2) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("Great"); }
        else if (random == 1) { speak("Very good"); }
        else if (random == 2) { speak("That's really great"); }
    }
    else if (mood == 3) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("You must be happy about that"); }
        else if (random == 1) { speak("That's awesome"); }
        else if (random == 2) { speak("I am really"); }
    }
    else if (mood == 4) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("Super"); }
        else if (random == 1) { speak("Awesome!"); }
        else if (random == 2) { speak("Great"); }
    }
    else if (mood == 5) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("You are such a happy little cloud"); }
        else if (random == 1) { speak("Thats pretty cool"); }
        else if (random == 2) { speak("That is so amazing"); }
    }
    else if (mood > 5) {
        var random = parseInt(Math.random() * (2 - 0) + 0); if (random == 0) { speak("Don't get to happy"); }
        else if (random == 1) { speak("That is absolutely amazing"); }
        else if (random == 2) { speak("You might be the happiest person I know, and I know alot of people"); }
    }
}
