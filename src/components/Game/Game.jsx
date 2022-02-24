import "./game.css"
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import eminem from '../../assets/eminem.jpg';
import jazy from '../../assets/jazy.jpg';
import west from '../../assets/west.jpg';
import lapin from '../../assets/lapin.jpg';
import { Link } from 'react-router-dom';
import { FaGooglePlay } from 'react-icons/fa';
import { ScoreContext, ProgressContext } from "../../contexts/ScoreContext";
import ProgressBar from "../ProgressBar/ProgressBar";


const Game = () =>{
  const [getArtist, setGetArtist] = useState([]);
  const [getAudio, setGetAudio] = useState([]);
  const [responseClicked, setResponseClicked] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { score, setScore } = useContext(ScoreContext);
  const { progress, setProgress } = useContext(ProgressContext);

  useEffect(() => {
    getDatasFromApi()
  },[]);
  

  const getDatasFromApi = () => {
    axios.get('https://api.genius.com/songs/235729?&access_token=kHlswgpJan-ohBQA1nbSld0RxRwgYz0-cq7xS3BRJzYSenfemZixNba4ndls_u4-')
    .then(response => {
      setGetArtist(response.data.response.song)
      setGetAudio(response.data.response.song.media[0])
    });
  };
  
  const convertUrlYoutube = () => {
    const url = getAudio?.url
    const id = url?.split("=")[1];
    return `https://www.youtube.com/embed/${id}?autoplay=1`
  }

  const results = () => {
    setResponseClicked(true);
    setBtnDisabled(false);
  };

  const goodAnswer = () => {
    if (responseClicked === true) {
      setScore(score + 0)
    } else {
    setScore(score + 1);
    }
  };

  return(
    <div className='game'>

      <span>
        <ProgressBar progress={progress} />
      </span>

      <div className='score'>
        <h2>{score}/10</h2>
      </div>
      <div className='lecteur-container'>
        <div className="lecteur">
        {
          getArtist && getAudio ?
          <iframe width="500" height="300" src={convertUrlYoutube()} title="YouTube video player" frameborder="0" allow="accelerometer; controlautoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          :
          'Loading...'
        }
        </div>
        <div className="play">
          <FaGooglePlay size={100} color='#05062D'/>
        </div>
      </div>
      <div className='game-avatar'>
        <h2 className='question'>Qui chante ?</h2>
        <div className={responseClicked ? 'avatar right' : 'avatar'}><img src={eminem} onClick={() => {results(); goodAnswer()}} alt="eminem" /></div>
        <div className={responseClicked ? 'avatar wrong' : 'avatar '}><img src={jazy} onClick={results} alt="jazy" /></div>
        <div className={responseClicked ? 'avatar wrong' : 'avatar '}><img src={west} onClick={results} alt="west" /></div>
        <div className={responseClicked ? 'avatar wrong' : 'avatar '}><img src={lapin} onClick={results} alt="lapin" /></div>
      </div>
      <Link to='/jeu2'>
        <div className="next">
          <button disabled={btnDisabled} className='button-63' onClick={() => setProgress(progress + 10)}>Suivant</button>
        </div>
      </Link>

    </div>
  )
}

export default Game;
