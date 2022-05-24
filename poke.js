const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=300';

const pokeGallery$$ = document.querySelector('.gallery');
const miInput$$ = document.querySelector('.miInput');

const getCards = async () => {
  const pokeMAIN = await fetch(pokeURL);
  const pokeJSON = await pokeMAIN.json();
  const pokeData = pokeJSON.results;

  const getTOTAL = async (result) => {
    if (!miInput$$.value) {
        pokeGallery$$.innerHTML = ` `;
      for (let i = 0; i < 300; i++) {
        let pokeAPI = result[i].url;
        let pokeTotal = await fetch(pokeAPI);
        let pokeTotalJSON = await pokeTotal.json();
        let pokemonData = pokeTotalJSON;

        //crear nodods
        const cardDiv$$ = document.createElement('div');
        const titulo$$ = document.createElement('h2');
        const image$$ = document.createElement('img');
        const type$$ = document.createElement('p');

        //info a cada nodo
        titulo$$.textContent = pokemonData.species.name;
        image$$.src = pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default;
        image$$.alt = pokemonData.species.name;
        type$$.textContent = pokemonData.types[0].type.name;

        //añadir nodos al div
        cardDiv$$.appendChild(titulo$$);
        cardDiv$$.appendChild(type$$);
        cardDiv$$.appendChild(image$$);

        //Class
        image$$.classList.add('pokecitos');
        titulo$$.classList.add('texto');
        type$$.classList.add('texto');
        cardDiv$$.classList.add('cartas');

        if (type$$.textContent == 'grass') {
          cardDiv$$.classList.add('grasa');
        }
        if (type$$.textContent == 'fire') {
          cardDiv$$.classList.add('fuegote');
        }
        if (type$$.textContent == 'water') {
          cardDiv$$.classList.add('awita');
        }
        if (type$$.textContent == 'bug') {
          cardDiv$$.classList.add('bixo');
        }
        if (type$$.textContent == 'normal') {
          cardDiv$$.classList.add('normal');
        }
        if (type$$.textContent == 'poison') {
          cardDiv$$.classList.add('veneno');
        }
        if (type$$.textContent == 'electric') {
          cardDiv$$.classList.add('electrico');
        }
        if (type$$.textContent == 'ground') {
          cardDiv$$.classList.add('tierra');
        }
        if (type$$.textContent == 'fairy') {
          cardDiv$$.classList.add('hada');
        }
        if (type$$.textContent == 'fighting') {
          cardDiv$$.classList.add('luxa');
        }
        if (type$$.textContent == 'psychic') {
          cardDiv$$.classList.add('acido');
        }
        if (type$$.textContent == 'rock') {
          cardDiv$$.classList.add('pedrolo');
        }
        if (type$$.textContent == 'ghost') {
          cardDiv$$.classList.add('casper');
        }
        if (type$$.textContent == 'ice') {
          cardDiv$$.classList.add('helado');
        }
        if (type$$.textContent == 'dragon') {
          cardDiv$$.classList.add('dragon');
        }

        //añadir divs a la galeria
        pokeGallery$$.appendChild(cardDiv$$);
      }
    } else {
      pokeGallery$$.innerHTML = ` `;

      for (let i = 0; i < 151; i++) {
        let pokeAPI = result[i].url;
        let pokeTotal = await fetch(pokeAPI);
        let pokeTotalJSON = await pokeTotal.json();
        let pokemonData = pokeTotalJSON;

        if (pokemonData.species.name.toLowerCase().includes(miInput$$.value.toLowerCase().trim())) {
          //crear nodods
          const cardDiv$$ = document.createElement('div');
          const titulo$$ = document.createElement('h2');
          const image$$ = document.createElement('img');
          const type$$ = document.createElement('p');

          //info a cada nodo
          titulo$$.textContent = pokemonData.species.name;
          image$$.src = pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default;
          image$$.alt = pokemonData.species.name;
          type$$.textContent = pokemonData.types[0].type.name;

          //añadir nodos al div
          cardDiv$$.appendChild(titulo$$);
          cardDiv$$.appendChild(type$$);
          cardDiv$$.appendChild(image$$);

          //Class
          image$$.classList.add('pokecitos');
          cardDiv$$.classList.add('cartas');
          titulo$$.classList.add('texto');
          type$$.classList.add('texto');

          if (type$$.textContent == 'grass') {
            cardDiv$$.classList.add('grasa');
          }
          if (type$$.textContent == 'fire') {
            cardDiv$$.classList.add('fuegote');
          }
          if (type$$.textContent == 'water') {
            cardDiv$$.classList.add('awita');
          }
          if (type$$.textContent == 'bug') {
            cardDiv$$.classList.add('bixo');
          }
          if (type$$.textContent == 'normal') {
            cardDiv$$.classList.add('normal');
          }
          if (type$$.textContent == 'poison') {
            cardDiv$$.classList.add('veneno');
          }
          if (type$$.textContent == 'electric') {
            cardDiv$$.classList.add('electrico');
          }
          if (type$$.textContent == 'ground') {
            cardDiv$$.classList.add('tierra');
          }
          if (type$$.textContent == 'fairy') {
            cardDiv$$.classList.add('hada');
          }
          if (type$$.textContent == 'fighting') {
            cardDiv$$.classList.add('luxa');
          }
          if (type$$.textContent == 'psychic') {
            cardDiv$$.classList.add('acido');
          }
          if (type$$.textContent == 'rock') {
            cardDiv$$.classList.add('pedrolo');
          }
          if (type$$.textContent == 'ghost') {
            cardDiv$$.classList.add('casper');
          }
          if (type$$.textContent == 'ice') {
            cardDiv$$.classList.add('helado');
          }
          if (type$$.textContent == 'dragon') {
            cardDiv$$.classList.add('dragon');
          }

          //añadir divs a la galeria
          pokeGallery$$.appendChild(cardDiv$$);
        }
      }
    }
  };
  getTOTAL(pokeData);
};


