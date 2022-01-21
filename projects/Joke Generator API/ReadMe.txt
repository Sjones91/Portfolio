A program designed and produced by Sean Jones.

The purpose of the program is to generate a random joke upon clicking "Generate Joke" button.

The functionality of the program is written in JavaScript and inside the file "jokeScript.js".

The variables at the top of the store the button elements and the section of the html that the joke will be inserted into. There are also 2 variables created to store destination for the fetch requests.

the function "fetchData" fetches the joke data from the url and parses it into JS. It then calls one of the two "generateHTML" functions to insert the joke into the html.

There are 2 "generateHTML" functions. One for one line jokes and the other for 2 line jokes.
