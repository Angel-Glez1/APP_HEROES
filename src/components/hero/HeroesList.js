import { useMemo } from 'react';
import { getHeroesByPublicher } from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';


export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublicher(publisher), [publisher]);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3 mt-5' >

            {
                heroes.map(heroe => (
                    <HeroCard
                        key={heroe.id}
                        {...heroe}
                    />
                ))

            }



        </div>
    )
}
