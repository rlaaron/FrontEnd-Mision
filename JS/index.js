/*const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
        .then(res => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./pokemon-sad.gif")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
}

*/


const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            if (data) {
                //imagenes
                console.log(data);
                let pokeImg1 = data.sprites.other.dream_world.front_default;
                pokeImage(pokeImg1);
                console.log(pokeImg1);
                
                let pokeImg2 = data.sprites.other.home.front_default;
                pokeImage2(pokeImg2);
                console.log(pokeImg2);

                let pokeImg3 = data.sprites.other.home.front_shiny;
                pokeImage3(pokeImg3);
                console.log(pokeImg3);

                let pokeImg4 = data.sprites.other["official-artwork"].front_default;
                pokeImage4(pokeImg4);
                console.log(pokeImg4);
                //nombre
                let nombre = data.name;
                nombre_(nombre);
                console.log(nombre);
                //tipo
                let tipo = data.types.map(typ => typ.type.name);
                type(tipo);
                console.log(tipo);
                //habilidades

                let habilidades = data.abilities.map(hbty => hbty.ability.name);
                habilidades1(habilidades)
                console.log(habilidades);
                //estadisticas numero
                let estadisticasNumber = data.stats.map(std => std.base_stat)//;
                
                console.log(estadisticasNumber);
                //estadisticas nombre
                //let estadisticasNombre = data.stats.map(stdName => stdName.stat.name );
                estacsl(estadisticasNumber);
                //estacsl(estadisticasNombre, estadisticasNumber);
                //estacsl(`${estadisticasNombre[i]}: ${estadisticasNumber[i]}`);
                
                
                

                //movimientos
                let movimientos = data.moves.map(mvm => mvm.move.name);
                mosv(movimientos);
                console.log(movimientos);
            }
        })    
        .catch(error => {
            ns_encontrado()
            pokeImage("./img/angry.gif")
            pokeImage2("./img/angry.gif")
            pokeImage3("./img/angry.gif")
            pokeImage4("./img/angry.gif")
            console.log(error);
        })       

}
//imagenes
const ns_encontrado = () => {
    const nombre1 = document.getElementById("name");
    nombre1.innerHTML = ("POKEMON NO ENCOTRADO, INGRESE ID VALIDO" );
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeImage2 = (url) => {
    const pokePhoto2 = document.getElementById("pokeImg2");
    pokePhoto2.src = url;
}
const pokeImage3 = (url) => {
    const pokePhoto3 = document.getElementById("pokeImg3");
    pokePhoto3.src = url;
}
const pokeImage4 = (url) => {
    const pokePhoto4 = document.getElementById("pokeImg4");
    pokePhoto4.src = url;
}
// nombre
const nombre_ = (url) => {
    const nombre1 = document.getElementById("name");
    nombre1.innerHTML = ("Nombre: " + url);
}
//tipo

const type = (url) => {
    const type1 = document.getElementById("type");
    type1.innerHTML = ("Tipo: " + url);
}
//habilidades

const habilidades1 = (url) => {
    const habs = document.getElementById("hbs");
    habs.innerHTML = ("Habilidades: " + url);
}
//movimeintos
const mosv = (url) => {
    const mov = document.getElementById("moves");
    mov.innerHTML = ("Movimietnos: " + url);
    console.log(url);
}

//estadisticas
const estacsl = (url) => {
    const stcsl = document.getElementById("s");
    stcsl.innerHTML = (`Estadisticas hp: ${url[0]} attack: ${url[1]} defense: ${url[2]} special-attack defense: ${url[3]} special-defense: ${url[4]} speed: ${url[5]}`);
}


// revisar esto!!!
//let i = 0;
//const estacsl = (url, url2) => {
//        for(i=0; i<6; i++){
//           stcls = (`Estadisticas-${url[i]}: ${url2[i]} `);
//           
//           imprimir(stcls)
//        }  
//}
////const hola = ("Estadisticas-hp: 60, Estadisticas-attack: 62 Estadisticas-defense: 63 Estadisticas-special-attack: 80 Estadisticas-special-defense: 80 Estadisticas-speed: 60")
////imprimir(hola)
//const imprimir = (url) => {
//    const stacs = document.createElement("s");
//    stacs.textContent = url;
//    console.log(url);
//}

