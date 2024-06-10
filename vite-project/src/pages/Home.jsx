import { useEffect } from 'react';

import './../App.css'
import './Home.css'

import Nav from '../components/Nav';
import About from '../components/About';
import Job from '../components/Job';
import Footer from '../components/Footer';

import jobs_json from '../data/jobs.json'
import startTypeWriter from '../utils/utils';

import Pdf from './../assets/JdeGuise.pdf';

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

          <div className="column summary">
            <About/>

            <section id="experience">
              {jobs_json.jobs.map(function(job){
                return <Job key={job} job={job}/>;
              })}

              <a href={Pdf} target ="_blank">View Resume</a>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home