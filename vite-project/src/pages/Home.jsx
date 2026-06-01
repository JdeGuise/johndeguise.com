import { useEffect } from 'react'

import './../App.css'
import './Home.css'

import Nav from '../components/Nav';
import About from '../components/About';
import Services from '../components/Services';
import Approach from '../components/Approach';
import Job from '../components/Job';
import SectionHeader from '../components/SectionHeader';
import ClosingCta from '../components/ClosingCta';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

import jobs_json from '../data/jobs.json'

function Home() {
  // Reveal sections as they scroll into view, echoing the hero's entrance.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="body-wrapper">
      <ThemeToggle/>
      <main className="jumbotron">
        <div className="container pt-5">
            <div className="column content">
              <div className="content-details">
                <img className="lang-logo" src="profilepic.jpg" alt="Profile Picture" width="200" height="200"/>
                <div className="jumbotron-info">
                  <p className="jumbotron-eyebrow">Full-stack engineer · AI specialist</p>
                  <h1 className="jumbotron-header">Hey, I&apos;m <span className="jumbotron-name">John</span>.</h1>
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

            <section className="reveal" id="experience">
              <SectionHeader num="03" label="Track Record" />
              {jobs_json.jobs.map(function(job){
                return <Job key={job.header} job={job}/>;
              })}
            </section>
          </div>
        </div>

        <ClosingCta/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home