import { useNavigate } from 'react-router-dom'

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const navigate = useNavigate();

    const pathImg = `/assets/${id}.jpg`;

    return (

        <div className="col">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={pathImg} alt={superhero} className="card-img" />
                    </div>
                    <div className="col-8">

                        <div className="card-body">
                            <h5 className="card-title" >{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                (alter_ego !== characters)
                                &&
                                (<p className="text-muted">{characters}</p>)
                            }

                            <p className="card-text">
                                <small className="tetx-muted" >{first_appearance}</small>
                            </p>

                            <button className='btn btn-primary' onClick={() => navigate(`/hero/${id}`)} >
                                Mas...
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default HeroCard
