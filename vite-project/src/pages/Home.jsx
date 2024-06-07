import React, { useEffect } from 'react';

import './../App.css'
import './Home.css'
import Job from '../components/Job';
import Footer from '../components/Footer';
import startTypeWriter from '../utils/utils';

function Home() {

  useEffect(() => {
    // This function will be called when the component is mounted
    startTypeWriter();
  }, []); // The empty dependency array ensures this runs only once

  return (
    <div class="body-wrapper">
      <div class="jumbotron">
        <div class="container pt-5">
          <div class="column content">
            <img class="lang-logo" src="profilepic.jpg" alt="Profile Picture"/>
            <div class="jumbotron-info">
              <h1 class="jumbotron-header"></h1>
              <p class="jumbotron-description-one"></p>
              <p class="jumbotron-description-two"></p>
            </div>

            <div class="jumbotron-nav pt-5">
              <div>
                <a href="#about">About</a>
              </div>
              <div>
                <a href="#experience">Experience</a>
              </div>
              <div>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>

          <div class="column summary" id="about">
            <p>
              In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in Virginia, heeft één van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt.
            </p>
            <p>
              Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" (De uitersten van goed en kwaad) door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, "Lorem ipsum dolor sit amet..", komt uit een zin in sectie 1.10.32.
            </p>
            <p>
              Het standaard stuk van Lorum Ipsum wat sinds de 16e eeuw wordt gebruikt is hieronder, voor wie er interesse in heeft, weergegeven. Secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" door Cicero zijn ook weergegeven in hun exacte originele vorm, vergezeld van engelse versies van de 1914 vertaling door H. Rackham.
            </p>

            <div id="experience">
              <Job/>
              <Job/>
              <Job/>
              <Job/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home