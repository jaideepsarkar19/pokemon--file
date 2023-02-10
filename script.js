console.log(' connected...')

document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#display-pokemon');
    generateBtn.addEventListener('click', showEverything)

    // getDeleteBtn().addEventListener('click', deleteEverything);
})

function showEverything(){
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchPokemon();

    getDeleteBtn().style.display = 'block'
}

function getDeleteBtn(){
    return document.querySelector('#delete-btn')
}


function fetchPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
     .then(response => response.json())
     .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
    .then(data=> console.log(data))
}

function fetchPokemonData(pokemon){
    let no=1
    let url = `https://pokeapi.co/api/v2/pokemon/${no}`
                                // https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
         for(let i of pokedata){
    console.log(i)
         // (i['abilities']['ability']['url'])}
  }
  })
}


function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") 
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4') 
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
   
    let pokeTypes = document.createElement('ul') 
  

    createTypes(pokeData.types, pokeTypes) 

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
    allPokemonContainer.appendChild(pokeContainer);                                                                   
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
     pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}




























// function deleteEverything(event){
//     event.target.style = 'none';
//     let allPokemonContainer = document.querySelector('#poke-container')
//     allPokemonContainer.innerText = ""

//     let generateBtn = document.createElement('button')
//     generateBtn.innerText = "Generate Pokemon"
//     generateBtn.id = 'generate-pokemon'
//     generateBtn.classList.add('ui', 'secondary', 'button')
//     generateBtn.addEventListener('click', renderEverything);

//     allPokemonContainer.append(generateBtn)
// }