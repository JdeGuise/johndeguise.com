import './../App.css'
import './Home.css'

import Nav from '../components/Nav';
import About from '../components/About';
import Services from '../components/Services';
import Approach from '../components/Approach';
import Job from '../components/Job';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

import jobs_json from '../data/jobs.json'

function Home() {
  return (
    <div className="body-wrapper">
      <ThemeToggle/>
      <main className="jumbotron">
        <div className="container pt-5">
            <div className="column content">
              <div className="content-details">
                <img className="lang-logo" src="profilepic.jpg" alt="Profile Picture" width="200" height="200"/>
                <div className="jumbotron-info">
                  <h1 className="jumbotron-header">Hey, I&apos;m John.</h1>
                  <p className="jumbotron-description-one">Full-stack engineer &amp; AI specialist.</p>
                  <p className="jumbotron-description-two">I help teams build and ship full-stack products, from first idea to production.</p>
                  <p className="jumbotron-cta">Curious how AI could accelerate your business but not sure where to start? I bet that <a className="jumbotron-cta-link" href="https://calendly.com/johndeguise" target="_blank" rel="noopener noreferrer">I can help.</a></p>
                </div>

                <Nav/>
              </div>
            </div>
          <div className="column summary">
            <About/>

            <Services/>

            <Approach/>

            <section id="experience">
              <h2 className="experience-heading">Track Record</h2>
              {jobs_json.jobs.map(function(job){
                return <Job key={job.header} job={job}/>;
              })}
            </section>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home