import React, { useEffect } from 'react';

import './../App.css'
import './Home.css'

import Nav from '../components/Nav';
import About from '../components/About';
import Job from '../components/Job';
import Footer from '../components/Footer';

import jobs_json from '../data/jobs.json'
import startTypeWriter from '../utils/utils';

function Home() {

  useEffect(() => {
    // This function will be called when the component is mounted
    startTypeWriter();
  }, []); // The empty dependency array ensures this runs only once

  return (
    <div className="body-wrapper">
      <div className="jumbotron">
        <div className="container pt-5">
          <div className="column content">
            <img className="lang-logo" src="profilepic.jpg" alt="Profile Picture"/>
            <div className="jumbotron-info">
              <h1 className="jumbotron-header"></h1>
              <p className="jumbotron-description-one"></p>
              <p className="jumbotron-description-two"></p>
            </div>

            <Nav/>
          </div>

          <div className="column summary" id="about">
            <About/>

            <div id="experience">
              <Job job={jobs_json.jobs[0]}/>
              <Job job={jobs_json.jobs[1]}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home