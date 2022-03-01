import { heroes } from "../data/heroes"



export const getHeroeByName = (name = '') => {

    console.log('call getHeroeByName');
    
    if(name === ''){
        return [];
    }


    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

}


