import './home.css'
import { Link } from 'react-router-dom'

export const Home = () =>{
  return(
    <div className='home'>
     <div className='home-position'>
       
       <Link to='/jeu'>
      <button className="button-64" type="button"><span className="text">JOUER !</span></button>
      </Link>
     </div>
    </div>
  )
}