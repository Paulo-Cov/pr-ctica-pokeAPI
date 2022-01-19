fetch('https://pokeapi.co/api/v2/pokemon/magikarp')
.then(respuesta => respuesta.json())
.then(pokemon => {
    let element = document.getElementById('elemento')
    element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
    <img src='${pokemon.sprites.front_default}'><p>Altura: ${pokemon.height}<p><p>Peso: ${pokemon.weight}<p>`;
    console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(respuesta => respuesta.json())
.then(pokemon => {
    let element = document.getElementById('elemento2')
    element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
    <img src='${pokemon.sprites.front_default}'><p>Altura: ${pokemon.height}<p><p>Peso: ${pokemon.weight}<p>`;
    console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/12')
.then(respuesta => respuesta.json())
.then(pokemon => {
    let element = document.getElementById('elemento3')
    element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
    <img src='${pokemon.sprites.front_default}'><p>Altura: ${pokemon.height}<p><p>Peso: ${pokemon.weight}<p>`;
    console.log(pokemon)
})
.catch(err=>console.log(err))