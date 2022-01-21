const jokeBody = document.querySelector(".jokeBody")
const genJoke = document.querySelector("#generate")
const anotherJoke = document.querySelector("#anotherGen")
const jokeAPI = "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
const nsfwJoke = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
//---------------------------------------Fetch Data---------------------------------------------
//safe Joke
function getData() {
    const joke = fetch(jokeAPI)
        .then(response => response.json())
        .then(data => generateHTML(data))
        .catch(error => console.log("fail"))
}
function getDataNSFW() {
    const joke = fetch(nsfwJoke)
        .then(response => response.json())
        .then(data => generateHTMLOneLine(data))
        .catch(error => console.log("fail"))
}


//---------------------------------------Helper Functions---------------------------------------------

function generateHTML(data) {
    var html = `<h2>${data.setup}</h2>
                <h3>${data.delivery}</h3>`
    jokeBody.innerHTML = html
}
function generateHTMLOneLine(data) {
    var html = `<h2>${data.joke}</h2>`
    jokeBody.innerHTML = html
}





//---------------------------------------Event Listeners---------------------------------------------

genJoke.addEventListener("click", getData)

anotherJoke.addEventListener("click", getDataNSFW)



    