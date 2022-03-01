import { heroes } from '../data/heroes'


export const getHeroeByID = id => {

    return heroes.find(h => h.id === id);
    
}