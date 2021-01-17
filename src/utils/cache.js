export const setCache = (pokemons) => {
  localStorage.setItem("pokemons", JSON.stringify(pokemons));
};

export const getCache = () => JSON.parse(localStorage.getItem("pokemons"));
