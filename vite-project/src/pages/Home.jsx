import './../App.css'
import './Home.css'

import Nav from '../components/Nav';
import About from '../components/About';
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
                  <p className="jumbotron-description-one">Senior software engineer.</p>
                  <p className="jumbotron-description-two">I build software that makes complex work feel simpler.</p>
                </div>

                <Nav/>
              </div>
            </div>
          <div className="column summary">
            <About/>

            <section id="experience">
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