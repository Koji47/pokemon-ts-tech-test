import { pokemonArray } from "./data/pokemon";
import "./styles/style.scss";

const container = document.querySelector<HTMLElement>(".card-container");
const search = document.querySelector<HTMLInputElement>(".searchInput");

if (!container) {
  throw new Error("Issues with container selector");
}
if (!search) {
  throw new Error("Issues with search selector");
}

const cardHTML = (pokemon: Pokemon) => {
  const JoinPokemonTypes = pokemon.types.join(` & `);
  return `<div class="card">
    <img class="card__image" src="${pokemon.sprite}" />
    <div class="card__content">
        <h2 class="card__heading">${pokemon.name}</h2>
        <p class="card__content">${pokemon.name} (#${pokemon.id}) is a ${JoinPokemonTypes} pokemon.</p>
    </div>`;
};

pokemonArray.forEach((pokemon) => {
  const card = cardHTML(pokemon);
  container.innerHTML += card;
});

const filterPokemonArrayByName = (searchTerm: string) => {
  const filteredPokemon = pokemonArray.filter((pokemon) =>
    pokemon.name.includes(searchTerm)
  );
  console.log(filteredPokemon);

  changeHTMLByName(filteredPokemon);
};

const changeHTMLByName = (ilteredPokemon: Pokemon[]) => {
  container.innerHTML = ``;
  ilteredPokemon.forEach((pokemon) => {
    const card = cardHTML(pokemon);
    container.innerHTML += card;
  });
};

search.addEventListener("input", (event: Event) =>
  filterPokemonArrayByName(search.value)
);
