import { heroes } from "../data/heroes"

export const getHeroesByPublicher = (publisher) => {
    console.log('Hola amigos');
    return heroes.filter( h => h.publisher === publisher );
}


