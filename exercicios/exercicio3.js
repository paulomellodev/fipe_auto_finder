const getRickAndMortyCharacters = async () => {
  const characters = {
    "Rick Sanchez": "Rick Sanchez",
    "Morty Smith": "Morty Smith",
    "Summer Smith": "Summer Smith",
    "Beth Smith": "Beth Smith",
    "Jerry Smith": "Jerry Smith",
  };

  const gender = {
    Male: "Homem",
    Female: "Mulher",
  };

  const species = {
    Human: "Humano",
    Alien: "Alien",
  };

  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    const { results } = await response.json();

    const result = results
      .filter((character) => {
        if (characters[character.name]) {
          delete characters[character.name];
          return true;
        } else {
          return false;
        }
      })
      .map((character) => {
        return {
          nome: character.name,
          genero: gender[character.gender],
          avatar: character.image,
          especie: species[character.species],
        };
      });
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

(async () => {
  try {
    const characters = await getRickAndMortyCharacters();
    console.log(characters);
  } catch (error) {
    console.error(error);
  }
})();

module.exports = getRickAndMortyCharacters;
