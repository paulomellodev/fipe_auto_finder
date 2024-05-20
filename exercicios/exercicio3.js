const getRickAndMortyCharacters = async () => {
  const gender = {
    Male: "Homem",
    Female: "Mulher",
  };

  const species = {
    Human: "Humano",
    Alien: "Alien",
  };

  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5"
    );

    const { results } = await response.json();

    const result = results.map((character) => {
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
