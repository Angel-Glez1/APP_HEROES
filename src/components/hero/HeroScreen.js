import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeByID } from '../../selectors/getHeroeById';



export const HeroScreen = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const heroe = useMemo(() => getHeroeByID(id), [id]) ;


    if (!heroe) {
        return <Navigate to={'/marvel'} />
    }

    const pathImg = `/assets/${id}.jpg`;

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={pathImg} alt={heroe.superhero} className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>{heroe.superhero}</h3>
                <ul className="list-group list-group"  >
                    <li className="list-group-item"> <b>{heroe.alter_ego}</b></li>
                    <li className="list-group-item"> <b>{heroe.publisher}</b></li>
                    <li className="list-group-item"> <b>{heroe.first_appearance}</b></li>
                </ul>

                <h5 className='mt-5'>Characters</h5>
                <p>{heroe.characters}</p>

                <button

                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Regresar
                </button>

            </div>
        </div>
    )
}