getCards();


miInput$$.addEventListener('input', getCards);

   function botonTipo(tipo){

       pokeGallery$$.innerHTML= ``

    
       getCardsClase = async () => {
    const pokeMAIN = await fetch(pokeURL);
    const pokeJSON = await pokeMAIN.json();
    const pokeData = pokeJSON.results;
  
    
     getTOTALClase = async (result) => {
        for (let i = 0; i < 151; i++) {
          let pokeAPI = result[i].url;
          let pokeTotal = await fetch(pokeAPI);
          let pokeTotalJSON = await pokeTotal.json();
          let pokemonData = pokeTotalJSON;

          if (pokemonData.types[0].type.name == tipo) {

          //crear nodods
          const cardDiv$$ = document.createElement('div');
          const titulo$$ = document.createElement('h2');
          const image$$ = document.createElement('img');
          const type$$ = document.createElement('p');

          //info a cada nodo
          titulo$$.textContent = pokemonData.species.name;
          image$$.src = pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default;
          image$$.alt = pokemonData.species.name;
          type$$.textContent = pokemonData.types[0].type.name;

          //añadir nodos al div
          cardDiv$$.appendChild(titulo$$);
          cardDiv$$.appendChild(type$$);
          cardDiv$$.appendChild(image$$);
  
          //Class
          image$$.classList.add('pokecitos');
          titulo$$.classList.add('texto');
          type$$.classList.add('texto');
          cardDiv$$.classList.add('cartas');
  
          if (type$$.textContent == 'grass') {
            cardDiv$$.classList.add('grasa');
          }
          if (type$$.textContent == 'fire') {
            cardDiv$$.classList.add('fuegote');
          }
          if (type$$.textContent == 'water') {
            cardDiv$$.classList.add('awita');
          }
          if (type$$.textContent == 'bug') {
            cardDiv$$.classList.add('bixo');
          }
          if (type$$.textContent == 'normal') {
            cardDiv$$.classList.add('normal');
          }
          if (type$$.textContent == 'poison') {
            cardDiv$$.classList.add('veneno');
          }
          if (type$$.textContent == 'electric') {
            cardDiv$$.classList.add('electrico');
          }
          if (type$$.textContent == 'ground') {
            cardDiv$$.classList.add('tierra');
          }
          if (type$$.textContent == 'fairy') {
            cardDiv$$.classList.add('hada');
          }
          if (type$$.textContent == 'fighting') {
            cardDiv$$.classList.add('luxa');
          }
          if (type$$.textContent == 'psychic') {
            cardDiv$$.classList.add('acido');
          }
          if (type$$.textContent == 'rock') {
            cardDiv$$.classList.add('pedrolo');
          }
          if (type$$.textContent == 'ghost') {
            cardDiv$$.classList.add('casper');
          }
          if (type$$.textContent == 'ice') {
            cardDiv$$.classList.add('helado');
          }
          if (type$$.textContent == 'dragon') {
            cardDiv$$.classList.add('dragon');
          }
  
          //añadir divs a la galeria
          pokeGallery$$.appendChild(cardDiv$$);
          }
        }
      
    };
  


    getTOTALClase(pokeData);
    }
    getCardsClase()
}

function refreshPage(){
    window.location.reload();
} 