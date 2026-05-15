import about_json from '../data/about.json'

function About() {
  return (
    <section className="m-bot-md about-me" id="about" aria-label="About me">
      {about_json.about.map(function(about_paragraph, index) {
        return <p key={index} dangerouslySetInnerHTML={ { __html: about_paragraph } }></p>;
      })}
    </section>
  )
}
  
export default About