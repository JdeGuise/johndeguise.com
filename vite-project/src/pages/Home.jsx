import { useEffect } from 'react';

import './../App.css'
import './Home.css'

import Nav from '../components/Nav';
import About from '../components/About';
import Job from '../components/Job';
import Footer from '../components/Footer';

import jobs_json from '../data/jobs.json'

function Home() {
  return (
    <div className="body-wrapper">
      <div className="jumbotron">
        <div className="container pt-5">
            <div className="column content">
              <div className="content-details">
                <img className="lang-logo" src="profilepic.jpg" alt="Profile Picture"/>
                <div className="jumbotron-info">
                  <h1 className="jumbotron-header">Hey, I'm John.</h1>
                  <p className="jumbotron-description-one">Full stack developer.</p>
                  <p className="jumbotron-description-two">I build useful things for the modern web.</p>
                </div>

                <Nav/>
              </div>
            </div>
          <div className="column summary">
            <About/>

            <section id="experience">
              {jobs_json.jobs.map(function(job){
                return <Job key={job} job={job}/>;
              })}
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home