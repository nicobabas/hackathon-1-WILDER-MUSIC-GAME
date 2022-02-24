import React from 'react';
import './rules.css';

const Rules = () => {
    return (
  <div className="rules-global">    
        <h2>But du jeu</h2>
        <div className="rules">
        <p>Le but du jeu est de deviner, à partir de courts extraits, l'artiste ayant interprété la chanson en court d'écoute. </p>
      </div>
        <h2>Débuter une partie</h2>
        <div className="rules">
        <p>Sur la page d'accueil du site, cliquez sur le bouton "JOUER!".
        Vous serez donc sur le point de commencer le Level numéro 1 du jeu.
        Une fois arrivé à la première partie, lancez l'enregistrement de la musique. 
        Lorsque vous avez trouvé l'artiste vous devrez cliquer sur l'avatar correspondant afin de valider la partie.
        Vous pourrez accéder au niveau supérieur (level 2) après avoir terminé les 10 premières parties. Le niveau 1 correspond à des chansons connnues, tandis que les niveaux supérieurs comportent toutes les chansons, des plus célèbres aux moins connues.
        Durant chaque partie, vous accumulerez des points dont le score vous sera révélé à la fin du premier level (Voir ci-dessous la partie Score).</p>
      </div>
        <h2>Fonctionnement</h2>
        <div className="rules">
        <p>Pour deviner le nom de l'artiste, vous disposez d'une écoute illimitée de la chanson. En revanche, vous n'aurez le droit qu'à un seul essai par partie !
          Alors faites bien votre choix avant de cliquer sur un avatar.</p>
      </div>
        <h2>Score</h2>
        <div className="rules">
        <p>A chaque artiste deviné, vous marquerez un point. Un total de 10 points maximum est possible par niveau.</p>
      </div>
        <h2>Fin du jeu</h2>
        <div className="rules">
        <p>A la fin d'un niveau, deux choix vous seront donc proposées : revenir à l'accueil, pour éventuellement passer au level suivant, ou bien retenter l'expérience sur le niveau actuel.
       </p>
      </div>
        <h2>Remarques</h2>
        <div className="rules">
        <p>Wilder Game Music est optimisé pour le navigateur Google Chrome en mode plein écran. 
          Néanmoins, il a été testé sur divers autres navigateurs. 
          Si vous constatez un problème d'affichage, n'hésitez pas à contacter l'administrateur pour le lui signaler en n'omettant pas de préciser quel navigateur (nom et version) vous utilisez. 
          Enfin, si vous constatez ce qui vous semble être un bug ou un problème quelconque, n'hésitez pas à contacter l'administrateur.</p>
      </div>
        <h3>Bon jeu !</h3>
  </div>
    );
  };
  
  export default Rules;