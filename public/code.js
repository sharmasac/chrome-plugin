fetch("https://api.chucknorris.io/jokes/random")
.then(data=>data.json())
.then(jokeData=>{
     const jokeText= jokeData.value;
     console.log(jokeText);
     const joke = document.getElementById('joke');
     joke.innerText = jokeText;
})
