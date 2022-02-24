import './final.css'
import { useContext } from "react";
import { ScoreContext, ProgressContext } from "../../contexts/ScoreContext";
import { Link } from 'react-router-dom';

const Final = () =>{
  const { score, setScore } = useContext(ScoreContext);
  const { progress, setProgress } = useContext(ProgressContext);

  return(
  <div className='final'>
    <div className='tracks-list'>
      <h2>Vous avez écouté:</h2>
      <p>Rap God - Eminem</p>
      <p>Benz Truck - Lil Peep</p>
      <p>Titanium - David Guetta</p>
      <p>On était beau - Louane</p>
      <p>Jaloux - DADJU</p>
      <p>Bad Romance - Lady Gaga</p>
      <p>Juste une photo de toi - M Pokora</p>
      <p>Rue de la Paix - Zazie</p>
      <p>Jusqu'au bout - Amel Bent</p>
      <p>San - Orelsan</p>
    </div>
    <div className='final-score'>
      <div>
        <h1 className='final-h1'>
          Votre Score est de: {score}/10 : 
        </h1> 
      </div>
      <div className="next">
          <Link to="/">
            <button className="button-63" onClick={() => {setProgress(progress === 10); setScore(0)}} >Accueil</button>
          </Link>
          <Link to="/jeu">
            <button onClick={() => {setProgress(progress === 10); setScore(0)}} className="button-63">
              Réessayer
            </button>
          </Link>
        </div>
      </div>
  </div>
  )
}

export default Final;