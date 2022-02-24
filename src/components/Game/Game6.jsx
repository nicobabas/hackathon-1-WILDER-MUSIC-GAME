import "./game.css"
import rihanna from '../../assets/rihanna.jpg';
import gaga from '../../assets/gaga.jpg';
import grande from '../../assets/grande.jpg';
import beyonce from '../../assets/beyonce.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { FaGooglePlay } from 'react-icons/fa';
import ProgressBar from "../ProgressBar/ProgressBar";
import { ScoreContext, ProgressContext } from "../../contexts/ScoreContext";

const Game6 = () =>{
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
    axios.get('https://api.genius.com/songs/1313?&access_token=kHlswgpJan-ohBQA1nbSld0RxRwgYz0-cq7xS3BRJzYSenfemZixNba4ndls_u4-')
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
        <div className={responseClicked ? 'avatar wrong' : 'avatar '}><img src={rihanna} onClick={results} alt="rihanna" /></div>
        <div className={responseClicked ? 'avatar right' : 'avatar '}><img src={gaga} onClick={() => {results(); goodAnswer()}} alt="gaga" /></div>
        <div className={responseClicked ? 'avatar wrong' : 'avatar '}><img src={grande} onClick={results} alt="grande" /></div>
        <div className={responseClicked ? 'avatar wrong' : 'avatar '}><img src={beyonce} onClick={results} alt="beyonce" /></div>
      </div>
      <Link to='/jeu7'>
        <div className="next">
          <button disabled={btnDisabled} onClick={() => setProgress(progress + 10)} className='button-63'>Suivant</button>
        </div>
      </Link>
    </div>
  )
}

export default Game6;
