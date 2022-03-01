import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useMemo, useState } from 'react'
import { getHeroeByName } from '../../selectors/getHerosByName';
import HeroCard from '../hero/HeroCard';


export const SearchSreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);


    const [search, setSearch] = useState({ searchText: q });
    const { searchText } = search;




    const heroesFileted =  useMemo( () => getHeroeByName(q), [q]);


    // * setea el valor del input en el state
    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear los query string..
        navigate(`?q=${searchText}`);


    }


    return (
        <>
            <h1 className='mt-5'>Busquedas</h1>
            <hr />

            <div className='row '>
                <div className='col-md-5'>
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSubmit} >
                        <input
                            type="text"
                            placeholder='name'
                            className='form-control'
                            autoComplete='off'
                            name='searchText'
                            value={searchText}
                            onChange={handleChange}
                        />

                        <button type='submit' className='btn btn-outline-primary mt-2' >
                            Buscar
                        </button>

                    </form>
                </div>



                <div className='col-md-7'>
                    <h4>Resultado</h4>
                    <hr />

                    {
                        (q === '') 
                        ?(<div className='alert alert-info'> Busca a un heore.</div>) 
                        :
                        heroesFileted.map(heroe => (
                            <HeroCard
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }

                </div>



            </div>

        </>
    )
}
